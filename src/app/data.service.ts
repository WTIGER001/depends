import { Injectable } from '@angular/core';
import { Http, Response, RequestOptionsArgs, RequestOptions, Headers } from '@angular/http'
import { Observable, BehaviorSubject } from 'rxjs'
import { LocalStorageService } from 'angular-2-local-storage';
import { Database, Process } from './models'
import * as jzip from 'jszip';
import * as _ from 'lodash';

@Injectable()
export class DataService {
  // rest/api/1.0/projects/PIR/repos/target-manager/browse/process.json
  username = " "
  password = " "
  https = "https://"
  stash_url = "bitbucket.di2e.net/"
  stash_api_part = "rest/api/1.0/projects/"
  stash_project = "PIR"

  database: BehaviorSubject<Database>;

  constructor(private localStorageService: LocalStorageService, private http: Http) {
    console.log("Reading from Local Storage");
    let dbString = this.localStorageService.get<string>("database")
    console.log("Read " + dbString);
    if (dbString) {
      let db: Database = JSON.parse(dbString)
      this.database = new BehaviorSubject(db)
    } else {
      this.database = new BehaviorSubject(new Database())
    }
  }

  public getDb(): Observable<Database> {
    return this.database.asObservable()
  }

  public clearDb() {
    this.localStorageService.remove("database")
    this.database.next(new Database())
  }

  public addFiles(files: FileList, callback: () => void) {
    for (let i = 0; i < files.length; i++) {
      this.addFile(files[i], callback)
    }
  }

  public addFile(file: File, callback: () => void) {
    let local = this.localStorageService
    let db = this.database.getValue()
    let r = new FileReader()
    r.onload = function (e) {
      console.log(r.result)
      let obj = <Database>JSON.parse(r.result);
      let source = file.name.replace(".json", "")
      if (obj.processes) {
        obj.processes.forEach(p => {
          p.source = source
          db.processes.push(p)
        });
      }
      if (obj.dataTypes) {
        obj.dataTypes.forEach(p => {
          p.source = source
          db.dataTypes.push(p)
        });
      }
      if (obj.networks) {
        obj.networks.forEach(p => {
          p.source = source
          db.networks.push(p)
        });
      }
      // local.remove("database")
      local.set("database", JSON.stringify(db))
      console.log("Wrote to Local Storage");

      callback()
    };
    r.readAsText(file)
  }

  // public addFile(event) {
  //   let fileList: FileList = event.target.files;
  //   if (fileList.length > 0) {
  //     let file: File = fileList[0];
  //     JSZip().
  //       file.


  //     let formData: FormData = new FormData();
  //     formData.append('uploadFile', file, file.name);
  //     let headers = new Headers();
  //     /** No need to include Content-Type in Angular 4 */
  //     headers.append('Content-Type', 'multipart/form-data');
  //     headers.append('Accept', 'application/json');
  //     let options = new RequestOptions({ headers: headers });
  //     this.http.post(`${this.apiEndPoint}`, formData, options)
  //       .map(res => res.json())
  //       .catch(error => Observable.throw(error))
  //       .subscribe(
  //       data => console.log('success'),
  //       error => console.log(error)
  //       )
  //   }
  // }

  // private unzip(file: File): Observable<Zipped> {

  //   let items = new Zipped()
  //   let jz = new JSZip()
  //   jz.loadAsync(file)
  //     .then(function (zip) {
  //       jz.forEach((path, jzo) => {
  //         jzo.async("string").then(data => {
  //           let item = JSON.parse(data)
  //           if (path == "repos.json") {
  //             items.repos = item.values
  //           } else {
  //             items.dbs.push(item)
  //           }
  //         })
  //       })
  //     });

  // }


  public getProcessesFile(repoName: String) {
    // https://bitbucket.di2e.net/rest/api/1.0/projects/PIR/repos/target-manager/browse/process.json
    let path = this.stash_url + this.stash_api_part + this.stash_project + "/repos/" + repoName + "/browse/process.json";

    let myHeaders = new Headers();
    myHeaders.set('Authorization', 'Basic ' + btoa(this.username + ':' + this.password))
    myHeaders.set('Access-Control-Allow-Origin', '*')

    let requestOptions: RequestOptionsArgs = {
      method: 'GET',
      headers: myHeaders
    };

    return this.http.request(path, requestOptions)
      .map((response: Response) => {
        if (response.status === 204) {
          return undefined;
        } else {
          return response.json();
        }
      });
  }
  public getRepos() {
    // "https://cors-anywhere.herokuapp.com/" +
    let path = this.stash_url + this.stash_api_part + this.stash_project + "/repos";

    // Uncomment for JSON Server (local)
    // path = "http://localhost:3000/values"

    // Uncomment for cors proxy
    // path = "https://localhost:1337/" + path

    let queryParameters = new URLSearchParams();
    queryParameters.set("limit", "1000")

    let myHeaders = new Headers();
    myHeaders.set('Authorization', 'Basic ' + btoa(this.username + ':' + this.password))
    myHeaders.set('Access-Control-Allow-Origin', '*')
    let options = new RequestOptions({ headers: myHeaders });

    console.log("path " + path);
    console.log("OPTIONS" + JSON.stringify(options));


    let requestOptions: RequestOptionsArgs = {
      method: 'GET',
      headers: myHeaders,
      search: queryParameters
    };

    return this.http.get(path, requestOptions)
      .map((response: Response) => {
        if (response.status === 204) {
          return undefined;
        } else {
          return response.json();
        }
      }).catch(DataService.handleError);
  }

  static handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}


class Zipped {
  dbs: Database[] = new Array()
  repos: any[] = new Array()
}