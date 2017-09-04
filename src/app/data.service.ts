import { Injectable } from '@angular/core';
import { Http, Response, RequestOptionsArgs, RequestOptions, Headers } from '@angular/http'
import { Observable, BehaviorSubject } from 'rxjs'
import { LocalStorageService } from 'angular-2-local-storage';
import { UUID } from 'angular2-uuid';

import { Database, Process, GraphItem, ProcessExtra } from './models'
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
  public cy: any
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

    this.generateCy(db)
    this.database = new BehaviorSubject(db)
    this.deconflict(db)
  }

  private generateCy(db: Database) {
    // Init Cytoscape engine
    let cy = cytoscape({
      headless: true,
      styleEnabled: false,
    });

    if (db.graph) {
      // Add the nodes
      db.graph.forEach((i: GraphItem) => {
        cy.add(i)
      })
    }
    this.cy = cy
  }

  public getDb(): Observable<Database> {
    return this.database.asObservable()
  }

  public add(item: GraphItem) {
    this.database.getValue().graph.push(item)
    this.deconflict()
    this.cy.add(item)
  }

  public addEdge(target: string, source: string, type: string, version?: string) {
    let e = new GraphItem()
    e.group = 'edges'
    e.data.target = target
    e.data.source = source
    e.data.id = UUID.UUID()
    e.data.from = e.data.source
    e.data.to = e.data.target
    e.data.label = version
    e.data.type = type

    // Check if the target and source already exist
    if (!this.exists(target)) {
      let tNode = DataService.makeDefault(target)
      this.add(tNode)
    }
    if (!this.exists(source)) {
      let sNode = DataService.makeDefault(source)
      this.add(sNode)
    }

    this.database.getValue().graph.push(e)
    this.cy.add(e)
  }

  public remove(id: string) {
    this.cy.remove('#' + id)
    _.remove(this.database.getValue().graph, item => (item.data.id == id))
  }

  public static makeDefault(id: string, type: string = "Generated", name?: string): GraphItem {
    let n = new GraphItem()
    n.data.id = id
    n.data.type = type
    n.data.label = (name) ? name : id
    return n
  }

  public makeIfNeeded(id: string, type: string = "Generated", name?: string): GraphItem {
    let n = this.getItem(id)
    if (!n) {
      n = DataService.makeDefault(id, type, name)
      this.add(n)
    }
    return n
  }

  public exists(id: string): boolean {
    return (this.cy.getElementById(id))
  }

  public getItem(id: string): GraphItem {
    let item = this.cy.getElementById(id)
    if (item && item._private && item.length == 1) {
      return item._private
    }
    return undefined
  }

  public getEdgesFrom(id: string): GraphItem[] {
    let item = this.cy.getElementById(id)
    if (item) {
      let rtn = []
      let items = []
      items.push(...item.outgoers())
      items.forEach(element => {
        let nodeEdge = element._private
        if (nodeEdge.group == 'edges') {
          rtn.push(nodeEdge)
        }
      });
      return rtn
    } else {
      return []
    }
  }
  public findItem(id: string): GraphItem {
    return this.getItem(id)
    // let db = this.database.getValue();
    // return _.find(db.graph, item => {
    //   return item.data.id == id
    // })
  }

  public findAll(term: string): string[] {
    let lcase = term.toLocaleLowerCase()
    let vals: string[] = []
    this.database.getValue().graph.forEach(item => {
      if (item.data.id.toLocaleLowerCase().startsWith(lcase)) {
        vals.push(item.data.id)
      }
    })
    vals.sort()
    return vals;
  }

  public findAll2(term: string): GraphItem[] {
    let lcase = term.toLocaleLowerCase()
    let vals: GraphItem[] = []
    this.database.getValue().graph.forEach(item => {
      if (item.group == 'nodes' && item.data.label.toLocaleLowerCase().startsWith(lcase)) {
        vals.push(item)
      }
    })
    vals.sort((a, b): number => {
      return a.data.label.localeCompare(b.data.label)
    })
    return vals;
  }

  // public getItem(id: string): Observable<GraphItem> {
  //   let db = this.database.getValue();
  //   db.graph.forEach(item => {
  //     if (item.data.id == id) {
  //       console.log("Returning item");
  //       return Observable.of(item);
  //     }
  //   })
  //   return Observable.from([])
  // }

  public clearDb() {
    this.localStorageService.remove("database")
    this.database.next(new Database())
    this.cy.remove()
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
      if (obj.graph) {
        obj.graph.forEach(item => {
          db.graph.push(item)
        })
      }

      local.set("database", JSON.stringify(db))
      console.log("Wrote to Local Storage");

      callback()
    };
    r.readAsText(file)
  }

  // public addFile(file: File, callback: () => void) {
  //   let local = this.localStorageService
  //   let db = this.database.getValue()
  //   let r = new FileReader()
  //   r.onload = function (e) {
  //     console.log(r.result)
  //     let obj = <Database>JSON.parse(r.result);
  //     let source = file.name.replace(".json", "")
  //     if (obj.processes) {
  //       obj.processes.forEach(p => {
  //         p.source = source
  //         db.processes.push(p)
  //       });
  //     }
  //     if (obj.dataTypes) {
  //       obj.dataTypes.forEach(p => {
  //         p.source = source
  //         db.dataTypes.push(p)
  //       });
  //     }
  //     if (obj.networks) {
  //       obj.networks.forEach(p => {
  //         p.source = source
  //         db.networks.push(p)
  //       });
  //     }
  //     // local.remove("database")
  //     DataService.generateGraph(db)
  //     local.set("database", JSON.stringify(db))
  //     console.log("Wrote to Local Storage");

  //     callback()
  //   };
  //   r.readAsText(file)
  // }

  // public static generateGraph(db: Database) {
  //   let nodes = new Map<string, GraphItem>()

  //   db.processes.forEach(p => {
  //     DataService.addTo(p, nodes)
  //   })
  //   let items = new Array<GraphItem>()
  //   nodes.forEach((value: GraphItem, key: string) => {

  //     if (value.data.type == undefined) {
  //       console.log("Something is BAD " + JSON.stringify(value));
  //     }

  //     if ((value.group === "edges" && value.data.source && value.data.target) || value.group == 'nodes') {
  //       items.push(value)
  //     } else {
  //       console.log("Something is BAD " + JSON.stringify(value));
  //     }
  //   });
  //   db.graph = items
  // }

  // private static addTo(p: Process, nodes: Map<string, GraphItem>) {
  //   // Component
  //   // if (!nodes.has(p.component_name)) {
  //   //   let n = DataService.add(p.component_name, nodes)
  //   //   n.data.type = "Component"
  //   //   n.data.version = "N/A"
  //   // }

  //   // Generate the parent node
  //   let n = DataService.add(p.process_name, nodes)
  //   n.data.parent = DataService.valid(p.component_name)
  //   n.data.type = "Process"
  //   n.data.component = p.component_name
  //   n.data.version = p.version

  //   // Create the process extra
  //   let extra = new ProcessExtra()
  //   extra.component_name = p.component_name
  //   extra.docker_base = p.docker_base
  //   extra.executor_name = p.executor_name
  //   extra.resources = p.resources
  //   n.data.extra = extra

  //   // Technologies
  //   p.platform_technologies_used.forEach(t => {
  //     if (!nodes.has(DataService.valid(t.technology))) {
  //       let n = DataService.add(t.technology, nodes)
  //       n.data.type = "Technology"
  //       n.data.version = t.version
  //     }
  //     let e = new GraphItem()
  //     e.group = 'edges'
  //     e.data.source = DataService.valid(p.process_name)
  //     e.data.target = DataService.valid(t.technology)
  //     e.data.from = e.data.source
  //     e.data.to = e.data.target
  //     e.data.id = DataService.valid(p.process_name + "_" + t.technology)
  //     e.data.label = t.version
  //     e.data.type = "Technology"
  //     // e.type = "Technology"
  //     nodes.set(e.data.id, e)
  //   })

  //   // Libraries
  //   p.third_party_libraries.forEach(l => {
  //     if (!nodes.has(DataService.valid(l.library))) {
  //       let n = DataService.add(l.library, nodes)
  //       n.data.type = "Library"
  //       n.data.version = l.version
  //     }
  //     let e = new GraphItem()
  //     e.group = 'edges'
  //     e.data.source = DataService.valid(p.process_name)
  //     e.data.target = DataService.valid(l.library)
  //     e.data.id = DataService.valid(p.process_name + "_" + l.library)
  //     e.data.from = e.data.source
  //     e.data.to = e.data.target
  //     e.data.label = l.version
  //     e.data.type = "Library"
  //     nodes.set(e.data.id, e)
  //   })

  //   // Data Written
  //   p.data_consumed.forEach(d => {
  //     if (!nodes.has(DataService.valid(d.data_name))) {
  //       let n = DataService.add(d.data_name, nodes)
  //       n.data.type = "Data Type"
  //       n.data.version = d.version
  //     }
  //     let e = new GraphItem()
  //     e.group = 'edges'
  //     e.data.source = DataService.valid(p.process_name)
  //     e.data.target = DataService.valid(d.data_name)
  //     e.data.id = DataService.valid(p.process_name + "_" + d.data_name)
  //     e.data.from = e.data.source
  //     e.data.to = e.data.target
  //     e.data.label = d.version
  //     e.data.type = "Data Consumed"
  //     nodes.set(e.data.id, e)
  //   })

  //   // Data Consumed
  //   p.data_written.forEach(d => {
  //     if (!nodes.has(DataService.valid(d.data_name))) {
  //       let n = DataService.add(d.data_name, nodes)
  //       n.data.type = "Data Type"
  //       n.data.version = d.version
  //     }
  //     let e = new GraphItem()
  //     e.group = 'edges'
  //     e.data.target = DataService.valid(p.process_name)
  //     e.data.source = DataService.valid(d.data_name)
  //     e.data.from = e.data.source
  //     e.data.to = e.data.target
  //     e.data.id = DataService.valid(p.process_name + "_" + d.data_name)
  //     e.data.label = d.version
  //     e.data.type = "Data Written"
  //     nodes.set(e.data.id, e)
  //   })

  //   // Intents 
  //   p.intents_used.forEach(d => {
  //     if (!nodes.has(DataService.valid(d.intent_name))) {
  //       let n = DataService.add(d.intent_name, nodes)
  //       n.data.type = "Intent"
  //       n.data.version = d.version
  //     }
  //     let e = new GraphItem()
  //     e.group = 'edges'
  //     e.data.source = DataService.valid(p.process_name)
  //     e.data.target = DataService.valid(d.intent_name)
  //     e.data.from = e.data.source
  //     e.data.to = e.data.target
  //     e.data.id = DataService.valid(p.process_name + "_" + d.intent_name)
  //     e.data.label = d.version
  //     e.data.type = "Intent Used"
  //     nodes.set(e.data.id, e)
  //   })

  //   // Intents
  //   p.intents_handled.forEach(d => {
  //     if (!nodes.has(DataService.valid(d.intent_name))) {
  //       let n = DataService.add(d.intent_name, nodes)
  //       n.data.type = "Intent"
  //       n.data.version = d.version
  //     }
  //     let e = new GraphItem()
  //     e.group = 'edges'
  //     e.data.target = DataService.valid(p.process_name)
  //     e.data.source = DataService.valid(d.intent_name)
  //     e.data.id = DataService.valid(p.process_name + "_" + d.intent_name)
  //     e.data.from = e.data.source
  //     e.data.to = e.data.target
  //     e.data.label = d.version
  //     e.data.type = "Intent Handled"
  //     nodes.set(e.data.id, e)
  //   })

  //   // Service Calls 
  //   p.service_calls.forEach(d => {
  //     let id = DataService.valid(d.process_name + "_" + d.endpoint)
  //     if (!nodes.has(id)) {
  //       let n = DataService.add(id, nodes)
  //       n.data.type = "Service Call"
  //       n.data.version = d.version
  //     }
  //     let e = new GraphItem()
  //     e.group = 'edges'
  //     e.data.source = DataService.valid(p.process_name)
  //     e.data.target = id
  //     e.data.from = e.data.source
  //     e.data.to = e.data.target
  //     e.data.id = DataService.valid(p.process_name + "_" + id)
  //     e.data.label = d.version
  //     e.data.type = "Service Called"
  //     nodes.set(e.data.id, e)

  //     // Service Calls are also
  //     let n2 = DataService.add(d.process_name, nodes)
  //     n2.data.type = "Process"
  //     n2.data.version = d.version

  //     let e1 = new GraphItem()
  //     e1.group = 'edges'
  //     e1.data.source = DataService.valid(p.process_name)
  //     e1.data.target = DataService.valid(d.process_name)
  //     e1.data.from = e1.data.source
  //     e1.data.to = e1.data.target
  //     e1.data.id = DataService.valid(p.process_name + "_" + d.process_name)
  //     e1.data.label = d.version
  //     e1.data.type = "Process Dependency"
  //     nodes.set(e1.data.id, e1)
  //   })

  //   // Endpoints
  //   p.service_endpoints.forEach(d => {
  //     let id = DataService.valid(p.process_name + "_" + d.endpoint)
  //     if (!nodes.has(id)) {
  //       let n = DataService.add(id, nodes)
  //       n.data.type = "Endpoint"
  //       n.data.version = p.version
  //     }
  //     let e = new GraphItem()
  //     e.group = 'edges'
  //     e.data.source = DataService.valid(p.process_name)
  //     e.data.target = id
  //     e.data.from = e.data.source
  //     e.data.to = e.data.target
  //     e.data.id = DataService.valid(p.process_name + "_" + id)
  //     e.data.label = p.version
  //     e.data.type = "Endpoint"
  //     nodes.set(e.data.id, e)
  //   })

  //   // Algorithms
  //   p.algorithms_invoked.forEach(d => {
  //     if (!nodes.has(DataService.valid(d.alg_name))) {
  //       let n = DataService.add(d.alg_name, nodes)
  //       n.data.type = "Algorithm"
  //       n.data.version = d.version
  //     }
  //     let e = new GraphItem()
  //     e.group = 'edges'
  //     e.data.source = DataService.valid(p.process_name)
  //     e.data.target = DataService.valid(d.alg_name)
  //     e.data.from = e.data.source
  //     e.data.to = e.data.target
  //     e.data.id = DataService.valid(p.process_name + "_" + d.alg_name)
  //     e.data.label = p.version
  //     e.data.type = "Algorithm Invoked"
  //     nodes.set(e.data.id, e)
  //   })

  // }

  // private static add(id: string, nodes: Map<string, GraphItem>): GraphItem {
  //   let realId = DataService.valid(id)
  //   if (!nodes.has(realId)) {
  //     let n = new GraphItem()
  //     n.data.id = realId
  //     n.data.label = id
  //     nodes.set(n.data.id, n)
  //     return n
  //   } else {
  //     return nodes.get(realId)
  //   }
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

  /**
   * Loads the default database
   */
  public loadDefaultData() {
    console.log("Reading Default Database");
    this.http.get("assets/data/database.json").subscribe(res => {
      let db = <Database>res.json()
      // DataService.generateGraph(db)
      db.source = "Default"
      this.database.next(db)
    })
  }

  /**
   * Generates a valid ID for a graph item
   * @param s original ID
   */
  public static valid(s: string): string {
    return s.replace(' ', '_').replace(' ', '_').replace(' ', '_').replace(' ', '_')
  }

  /**
   * Deconflicts and corrects all the nodes in the graph ensuring that there are nodes for each edge and that duplicate ids (edges and nodes) are merged
   * @param db 
   */
  private deconflict(db: Database = this.database.getValue()) {
    let g = db.graph

    // First make sure that there are no duplicates
    let groups = _.groupBy(g, "data.id")
    Object.keys(groups).forEach(id => {
      let arr = groups[id]
      if (arr.length > 1) {
        let keep = arr[0]
        for (let i = 1; i < arr.length; i++) {
          // Copy all the attributes
          Object.assign(keep, arr[i])
          // Remove the duplicate item
          _.pull(g, arr[i])
        }
      }
    })

    // Now make sure that all the nodes are present
    g.forEach(item => {
      if (item.group == 'edges') {
        let t = item.data.target
        if (!groups[t]) {
          let n = new GraphItem()
          n.data.id = t
          n.data.label = t
          n.data.type = "Generated"
          g.push(n)
          groups[t] = [n]
        }

        let s = item.data.source
        if (!groups[s]) {
          let n = new GraphItem()
          n.data.id = s
          n.data.label = s
          n.data.type = "Generated"
          g.push(n)
          groups[s] = [n]
        }
      }
    })

    // Now fix all the ids so they are valid
    g.forEach(item => {
      item.data.id = DataService.valid(item.data.id)
      if (item.group == 'edges') {
        item.data.target = item.data.to = DataService.valid(item.data.target)
        item.data.source = item.data.from = DataService.valid(item.data.source)
        item.data.version = item.data.label
      } else {
        if (item.data.parent) {
          let parent = this.makeIfNeeded(item.data.parent)
          this.addEdge(item.data.parent, item.data.id, "Parent")
          item.data.parent = undefined
        }
      }
    })
  }

}


class Zipped {
  dbs: Database[] = new Array()
  repos: any[] = new Array()
}

class Util {


}