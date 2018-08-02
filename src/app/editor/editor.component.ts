import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import {
  NgbDateStruct,
  NgbDateParserFormatter
} from "@ng-bootstrap/ng-bootstrap";
import { GraphItem, Database, NodeType, EdgeType, DbConfig } from "../models";
import { DataService } from "../data.service";
import { Observable } from "rxjs";
import { UUID } from "angular2-uuid";
import * as _ from "lodash";

const types = [
  "Algorithm",
  "Component",
  "Data Type",
  "Endpoint",
  "Library",
  "Process",
  "Technology"
];
const holder = [];
@Component({
  selector: "app-editor",
  templateUrl: "./editor.component.html",
  styleUrls: ["./editor.component.css"]
})
export class EditorComponent implements OnInit {
  nodeTypes: NodeType[] = [];
  edgeTypes: EdgeType[] = [];

  original: GraphItem;
  node = new GraphItem();
  newEdge: any = {
    data: {},
    temp: true
  };
  database: Database;
  newLinks = [];
  deletedLinks = [];
  links = [];

  constructor(private route: ActivatedRoute, private db: DataService) {
    console.log("VERSION " + _.VERSION);

    this.nodeTypes = this.db.nodeTypes;
    this.edgeTypes = this.db.edgeTypes;

    let id = this.route.snapshot.paramMap.get("id");
    this.route.paramMap.subscribe((p: ParamMap) => {
      let id = p.get("id");
      let node = this.db.findItem(id);
      if (node) {
        console.log("SETTING NODE " + node.data.id);
        this.original = node;
        let newOne = new GraphItem();
        newOne.group = node.group;
        newOne.data = _.clone(node.data);
        this.node = newOne;
      }
    });
    this.updateLinks();
    holder[0] = this.db;
  }

  ngOnInit() { }

  public updateid(event) {
    if (!this.original) {
      this.node.data.id = DataService.valid(this.node.data.label.toLowerCase());
    }
  }

  public updateLinks() {
    // Get all the links from the database
    let links = [];
    if (this.original) {
      let orgLinks = this.db.getEdgesFrom(this.original.data.id);
      links.push(...orgLinks);
    }

    links.push(...this.newLinks);
    this.deletedLinks.forEach(l => {
      _.remove(links, i => i.data.id == l.data.id);
    });
    links.forEach(item => {
      console.log(
        "ITEM " +
        item.group +
        " " +
        item.data.target +
        JSON.stringify(item.data)
      );
    });

    this.links = links;
  }

  public fixId() {
    this.node.data.id = DataService.valid(this.node.data.id);
  }

  public randomId() {
    this.node.data.id = UUID.UUID();
  }

  public changeStatus(entry) {
    console.log("ChangeStatus" + entry);
    this.node.data.status = entry;
  }

  public hasDate() {
    let nt = this.db.nodeType(this.node.data.type);
    if (nt) {
      return nt.hasDate;
    }
    return false;
  }

  public save() {
    if (this.node.data.start_date) {
      let dt: any = this.node.data.start_date;
      this.node.data.start_date = new Date(
        dt.year,
        dt.month - 1,
        dt.day,
        0,
        0,
        0,
        0
      );
    }

    if (this.node.data.finish_date) {
      let dt: any = this.node.data.finish_date;
      this.node.data.finish_date = new Date(
        dt.year,
        dt.month - 1,
        dt.day,
        0,
        0,
        0,
        0
      );
    }

    if (this.original) {
      // EDIT
      this.original.data = this.node.data;
    } else {
      // NEW
      this.db.add(this.node);
    }

    // Add each of the new links
    this.newLinks.forEach(link => {
      this.db.addEdge(
        link.data.target,
        this.node.data.id,
        link.data.type,
        link.data.version
      );
    });

    // Remove the links
    this.deletedLinks.forEach(link => {
      if (!link.temp) {
        this.db.remove(link.data.id);
      }
    });

    window.history.back();
  }

  public cancel() {
    window.history.back();
  }

  public search(text$): Observable<string> {
    return text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(
        term =>
          term.length < 2
            ? []
            : types.filter(
              v => v.toLowerCase().indexOf(term.toLowerCase()) > -1
            )
      );
  }

  public searchforIds(text): Observable<any> {
    return text
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => {
        return term.length < 2 ? [] : holder[0].findAll2(term);
      });
  }

  public formatter(item): string {
    return item.data.id;
  }

  public addEdge() {
    let tgt = this.newEdge.data.target;
    if (tgt.data && tgt.data.id) {
      this.newEdge.data.target = tgt.data.id;
    }
    this.newLinks.push(this.newEdge);
    this.newEdge = {
      data: {},
      temp: true
    };
    this.updateLinks();
  }

  public delEdge(item) {
    _.remove(this.newLinks, i => {
      return item.data.target == i.data.target;
    });
    this.deletedLinks.push(item);
    this.updateLinks();
  }
}

export class MyNgbDateParserFormatter extends NgbDateParserFormatter {
  parse(value: string): NgbDateStruct {
    if (value) {
      const dateParts = value.trim().split("-");
      if (dateParts.length === 1 && isNumber(dateParts[0])) {
        return { year: toInteger(dateParts[0]), month: null, day: null };
      } else if (
        dateParts.length === 2 &&
        isNumber(dateParts[0]) &&
        isNumber(dateParts[1])
      ) {
        return {
          year: toInteger(dateParts[0]),
          month: toInteger(dateParts[1]),
          day: null
        };
      } else if (
        dateParts.length === 3 &&
        isNumber(dateParts[0]) &&
        isNumber(dateParts[1]) &&
        isNumber(dateParts[2])
      ) {
        return {
          year: toInteger(dateParts[0]),
          month: toInteger(dateParts[1]),
          day: toInteger(dateParts[2])
        };
      }
    }
    return null;
  }

  format(date: NgbDateStruct): string {
    return date
      ? `${isNumber(date.month) ? padNumber(date.month) : ""}-${isNumber(
        date.day
      )
        ? padNumber(date.day)
        : ""}-${date.year}`
      : "";
  }
}

export function isNumber(value: any): value is number {
  return !isNaN(toInteger(value));
}

export function padNumber(value: number) {
  if (isNumber(value)) {
    return `0${value}`.slice(-2);
  } else {
    return "";
  }
}

export function toInteger(value: any): number {
  return parseInt(`${value}`, 10);
}
