import { Component, OnInit } from '@angular/core';
import { Database } from '../models';
import { DataService } from '../data.service';
import { saveAs } from 'file-saver';

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
}
