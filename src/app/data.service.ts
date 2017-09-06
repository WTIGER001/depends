import { Injectable } from '@angular/core';
import { Http, Response, RequestOptionsArgs, RequestOptions, Headers } from '@angular/http'
import { Observable, BehaviorSubject } from 'rxjs'
import { LocalStorageService } from 'angular-2-local-storage';
import { UUID } from 'angular2-uuid';

import { Database, GraphItem, ProcessExtra, DbConfig, Label } from './models'
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
      db.structure = new DbConfig()
      this.generateCy(db)

      this.database = new BehaviorSubject(db) //Signals that we are ready
      this.deconflict(db)

    } else {
      db = new Database()
      this.loadDefaultData()
    }


  }

  public get nodeTypes(): Label[] {
    return this.database.getValue().structure.nodeTypes
  }

  public get edgeTypes(): Label[] {
    return this.database.getValue().structure.edgeTypes

  }

  /**
   * Generate the Graph Representation in Cytoscape
   * @param db Database to use
   */
  private generateCy(db: Database) {
    console.log("Generating CY");

    // Init Cytoscape engine
    let cy = cytoscape({
      headless: true,
      styleEnabled: false,
    });

    // if (db.graph) {
    // Add the nodes
    db.graph.forEach((i: GraphItem) => {
      cy.add(i)
    })
    // }
    this.cy = cy
    console.log("Complete CY " + cy.elements().length);
  }

  public getDb(): Observable<Database> {
    return this.database.asObservable()
  }

  public add(item: GraphItem) {
    this.database.getValue().graph.push(item)
    this.deconflict()
    this.cy.add(item)
  }

  public edgeTypeLabel(value: string) {
    return _.result(_.find(this.edgeTypes, { 'value': value }), 'label');
  }

  public label(id: string) {
    let i = this.getItem(id)
    if (i) {
      return i.data.label
    }
    return ""
  }

  public addEdge(target: string, source: string, type: string, version?: string, label?: string, id?: string): GraphItem {
    let e = new GraphItem()
    e.group = 'edges'
    e.data.target = target
    e.data.source = source
    e.data.id = id ? id : UUID.UUID()
    e.data.from = e.data.source
    e.data.to = e.data.target
    e.data.label = label ? label : version
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
    return e
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
  public findItem(value: string, field: string = 'id'): GraphItem {
    if (field == 'id') {
      return this.getItem(value)
    }

    let selector = DataService.selector(value, field)
    this.cy.elements(selector).forEach(item => {
      return item._private
    });

    return undefined
  }

  public static selector(value: string, field: string = 'id') {
    return 'node[ + "field + "=\"' + value + '\"]'
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

      db.structure = new DbConfig()
      this.generateCy(db)

      console.log("DB2");

      this.database.next(db)
      console.log("DECONFLICT");
      this.deconflict(db)
    })
  }

  /**
   * Generates a valid ID for a graph item
   * @param s original ID
   */
  public static valid(s: string): string {
    try {
      return s.replace(' ', '_').replace(' ', '_').replace(' ', '_').replace(' ', '_')
    } catch (error) {
      console.log("BAD " + JSON.stringify(s));
    }
    return ""
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
