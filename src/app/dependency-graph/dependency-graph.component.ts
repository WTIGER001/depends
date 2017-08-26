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
  @ViewChild('navigator') navigator
  cy: any;

  db: Database
  styles = new Styles()
  layoutChoices = [
    { name: "Circle", vallue: "circle" },
    { name: "COSE", vallue: "cose" },
    { name: "Grid", vallue: "grid" },
    { name: "Concentric", vallue: "concentric" },
    { name: "Breadth First", vallue: "breadthfirst" },
    { name: "Directed Graph", vallue: "dagre" }
  ]
  layout = this.layoutChoices[0]

  types = [
    "Process", "Technology", "Library", "Data Type", "Intent", "Endpoint", "Service Call", "Algorithm Invoked"
  ]
  filtered = new Array<string>()
  autoLayout = true
  showNav = true

  constructor(private dataSvc: DataService) {

  }

  ngAfterContentInit() {
    this.resize()
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    // let windowH = event.target.innerHeight
    // var rect = this.drawingArea.nativeElement.getBoundingClientRect();
    // this.drawingArea.nativeElement.style.height = (windowH - rect.top - 10) + "px"
    this.resize()
  }

  public resize() {
    // Resize the main window
    var rect = this.drawingArea.nativeElement.getBoundingClientRect();
    let windowH = window.innerHeight
    this.drawingArea.nativeElement.style.height = (windowH - rect.top - 10) + "px"

    let r2 = this.drawingArea.nativeElement.getBoundingClientRect()
    let aspect = r2.width / r2.height

    let navH = 100
    let navW = navH * aspect

    let r3 = this.navigator.nativeElement.getBoundingClientRect()
    this.navigator.nativeElement.style.height = (navH + 6) + "px";
    this.navigator.nativeElement.style.width = navW + "px";

  }


  public isLayout(layout: any): boolean {
    return this.layout.vallue == layout.vallue
  }

  public isFiltered(l: string): boolean {
    return _.includes(this.filtered, l)
  }

  public setLayout(newLayout: any) {
    this.layout = newLayout
    this.update()
  }

  public update() {
    let layoutOptions = {
      name: this.layout.vallue,
      nodeSpacing: 5,
      minNodeSpacing: 30,
      edgeLengthVal: 45,
      animate: true
    }

    this.getActiveEles().layout(layoutOptions).run()
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
          p.addClass('filtered')
        }
      });
      this.update()
    })
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



  ngOnDestroy() {
    this.cy.destroy()
  }

  ngOnInit() {
    // Setup Cy
    this.cy = cytoscape({
      container: this.drawingArea.nativeElement,
      style: this.styles.styles,
      wheelSensitivity: .2
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

        // Layout
        this.update()
      }
    })
  }

  private setUpExtensions() {
    // Setup Extensions
    let pzdefaults = {}
    this.cy.panzoom(pzdefaults);

    let navDefaults = { container: this.navigator.nativeElement }
    this.cy.navigator(navDefaults);
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
