import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { LocalStorageService } from 'angular-2-local-storage'
import { Database, GraphItem } from '../models'

import * as _ from 'lodash'

@Component({
  selector: 'app-dependency-matrix',
  templateUrl: './dependency-matrix.component.html',
  styleUrls: ['./dependency-matrix.component.css']
})
export class DependencyMatrixComponent implements OnInit {
  LOCAL_STORAGE_KEY = "DependencyMatrixComponent.PREFS"
  types = [
    "Process", "Technology", "Library", "Data Type", "Intent", "Endpoint", "Service Call", "Algorithm Invoked"
  ]

  db: Database
  prefs = new Prefs()

  xHeaders: string[] = new Array()
  yHeaders: string[] = new Array()
  cells: string[][] = new Array()
  cy: any
  selected: any

  constructor(private dataSvc: DataService, private localStorage: LocalStorageService) {
    // Load Preferences 
    let str = <string>this.localStorage.get(this.LOCAL_STORAGE_KEY)
    if (str) {
      this.prefs = JSON.parse(str)
    }

    // Init Cytoscape engine
    this.cy = cytoscape({
      headless: true,
      styleEnabled: false,
    });

    // Get the data
    this.dataSvc.getDb().subscribe(db => {
      this.db = db
      if (db.graph) {
        // Add the nodes
        db.graph.forEach((i: GraphItem) => {
          this.cy.add(i)
        })
        this.generate()
      }
    })
  }

  ngOnInit() {
  }

  public setY(y: string) {
    this.prefs.yAxis = y
    this.savePrefs()
    this.generate()
  }

  public setX(x: string) {
    this.prefs.xAxis = x
    this.savePrefs()
    this.generate()
  }

  public generate() {
    // Get the unique
    this.xHeaders = this.getHeaders(this.prefs.xAxis)
    this.yHeaders = this.getHeaders(this.prefs.yAxis)

    // Get the cells
    let cells: string[][] = []
    for (let row = 0; row < this.xHeaders.length; row++) {
      cells[row] = []
      for (let col = 0; col < this.yHeaders.length; col++) {
        let x = this.xHeaders[row]
        let y = this.yHeaders[col]
        let c = this.getCell(x, y)
        // cells.push(c)
        cells[row][col] = c
      }
    }
    this.cells = cells
  }

  private getCell(xAxis: string, yAxis: string): string {
    let nodex = this.cy.getElementById(xAxis)
    let nodey = this.cy.getElementById(yAxis)

    if (nodex && nodey) {

      let incoming = nodex.incomers('#' + yAxis)
      let outgoers = nodex.outgoers('#' + yAxis)

      let left = false
      let top = false
      let val = ""
      if (incoming && incoming.length > 0) {
        top = true
        val = "fa-arrow-up"
      }
      if (outgoers && outgoers.length > 0) {
        left = true
        val = "fa-arrow-left"
      }
      if (left && top) {
        val = "fa-arrows-alt"
      }
      return val
    } else {
      return ""
    }
  }

  private getHeaders(type: string): string[] {
    let all = new Array<string>()

    let selector = 'node[type=\"' + type + '\"]'
    let items = this.cy.nodes(selector)

    items.forEach(p => {
      let n = p._private
      let id = n.data['id']
      all.push(id)
    });

    return all
  }

  public toggleVersion() {
    this.prefs.showVersion = !this.prefs.showVersion
    this.savePrefs()
    this.updateVersion()
  }

  public updateVersion() {
    //TODO
  }

  public select(id: String) {
    let item = undefined
    this.db.processes.forEach(p => {
      if (p.process_name == id) {
        item = p
      }
    })
    this.selected = item
  }

  public savePrefs() {
    let str = JSON.stringify(this.prefs)
    this.localStorage.set(this.LOCAL_STORAGE_KEY, str)
  }

  public resetPreferences() {
    this.prefs = new Prefs()
  }
}

class Prefs {
  showVersion = true
  xAxis = "Process"
  yAxis = "Process"
}

