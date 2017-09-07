import { Component, OnInit, AfterViewInit, ElementRef } from "@angular/core";
import { Router } from "@angular/router";

import { LocalStorageService } from "angular-2-local-storage";
import { TimelineEvent } from "ngx-timeline";
import { DataService } from "../data.service";
import { GraphItem } from "../models";
import * as _ from "lodash";

@Component({
  selector: "app-timeline",
  templateUrl: "./timeline.component.html",
  styleUrls: ["./timeline.component.css"]
})
export class TimelineComponent implements OnInit, AfterViewInit {
  LOCAL_STORAGE_KEY = "TimelineComponent.PREFS";

  events = new Array<TimelineEvent>();
  all = new Array<TimelineEvent>();
  selected: GraphItem;
  prefs = new Prefs();
  types = [];
  large = true;

  constructor(
    private data: DataService,
    private elementRef: ElementRef,
    private router: Router,
    private localStorage: LocalStorageService
  ) {
    // Read Prefereces
    let str = <string>this.localStorage.get(this.LOCAL_STORAGE_KEY);
    if (str) {
      this.prefs = JSON.parse(str);
    }

    let mq = window.matchMedia("(min-width: 992px)");
    this.large = mq.matches;
    mq.addListener(newMatch => {
      console.log("Media Query " + newMatch.matches + " IS LARGE");
      this.large = newMatch.matches;
    });

    let newAll = [];
    this.data.cy.elements().forEach(i => {
      let n: GraphItem = i._private;

      let icon = "fa-calendar-o";
      switch (n.data.type) {
        case "dependency":
          icon = "fa-chain";
          break;
        case "Release":
          icon = "fa-gift";
          break;
      }

      if (n.data.start_date || n.data.finish_date) {
        let e: TimelineEvent = {
          date: n.data.finish_date,
          header: n.data.label,
          body: n.data.description,
          icon: icon
        };
        e["id"] = n.data.id;
        e["node"] = n;
        newAll.push(e);
      }
    });

    newAll.sort((a, b): number => {
      return b - a;
    });
    this.all = newAll;

    this.types = this.data.nodeTypes;
    this.update();
  }

  public update() {
    let items = _.filter(this.all, e => {
      // filter by type
      let n = e["node"];
      if (n) {
        return !this.isFiltered(n.data.type);
      }
      return false;
    });
    this.events = items;
  }

  public isFiltered(l: string): boolean {
    return _.includes(this.prefs.filtered, l);
  }

  public toggleFilter(t) {
    // Toggle the filter
    let len = this.prefs.filtered.length;
    let success = _.pull(this.prefs.filtered, t);
    if (success.length == len) {
      this.prefs.filtered.push(t);
    }
    this.savePrefs();
    this.update();
  }

  public select(event) {
    this.selected = event.meta;
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement
      .querySelectorAll(".timeline-header")
      .forEach(item => {
        item.addEventListener("click", event => {
          this.selected = this.data.getItem(event.target.id);
        });
      });
  }

  ngOnInit() {}

  public edit() {
    if (this.selected) {
      this.router.navigate(["/edit", this.selected.data.id]);
    }
  }

  public view(r: any) {
    if (r) {
      this.router.navigate(["/view", r.item.data.id]);
    }
    if (this.selected) {
      this.router.navigate(["/view", this.selected.data.id]);
    }
  }

  public newItem() {
    this.router.navigate(["/edit"]);
  }

  public newEdge() {
    this.router.navigate(["/edit_edge"]);
  }

  public savePrefs() {
    let str = JSON.stringify(this.prefs);
    this.localStorage.set(this.LOCAL_STORAGE_KEY, str);
  }

  public resetPreferences() {
    this.prefs = new Prefs();
    this.savePrefs();
    this.update();
  }
}

class Prefs {
  filtered: string[] = [""];
}
