import { Injectable } from '@angular/core';
import { Http, Response, RequestOptionsArgs, RequestOptions, Headers } from '@angular/http'
import { Observable, BehaviorSubject } from 'rxjs'
import { LocalStorageService } from 'angular-2-local-storage';
import { Database, Process, GraphItem } from './models'
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

    var db: Database
    if (dbString) {
      // console.log("Read " + dbString);
      db = JSON.parse(dbString)
      db.source = "Local Storage"
    } else {
      db = new Database()
      this.loadDefaultData()
    }
    DataService.generateGraph(db)
    this.database = new BehaviorSubject(db)
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
      DataService.generateGraph(db)
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

  public static generateGraph(db: Database) {
    let nodes = new Map<string, GraphItem>()

    db.processes.forEach(p => {
      DataService.addTo(p, nodes)
    })
    let items = new Array<GraphItem>()
    nodes.forEach((value: GraphItem, key: string) => {

      if (value.data.type == undefined) {
        console.log("Something is BAD " + JSON.stringify(value));
      }

      if ((value.group === "edges" && value.data.source && value.data.target) || value.group == 'nodes') {
        items.push(value)
      } else {
        console.log("Something is BAD " + JSON.stringify(value));
      }
    });
    db.graph = items
  }

  private static addTo(p: Process, nodes: Map<string, GraphItem>) {
    //COmponent
    // if (!nodes.has(p.component_name)) {
    //   DataService.add(p.component_name, nodes).data.type = "Component"
    // }

    // Generate the parent node
    if (!nodes.has(p.process_name)) {
      let n = DataService.add(p.process_name, nodes)
      n.data.parent = p.component_name
      n.data.type = "Process"
    }

    // Technologies
    p.platform_technologies_used.forEach(t => {
      if (!nodes.has(t.technology)) {
        DataService.add(t.technology, nodes).data.type = "Technology"
      }
      let e = new GraphItem()
      e.group = 'edges'
      e.data.source = p.process_name
      e.data.target = t.technology
      e.data.from = e.data.source
      e.data.to = e.data.target
      e.data.id = p.process_name + ":" + t.technology
      e.data.label = t.version
      e.data.type = "Technology"
      // e.type = "Technology"
      nodes.set(e.data.id, e)
    })

    // Libraries
    p.third_party_libraries.forEach(l => {
      if (!nodes.has(l.library)) {
        DataService.add(l.library, nodes).data.type = "Library"
      }
      let e = new GraphItem()
      e.group = 'edges'
      e.data.source = p.process_name
      e.data.target = l.library
      e.data.id = p.process_name + ":" + l.library
      e.data.label = l.version
      e.data.type = "Library"
      nodes.set(e.data.id, e)
    })

    // Data Written
    p.data_consumed.forEach(d => {
      if (!nodes.has(d.data_name)) {
        DataService.add(d.data_name, nodes).data.type = "Data Type"
      }
      let e = new GraphItem()
      e.group = 'edges'
      e.data.source = p.process_name
      e.data.target = d.data_name
      e.data.id = p.process_name + ":" + d.data_name
      e.data.label = d.version
      e.data.type = "Data Consumed"
      nodes.set(e.data.id, e)
    })

    // Data Consumed
    p.data_written.forEach(d => {
      if (!nodes.has(d.data_name)) {
        let n = DataService.add(d.data_name, nodes)
        n.data.type = "Data Type"
      }
      let e = new GraphItem()
      e.group = 'edges'
      e.data.target = p.process_name
      e.data.source = d.data_name
      e.data.id = p.process_name + ":" + d.data_name
      e.data.label = d.version
      e.data.type = "Data Writte"
      nodes.set(e.data.id, e)
    })

    // Intents 
    p.intents_used.forEach(d => {
      if (!nodes.has(d.intent_name)) {
        DataService.add(d.intent_name, nodes).data.type = "Intent"
      }
      let e = new GraphItem()
      e.group = 'edges'
      e.data.source = p.process_name
      e.data.target = d.intent_name
      e.data.id = p.process_name + ":" + d.intent_name
      e.data.label = d.version
      e.data.type = "Intent Used"
      nodes.set(e.data.id, e)
    })

    // Intents
    p.intents_handled.forEach(d => {
      if (!nodes.has(d.intent_name)) {
        DataService.add(d.intent_name, nodes).data.type = "Intent"
      }
      let e = new GraphItem()
      e.group = 'edges'
      e.data.target = p.process_name
      e.data.source = d.intent_name
      e.data.id = p.process_name + ":" + d.intent_name
      e.data.label = d.version
      e.data.type = "Intent Handled"
      nodes.set(e.data.id, e)
    })

    // Service Calls 
    p.service_calls.forEach(d => {
      let id = d.process_name + ":" + d.endpoint
      if (!nodes.has(id)) {
        DataService.add(id, nodes).data.type = "Service Call"
      }
      let e = new GraphItem()
      e.group = 'edges'
      e.data.source = p.process_name
      e.data.target = id
      e.data.id = p.process_name + ":" + id
      e.data.label = d.version
      e.data.type = "Service Called"
      nodes.set(e.data.id, e)
    })

    // Endpoints
    p.service_endpoints.forEach(d => {
      let id = p.process_name + ":" + d.endpoint
      if (!nodes.has(id)) {
        DataService.add(id, nodes).data.type = "End Point"
      }
      let e = new GraphItem()
      e.group = 'edges'
      e.data.source = p.process_name
      e.data.target = id
      e.data.id = p.process_name + ":" + id
      e.data.label = p.version
      e.data.type = "Endpoint Prrovide"
      nodes.set(e.data.id, e)
    })

    // Algorithms
    p.algorithms_invoked.forEach(d => {
      if (!nodes.has(d.alg_name)) {
        DataService.add(d.alg_name, nodes).data.type = "Algorithm"
      }
      let e = new GraphItem()
      e.group = 'edges'
      e.data.source = p.process_name
      e.data.target = d.alg_name
      e.data.id = p.process_name + ":" + d.alg_name
      e.data.label = p.version
      e.data.type = "Algorithm Invoked"
      nodes.set(e.data.id, e)
    })

  }

  private static add(id: string, nodes: Map<string, GraphItem>): GraphItem {
    if (!nodes.has(id)) {
      let n = new GraphItem()
      n.data.id = id
      nodes.set(n.data.id, n)
      return n
    }
  }


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

  public loadDefaultData() {
    console.log("Reading Default Database");
    this.http.get("assets/data/database.json").subscribe(res => {
      let db = <Database>res.json()
      DataService.generateGraph(db)
      db.source = "Default"
      this.database.next(db)
    })
  }

}


class Zipped {
  dbs: Database[] = new Array()
  repos: any[] = new Array()
}