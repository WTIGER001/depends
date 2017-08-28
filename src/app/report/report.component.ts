import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { LocalStorageService } from 'angular-2-local-storage'
import { Database, GraphItem } from '../models'
import * as _ from 'lodash'

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  LOCAL_STORAGE_KEY = "ReportComponent.PREFS"

  separatorKeys = [',']
  strItems: string[] = []
  choices = new Array()

  types = [
    "Process", "Technology", "Library", "Data Type", "Intent", "Endpoint", "Algorithm"
  ]

  db: Database
  prefs = new Prefs()

  c_1: boolean
  c_2: boolean
  c_3: boolean
  c_4: boolean

  constructor(private dataSvc: DataService, private localStorage: LocalStorageService) {
    // Load Preferences 
    let str = <string>this.localStorage.get(this.LOCAL_STORAGE_KEY)
    if (str) {
      this.prefs = JSON.parse(str)
    }

    // Get the data
    this.dataSvc.getDb().subscribe(db => {
      this.db = db
      if (db.graph) {
        db.graph.forEach((i: GraphItem) => {
          if (i.group == 'nodes') {
            this.choices.push({
              display: i.data.label,
              value: i.data.id
            })
          }
        })
        this.choices.sort((a, b) => {
          return a.display.localeCompare(b.display)
        })
      }
    })
  }

  public isFiltered(l: string): boolean {
    return _.includes(this.prefs.filtered, l)
  }

  public toggleFilter(t) {
    // Toggle the filter
    let len = this.prefs.filtered.length
    let success = _.without(this.prefs.filtered, t)
    if (success.length == len) {
      success.push(t)
    }
    this.prefs.filtered = success
    this.savePrefs()
  }

  set items(i: any[]) {
    let newStr = []
    i.forEach(newItem => {
      newStr.push(newItem.value)
    })
    this.strItems = newStr
  }

  public ngOnInit(): void {

  }

  public onAdd(itm) {

  }

  public onRemove(item) {

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
  filtered: string[] = new Array<string>()
}
