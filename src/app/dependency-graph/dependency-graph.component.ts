import { Component, OnInit, ViewChild, AfterContentInit, HostListener, OnDestroy } from '@angular/core';

import { DataService } from '../data.service'
import { Database, GraphItem } from '../models'
import { Styles } from '../styles'

import * as _ from 'lodash'
// import * as cytoscape from 'cytoscape'
// import * as pz from 'cytoscape-panzoom'


@Component({
  selector: 'app-dependency-graph',
  templateUrl: './dependency-graph.component.html',
  styleUrls: ['./dependency-graph.component.css']
})
export class DependencyGraphComponent implements OnInit, AfterContentInit, OnDestroy {

  @ViewChild('drawingArea') drawingArea
  cy: any;
  db: Database
  styles = new Styles()
  layout: string = "concentric"
  layoutChoices = [
    "circle",
    "cose",
    "grid",
    "concentric",
    "breadthfirst",
    "dagre"
  ]
  types = [
    "Process", "Technology", "Library", "Data Type", "Intent", "Endpoint", "Service Call", "Algorithm Invoked"
  ]
  filtered = new Array<string>()
  autoLayout = true
  allNodes = null;
  allEles = null;

  constructor(private dataSvc: DataService) {

  }

  public isLayout(l: string): boolean {
    return this.layout == l
  }

  public isFiltered(l: string): boolean {
    return _.includes(this.filtered, l)
  }

  public setLayout(newLayout: string) {
    this.layout = newLayout
    this.update()
  }

  public update() {
    let layoutOptions = {
      name: this.layout,
      nodeSpacing: 5,
      minNodeSpacing: 30,
      edgeLengthVal: 45,
      animate: true
    }

    this.getActiveEles().layout(layoutOptions).run()
    // let l: any
    // if (this.autoLayout) {
    //   this.cy.elements().not('.filtered').not('.hidden').layout(layoutOptions).run()
    // } else {
    //   this.cy.layout(layoutOptions).run()
    // }

    // this.fit()
  }

  public toggleFilter(t) {
    // Toggle the filter
    let len = this.filtered.length
    let success = _.pull(this.filtered, t)
    if (success.length == len) {
      this.filtered.push(t)
    }

    console.log("Filters:  " + JSON.stringify(this.filtered));

    this.cy.batch(() => {
      this.cy.nodes().forEach(p => {
        let n = p._private
        let type = n.data['type']
        p.removeClass('filtered')
        if (_.includes(this.filtered, type)) {
          console.log("Filtering " + n.data['id'])
          p.addClass('filtered')
        }
      });
      this.update()
    })

    // this.update()
  }

  public highlight(node) {
    var nhood = node.closedNeighborhood();
    var others = this.cy.elements().not(nhood);

    this.cy.batch(() => {
      others.addClass('hidden');
      nhood.removeClass('hidden');

      this.update()
    })
  }

  ngAfterContentInit() {
    var rect = this.drawingArea.nativeElement.getBoundingClientRect();
    let windowH = window.innerHeight
    this.drawingArea.nativeElement.style.height = (windowH - rect.top - 10) + "px"
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    let windowH = event.target.innerHeight
    var rect = this.drawingArea.nativeElement.getBoundingClientRect();
    this.drawingArea.nativeElement.style.height = (windowH - rect.top - 10) + "px"
  }

  ngOnDestroy() {
    this.cy.destroy()
  }

  ngOnInit() {
    // Setup Cy
    this.cy = cytoscape({
      container: this.drawingArea.nativeElement,
      style: this.styles.styles
    });
    this.setUpExtensions()
    this.setUpEvents()

    // Add the nodes
    this.dataSvc.getDb().subscribe(db => {
      this.db = db
      if (db.graph) {
        // Add the nodes
        db.graph.forEach((i: GraphItem) => {
          this.cy.add(i)
        })

        // Get the collections
        this.allNodes = this.cy.nodes();
        this.allEles = this.cy.elements();

        // Layout
        this.update()
      }
    })
  }

  private setUpExtensions() {
    // Setup Extensions
    var defaults = {}
    this.cy.panzoom(defaults);
  }

  private setUpEvents() {
    this.cy.on('tap', 'node', evt => {
      let _id = evt.target.id();
      let t = evt.target;
      this.highlight(t);
    });
    this.cy.on('tap', 'edge', evt => {
      let _id = evt.target.id();
    });
    this.cy.on('taphold', 'node', evt => {
      let _id = evt.target.id();
      let t = evt.target;
    });
    this.cy.on('unselect', 'node', evt => {
      this.cy.batch(() => {
        this.cy.elements().removeClass('hidden')
        this.update()
      })
    })
  }

  private debug(obj: any) {
    let keys = Object.keys(obj)
    keys.forEach(k => {
      console.log(k);
    })
  }

  public getActiveEles(): any {
    if (this.autoLayout) {
      return this.cy.elements().not('.filtered').not('.hidden')
    } else {
      return this.cy.elements()
    }
  }
}
