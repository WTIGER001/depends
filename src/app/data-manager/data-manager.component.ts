import { Component, OnInit } from '@angular/core';
import { Database, GraphItem } from '../models';
import { DataService } from '../data.service';
import { saveAs } from 'file-saver';
import * as df from 'date-fns';

@Component({
  selector: 'app-data-manager',
  templateUrl: './data-manager.component.html',
  styleUrls: ['./data-manager.component.css']
})
export class DataManagerComponent implements OnInit {

  database: Database
  repos = new Array()
  constructor(private dataService: DataService) {
    this.dataService.getDb().subscribe(db => {
      this.database = db
    })
  }

  ngOnInit() {

  }

  public clearDb() {
    this.dataService.clearDb()
  }

  public fileChange(event) {
    let files = event.target.files
    this.dataService.addFiles(files, () => {

    })
  }

  downloadFile() {
    let data: string = JSON.stringify(this.database)
    var blob = new Blob([data], { type: 'application/json;charset=utf-8' });
    saveAs(blob, 'database.json');

  }

  public readProcessFile(slug: string) {
    this.dataService.getProcessesFile(slug).subscribe(data => {
      console.log(data);
      this.repos = data
    }, err => {
      console.log("ERROR READING FILE" + JSON.stringify(err));
      console.error(err)
    })
  }

  public getRepoList() {
    this.dataService.getRepos().subscribe(data => {
      console.log(data);
      this.repos = data
    }, err => {
      console.log("ERROR " + JSON.stringify(err));
      console.error(err)
    })
    console.log("clicked");

  }

  public randomDates() {
    this.dataService.cy.elements().forEach(i => {
      let n: GraphItem = i._private

      // Generate a random date 

      let yr = 2017
      let mon = Math.floor(Math.random() * 3) + 9
      let days = Math.floor(Math.random() * 60) + 1
      let dateStart = new Date(yr, mon, 0, 0, 0, 0)
      let dt = df.addDays(dateStart, days)
      let duration = Math.floor(Math.random() * 30) + 1
      n.data.start_date = dt
      n.data.finish_date = df.addDays(dt, duration)
    });
  }

  public edgeLabels() {
    let types = this.dataService.nodeTypes
    this.dataService.cy.nodes().forEach(i => {
      let n: GraphItem = i._private
      let type = n.data.type
      types.forEach(t => {
        if (t.value == type.toLowerCase()) {
          n.data.type = t.value
        }
      })
    });

    this.dataService.cy.edges().forEach(i => {
      let n: GraphItem = i._private

      let a = this.dataService.label(n.data.target)
      let b = this.dataService.label(n.data.source)
      let c = this.dataService.edgeTypeLabel(n.data.type)

      if (!c) {
        n.data.type = "dependency"
        c = "Depends On"
      }

      n.data.label = b + " " + c + " " + a
    });
  }
}

