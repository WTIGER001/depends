import { Component, OnInit } from '@angular/core';
import * as df from 'date-fns';
import { saveAs } from 'file-saver';

import { DataService } from '../data.service';
import { Database, GraphItem } from '../models';
import { StashService } from '../stash.service';

@Component({
  selector: "app-data-manager",
  templateUrl: "./data-manager.component.html",
  styleUrls: ["./data-manager.component.css"]
})
export class DataManagerComponent implements OnInit {
  type = "pie_advanced";
  view: any[] = [700, 400];
  histogram: any;
  histogramEdges: any;

  // options
  showLegend = true;
  xAxisLabel = "Country";
  showYAxisLabel = true;
  yAxisLabel = "Population";

  colorScheme = {
    domain: ["#5AA454", "#A10A28", "#C7B42C", "#AAAAAA"]
  };

  database: Database;
  repos = new Array();
  constructor(private dataService: DataService, private stash: StashService) {
    this.dataService.getDb().subscribe(db => {
      this.database = db;
      this.histogram = DataService.countNodes(this.dataService.cy.elements());
      this.histogramEdges = DataService.countEdges(
        this.dataService.cy.elements()
      );
    });
  }

  ngOnInit() {}

  public clearDb() {
    this.dataService.clearDb();
  }

  public fileChange(event) {
    let files = event.target.files;
    this.dataService.addFiles(files, () => {});
  }

  downloadFile() {
    let data: string = JSON.stringify(this.database);
    var blob = new Blob([data], { type: "application/json;charset=utf-8" });
    saveAs(blob, "database.json");
  }

  public onSelect(event) {
    console.log("Selected");
  }

  public readProcessFile(slug: string) {
    this.stash.getProcessesFile(slug).subscribe(
      data => {
        console.log(data);
        this.repos = data;
      },
      err => {
        console.log("ERROR READING FILE" + JSON.stringify(err));
        console.error(err);
      }
    );
  }

  public getRepoList() {
    this.stash.getRepos().subscribe(
      data => {
        console.log(data);
        this.repos = data;
      },
      err => {
        console.log("ERROR " + JSON.stringify(err));
        console.error(err);
      }
    );
    console.log("clicked");
  }

  public randomDates() {
    this.dataService.cy.elements().forEach(i => {
      let n: GraphItem = i._private;

      // Generate a random date

      let yr = 2017;
      let mon = Math.floor(Math.random() * 3) + 9;
      let days = Math.floor(Math.random() * 60) + 1;
      let dateStart = new Date(yr, mon, 0, 0, 0, 0);
      let dt = df.addDays(dateStart, days);
      let duration = Math.floor(Math.random() * 30) + 1;
      n.data.start_date = dt;
      n.data.finish_date = df.addDays(dt, duration);
    });
  }

  public edgeLabels() {
    let types = this.dataService.nodeTypes;
    this.dataService.cy.nodes().forEach(i => {
      let n: GraphItem = i._private;
      let type = n.data.type;
      types.forEach(t => {
        if (t.value == type.toLowerCase()) {
          n.data.type = t.value;
        }
      });
    });

    this.dataService.cy.edges().forEach(i => {
      let n: GraphItem = i._private;

      let a = this.dataService.label(n.data.target);
      let b = this.dataService.label(n.data.source);
      let c = this.dataService.edgeTypeLabel(n.data.type);

      if (!c) {
        n.data.type = "dependency";
        c = "Depends On";
      }

      n.data.label = b + " " + c + " " + a;
    });
  }
}
