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
  layout: string = "circle"
  layoutChoices = [
    "circle",
    "cose",
    "grid",
    "concentric",
    "breadthfirst",
    "dagre"
  ]
  types = [
    "Process", "Technology", "Library", "Data Type", "Endpoint", "Service Call", "Algorithm Invoked"
  ]
  filtered = new Array<string>()
  constructor(private dataSvc: DataService) {


  }

  public setLayout(newLayout: string) {
    this.layout = newLayout
    let l = this.cy.layout({
      name: this.layout,
      nodeSpacing: 5,
      minNodeSpacing: 30,
      edgeLengthVal: 45,
      animate: true
    });
    l.run()
    this.cy.reset()
    this.cy.fit()
  }

  public toggleFilter(t) {
    let len = this.filtered.length
    let success = _.pull(this.filtered, t)
    if (success.length == len) {
      this.filtered.push(t)
    }

    let keep = new Array<GraphItem>()
    let remove = new Array<GraphItem>()
    this.db.graph.forEach(item => {
      if (item.group == 'nodes') {
        if (_.includes(this.filtered, item.data.type)) {
          remove.push(item)
        } else {
          keep.push(item)
        }
      } else {
        keep.push(item)
      }
    })

    console.log("Removing " + remove.length + " items");
    remove.forEach(item => {
      console.log("Removing " + item.data.id);
      let a = this.cy.getElementById(item.data.id)
      this.cy.remove(a)
    })

    console.log("Done Removing " + remove.length + " items");

    keep.forEach(item => {
      let a = this.cy.getElementById(item.data.id)
      if (item.data.type == t) {
        console.log("Checking on  " + item.data.id);
      }
      if (!a) {
        if (item.data.type == t) {
          console.log(JSON.stringify(a))
          console.log("Adding  " + item.data.id);
        }
        this.cy.add(item)
      } else {
        if (item.data.type == t) {
          console.log("Already There  " + item.data.id);
        }
        // console.log("I think it is already there  " + item.data.id);
      }
    })
    this.setLayout(this.layout)
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

  }

  ngOnInit() {

    this.cy = cytoscape({
      container: this.drawingArea.nativeElement,
      style: this.styles.styles,
      layout: {
        name: 'grid',
        rows: 1
      }
    });
    // if (typeof cytoscape('core', 'panzoom') !== 'function') {
    //   pz(cytoscape)
    // }
    var defaults = {}
    this.cy.panzoom(defaults);
    this.setUpSelector()

    this.dataSvc.getDb().subscribe(db => {
      this.db = db

      console.log("GRAPH" + JSON.stringify(db.graph));
      if (db.graph) {
        db.graph.forEach((i: GraphItem) => {
          this.cy.add(i)
          console.log("ADDING " + i.data.id + " TYPE " + i.data.type);
        })
        let l = this.cy.layout({
          name: this.layout
        });
        l.run()
        this.cy.reset()
        this.cy.fit()
      }
    })
  }

  private setUpSelector() {
    this.cy.on('tap', 'node', evt => {
      let _id = evt.target.id();
      let t = evt.target;
      console.log("Selected Node " + JSON.stringify(evt.target.id()));
    });
    this.cy.on('tap', 'edge', evt => {
      let _id = evt.target.id();
      console.log("Selected Edge " + _id);
    });
  }
}
