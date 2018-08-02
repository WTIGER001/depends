import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';
import { UUID } from 'angular2-uuid';
import * as _ from 'lodash';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Database, DbConfig, EdgeType, GraphItem, NodeType } from './models';

@Injectable()
export class DataService {
  database: BehaviorSubject<Database>;
  public cyo: BehaviorSubject<any>;

  public cy: any;
  constructor(
    private localStorageService: LocalStorageService,
    private http: Http
  ) {
    // Init Cytoscape engine

    this.cyo = new BehaviorSubject<any>(this.cy);

    console.info("Reading from Local Storage");

    let dbString = this.localStorageService.get<string>("database");
    var db: Database;
    if (dbString) {
      // console.info("Read " + dbString);
      db = JSON.parse(dbString);
      db.source = "Local Storage";
      db.structure = new DbConfig();
      this.generateCy(db);
    } else {
      db = new Database();
      this.generateCy(db);

      this.loadDefaultData();
    }
    this.database = new BehaviorSubject(db); //Signals that we are ready
    this.deconflict(db);

  }

  private loadFromLocalStorage(dbString): Observable<Database> {
    let db = JSON.parse(dbString);
    db.source = "Local Storage";
    return of(db);
  }

  public nodeType(value: string) {
    return _.find(this.nodeTypes, t => t.value == value);
  }

  public edgeType(value: string) {
    return _.find(this.edgeTypes, t => t.value == value);
  }

  public get nodeTypes(): NodeType[] {
    return this.database.getValue().structure.nodeTypes;
  }

  public get edgeTypes(): EdgeType[] {
    return this.database.getValue().structure.edgeTypes;
  }

  public static countNodes(elements): NameValue<number>[] {
    let items = _.filter(elements, (item: any) => item.group() == "nodes");
    return DataService.countAll(items);
  }

  public static countEdges(elements): NameValue<number>[] {
    let items = _.filter(elements, (item: any) => item.group() == "edges");
    return DataService.countAll(items);
  }

  public static countAll(elements): NameValue<number>[] {
    let results = _.countBy(elements, (item: any) => item.data("type"));
    let counts = new Array<NameValue<number>>();
    Object.keys(results).forEach(key => {
      counts.push({
        name: key,
        value: results[key]
      });
    });
    return counts;
  }

  /**
   * Generate the Graph Representation in Cytoscape
   * @param db Database to use
   */
  private generateCy(db: Database = this.database.getValue()) {
    console.info("Generating CY Elements");

    this.cy = cytoscape({
      headless: true,
      styleEnabled: false
    });

    // if (db.graph) {
    // Add the nodes
    db.graph.forEach((i: GraphItem) => {
      console.debug("Adding " + i.data.id);
      this.cy.add(i);
    });
    // }

    this.cyo.next(this.cy);
    console.info("Complete CY " + this.cy.elements().length);
  }

  public getDb(): Observable<Database> {
    return this.database.asObservable();
  }

  public add(item: GraphItem) {
    this.database.getValue().graph.push(item);
    this.deconflict();
    this.cy.add(item);
    this.save();
  }

  public edgeTypeLabel(value: string) {
    return _.result(_.find(this.edgeTypes, { value: value }), "label");
  }

  public label(id: string) {
    let i = this.getItem(id);
    if (i) {
      return i.data.label;
    }
    return "";
  }

  public addEdge(
    target: string,
    source: string,
    type: string,
    version?: string,
    label?: string,
    id?: string
  ): GraphItem {
    let e = new GraphItem();
    e.group = "edges";
    e.data.target = target;
    e.data.source = source;
    e.data.id = id ? id : UUID.UUID();
    e.data.from = e.data.source;
    e.data.to = e.data.target;
    e.data.label = label ? label : version;
    e.data.type = type;

    // Check if the target and source already exist
    if (!this.exists(target)) {
      let tNode = DataService.makeDefault(target);
      this.add(tNode);
    }
    if (!this.exists(source)) {
      let sNode = DataService.makeDefault(source);
      this.add(sNode);
    }

    this.database.getValue().graph.push(e);
    this.cy.add(e);

    this.save();

    return e;
  }

  /** Saves to Local Storage */
  public save() {
    this.localStorageService.set(
      "database",
      JSON.stringify(this.database.getValue())
    );
    console.info("Wrote updated database to local storage");
  }

  public remove(id: string) {
    console.info("Removing item with id " + id);
    this.cy.remove("#" + id);
    _.remove(this.database.getValue().graph, item => item.data.id == id);
    this.save();
  }

  public static makeDefault(
    id: string,
    type: string = "Generated",
    name?: string
  ): GraphItem {
    let n = new GraphItem();
    n.data.id = id;
    n.data.type = type;
    n.data.label = name ? name : id;
    return n;
  }

  public makeIfNeeded(
    id: string,
    type: string = "Generated",
    name?: string
  ): GraphItem {
    let n = this.getItem(id);
    if (!n) {
      n = DataService.makeDefault(id, type, name);
      this.add(n);
    }
    return n;
  }

  public exists(id: string): boolean {
    return this.cy.getElementById(id);
  }

  public getItem(id: string): GraphItem {
    let item = this.cy.getElementById(id);
    if (item && item._private && item.length == 1) {
      return item._private;
    }
    return undefined;
  }

  public getEdgesWith(id: string): GraphItem[] {
    let item = this.cy.getElementById(id);
    if (item) {
      let rtn = [];
      let items = [];
      items.push(...item.connectedEdges());
      items.forEach(element => {
        let nodeEdge = element._private;
        if (nodeEdge.group == "edges") {
          rtn.push(nodeEdge);
        }
      });
      return rtn;
    } else {
      return [];
    }
  }
  public getEdgesFrom(id: string): GraphItem[] {
    let item = this.cy.getElementById(id);
    if (item) {
      let rtn = [];
      let items = [];
      items.push(...item.outgoers());
      items.forEach(element => {
        let nodeEdge = element._private;
        if (nodeEdge.group == "edges") {
          rtn.push(nodeEdge);
        }
      });
      return rtn;
    } else {
      return [];
    }
  }

  public findItem(value: string, field: string = "id"): GraphItem {
    if (field == "id") {
      return this.getItem(value);
    }

    let selector = DataService.selector(value, field);
    this.cy.elements(selector).forEach(item => {
      return item._private;
    });

    return undefined;
  }

  public static selector(value: string, field: string = "id") {
    return 'node[ + "field + "="' + value + '"]';
  }

  public findAll(term: string): string[] {
    let lcase = term.toLocaleLowerCase();
    let vals: string[] = [];
    this.database.getValue().graph.forEach(item => {
      if (item.data.id.toLocaleLowerCase().startsWith(lcase)) {
        vals.push(item.data.id);
      }
    });
    vals.sort();
    return vals;
  }

  public findAll2(term: string): GraphItem[] {
    let lcase = term.toLocaleLowerCase();
    let vals: GraphItem[] = [];
    this.database.getValue().graph.forEach(item => {
      if (
        item.group == "nodes" &&
        item.data.label.toLocaleLowerCase().startsWith(lcase)
      ) {
        vals.push(item);
      }
    });
    vals.sort((a, b): number => {
      return a.data.label.localeCompare(b.data.label);
    });
    return vals;
  }

  public clearDb() {
    console.warn("Clearing Database");

    this.localStorageService.remove("database");
    if (this.cy) {
      this.cy.elements().remove();
      this.cy.destroy();
    }
    this.database.next(new Database());
  }

  public addFiles(files: FileList, callback: () => void) {
    console.info("Adding  " + files.length + " new database files");

    for (let i = 0; i < files.length; i++) {
      this.addFile(files[i], callback);
    }
    // this.generateCy(this.database.getValue());
    this.deconflict();
  }

  public addFile(file: File, callback: () => void) {
    console.info("Adding new Database file " + file.name);

    let local = this.localStorageService;
    let db = this.database.getValue();
    let r = new FileReader();
    r.onload = e => {
      console.debug(r.result);
      let obj = <Database>JSON.parse(r.result);
      let source = file.name.replace(".json", "");
      if (obj.graph) {
        // Add Nodes
        obj.graph.forEach(item => {
          if (item.group == "nodes") {
            // add to the database
            db.graph.push(item);

            // add the node to Cytoscape
            this.cy.add(item);
          }
        });

        obj.graph.forEach(item => {
          if (item.group == "edges") {
            // Check that nodes exist
            if (this.validate(item)) {
              // add to the database
              db.graph.push(item);

              // add the node to Cytoscape
              this.cy.add(item);
            } else {
              console.warn(
                "Invalid Edge:" +
                item.data.label +
                " ( " +
                item.data.id +
                ") t:" +
                item.data.target +
                " s:" +
                item.data.source
              );
            }
          }
        });
        console.info(
          file.name + " contained " + obj.graph.length + " items"
        );
      }

      this.save();
      callback();
    };
    r.readAsText(file);
  }

  /**
   * Loads the default database
   */
  public loadDefaultData() {
    console.info("Reading Default Database");
    this.http.get("assets/data/database.json").subscribe(res => {
      let db = <Database>res.json();

      db.graph.forEach(i => {
        let a: any = i.data.start_date;
        let b: any = i.data.finish_date;

        if (typeof a == "string") {
          i.data.start_date = new Date(a);
        }

        if (typeof b == "string") {
          i.data.finish_date = new Date(b);
        }
      });

      // DataService.generateGraph(db)
      db.source = "Default";

      db.structure = new DbConfig();
      this.generateCy(db);

      console.info("DB2");

      this.database.next(db);
      // this.database = new BehaviorSubject(db) //Signals that we are ready

      console.info("DECONFLICT");
      this.deconflict(db);
    });
  }

  /**
   * Generates a valid ID for a graph item
   * @param s original ID
   */
  public static valid(s: string): string {
    try {
      return s
        .replace(" ", "_")
        .replace(" ", "_")
        .replace(" ", "_")
        .replace(" ", "_");
    } catch (error) {
      console.log("BAD " + JSON.stringify(s));
    }
    return "";
  }

  public validate(item: GraphItem): boolean {
    if (item.group == "edges") {
      if (!item.data.target || !this.exists(item.data.target)) {
        return false;
      }
      if (!item.data.source || !this.exists(item.data.source)) {
        return false;
      }
    }

    return true;
  }

  /**
   * Deconflicts and corrects all the nodes in the graph ensuring that there are nodes for each edge and that duplicate ids (edges and nodes) are merged
   * @param db 
   */
  private deconflict(db: Database = this.database.getValue()) {
    let g = db.graph;

    // First make sure that there are no duplicates
    let groups = _.groupBy(g, "data.id");
    Object.keys(groups).forEach(id => {
      let arr = groups[id];
      if (arr.length > 1) {
        let keep = arr[0];
        for (let i = 1; i < arr.length; i++) {
          // Copy all the attributes
          Object.assign(keep, arr[i]);
          // Remove the duplicate item
          _.pull(g, arr[i]);
        }
      }
    });

    // Now make sure that all the nodes are present
    g.forEach(item => {
      if (item.group == "edges") {
        let t = item.data.target;
        if (!groups[t]) {
          let n = new GraphItem();
          n.data.id = t;
          n.data.label = t;
          n.data.type = "Generated";
          g.push(n);
          groups[t] = [n];
        }

        let s = item.data.source;
        if (!groups[s]) {
          let n = new GraphItem();
          n.data.id = s;
          n.data.label = s;
          n.data.type = "Generated";
          g.push(n);
          groups[s] = [n];
        }
      }
    });

    // Now fix all the ids so they are valid
    g.forEach(item => {
      item.data.id = DataService.valid(item.data.id);
      if (item.group == "edges") {
        item.data.target = item.data.to = DataService.valid(item.data.target);
        item.data.source = item.data.from = DataService.valid(item.data.source);
        item.data.version = item.data.label;
      } else {
        if (item.data.parent) {
          let parent = this.makeIfNeeded(item.data.parent);
          this.addEdge(item.data.parent, item.data.id, "Parent");
          item.data.parent = undefined;
        }
      }
    });
  }
}

class Zipped {
  dbs: Database[] = new Array();
  repos: any[] = new Array();
}

class NameValue<T> {
  name: string;
  value: T;
}
class Util { }
