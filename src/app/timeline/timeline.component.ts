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
    this.data.cy.nodes().forEach(i => {
      let n: GraphItem = i._private;
      let t = this.data.nodeType(n.data.type);
      if (t && t.hasDate) {
        let icon = "fa-calendar-o";
        switch (n.data.type) {
          case "install":
            icon = "fa-file-archive-o";
            break;
          case "release":
            icon = "fa-gift";
            break;
          case "event":
            icon = "fa-calendar-o";
            break;
        }

        let date = this.best(n.data.start_date, n.data.finish_date);
        if (date) {
          let e: TimelineEvent = {
            date: date,
            header: n.data.label,
            body: n.data.description,
            icon: icon
          };
          e["id"] = n.data.id;
          e["node"] = n;
          newAll.push(e);
        }
      }
    });
    this.all = newAll;

    this.types = _.filter(this.data.nodeTypes, i => i.hasDate);
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
    let items2 = items.sort((a, b): number => {
      return a.date > b.date ? 1 : -1;
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

  best(d1, d2) {
    if (d1 && d2) {
      if (d1 > d2) {
        return d1;
      } else {
        return d2;
      }
    } else if (d1) {
      return d1;
    } else if (d2) {
      return d2;
    }
    return undefined;
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
