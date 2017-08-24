import { Component, OnInit, ViewChild, AfterContentInit, HostListener, OnDestroy } from '@angular/core';
import * as cytoscape from 'cytoscape'
import * as pz from 'cytoscape-panzoom'

@Component({
  selector: 'app-dependency-graph',
  templateUrl: './dependency-graph.component.html',
  styleUrls: ['./dependency-graph.component.css']
})
export class DependencyGraphComponent implements OnInit, AfterContentInit, OnDestroy {

  @ViewChild('drawingArea') drawingArea
  cy: any;

  constructor() {

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
      elements: [ // list of graph elements to start with
        { // node a
          data: { id: 'a' }
        },
        { // node b
          data: { id: 'b' }
        },
        { // edge ab
          data: { id: 'ab', source: 'a', target: 'b' }
        }
      ],
      style: [ // the stylesheet for the graph
        {
          selector: 'node',
          style: {
            'background-color': '#666',
            'label': 'data(id)'
          }
        },

        {
          selector: 'edge',
          style: {
            'width': 3,
            'line-color': '#ccc',
            'target-arrow-color': '#ccc',
            'target-arrow-shape': 'triangle'
          }
        }
      ],

      layout: {
        name: 'grid',
        rows: 1
      }
    });
    if (typeof cytoscape('core', 'panzoom') !== 'function') {
      pz(cytoscape)
    }
    var defaults = {}
    this.cy.panzoom(defaults);
  }
}
