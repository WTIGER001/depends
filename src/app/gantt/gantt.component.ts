import { AfterViewInit, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';
import { Logger } from 'angular2-logger/core';
import * as dt from 'date-fns';
import * as _ from 'lodash';

import { DataService } from '../data.service';
import { DateType, GraphItem } from '../models';
import { Utils } from '../utils';

@Component({
  selector: "app-gantt",
  templateUrl: "./gantt.component.html",
  styleUrls: ["./gantt.component.css"]
})
export class GanttComponent implements OnInit, AfterViewInit {
  u: Utils;
  LOCAL_STORAGE_KEY = "GanttComponent.PREFS";

  @ViewChild("drawingArea") drawingArea;
  types = [];
  prefs = new Prefs();

  dataset: Dataset;

  constructor(
    private logger: Logger,
    private data: DataService,
    private router: Router,
    private localStorage: LocalStorageService
  ) {
    this.u = new Utils(
      localStorage,
      router,
      data,
      this.LOCAL_STORAGE_KEY,
      new Prefs(),
      this.update
    );
    this.dataset = new Dataset(this.data);
    this.types = this.data.nodeTypes;
  }

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    // let windowH = event.target.innerHeight
    // var rect = this.drawingArea.nativeElement.getBoundingClientRect();
    // this.drawingArea.nativeElement.style.height = (windowH - rect.top - 10) + "px"
    this.resize();
  }

  ngOnInit() {}

  private getPath(eles: any, s: Scheme): any {
    var dfs = this.data.cy.elements().dfs({
      // The element to start from
      roots: eles,
      // Function figure out if we are taking the right path
      visit: function(v, e, u, i, depth) {
        console.log("visit " + v.id());

        // The desired node type is
        let backLevels = s.levels.slice().reverse();
        let lookingForType = backLevels[depth];

        if (v.data("type") != lookingForType) {
          // DoOwn the wrong path
          return false;
        }

        if (depth == backLevels.length - 1) {
          return true;
        }
      },
      directed: false
    });
    return dfs;
  }

  private getSchemes(type: string): Scheme[] {
    let result = [];
    this.Schemes.forEach(scheme => {
      if (_.includes(scheme.levels, type)) {
        result.push(scheme);
      }
    });
    return result;
  }

  private resize() {
    // Resize the main window
    var rect = this.drawingArea.nativeElement.getBoundingClientRect();
    let windowH = window.innerHeight;
    let newH = windowH - rect.top - 10;
    if (newH == this.drawingArea.nativeElement.style.height) {
      // nochange
      return false;
    } else {
      this.drawingArea.nativeElement.style.height =
        windowH - rect.top - 10 + "px";
      gantt.render();
      return true;
    }
  }

  ngAfterViewInit() {
    gantt.config.drag_resize = false;
    gantt.config.drag_move = false;
    gantt.config.drag_links = false;
    gantt.config.readonly = true;
    gantt.config.show_unscheduled = true;
    gantt.config.static_background = true;
    gantt.config.columns = [
      { name: "text", tree: true, width: "*", resize: true },
      { name: "start_date", align: "left" }
    ];

    gantt.attachEvent("onTaskClick", (id, e) => {
      //any custom logic here
      let item = this.data.getItem(id);
      if (this.u.selected && this.u.selected == item) {
        this.u.selected = undefined;
      } else {
        this.u.selected = item;
      }
      // gantt.render();
      setTimeout(() => gantt.render(), 50);
      return true;
    });

    gantt.init("gantt_here");

    this.update();
    this.resize();
  }

  public update2() {
    gantt.clearAll();

    // Create all the tasks, etc
    this.data.cy.nodes().forEach(i => {
      let n: GraphItem = i._private;
      let nodeType = this.data.nodeType(n.data.type);
      let dateType = nodeType.dateType;

      if (dateType == DateType.DateRange) {
        this.addTask(i);
      } else if (dateType == DateType.Marker) {
        this.dataset.fromType(n);
      }
    });

    // Update the chart
    let dataToParse = {
      data: this.dataset.tasks,
      links: this.dataset.links
    };

    gantt.parse(dataToParse);
    // Add the markers
    this.dataset.markerDefs.forEach(v => {
      gantt.addMarker(v);
    });

    gantt.render();
  }

  public update() {
    gantt.clearAll();

    // Create components
    this.data.cy.nodes().forEach(i => {
      let n: GraphItem = i._private;
      let nodeType = this.data.nodeType(n.data.type);
      let dateType = nodeType.dateType;

      if (nodeType.value == "Sprint") {
        this.dataset.fromType(n);
      } else if (dateType == DateType.Marker) {
        this.dataset.fromType(n);
      }
    });

    // Update the chart
    let dataToParse = {
      data: this.dataset.tasks,
      links: this.dataset.links
    };

    gantt.parse(dataToParse);

    // Add the markers
    this.dataset.markerDefs.forEach(v => {
      gantt.addMarker(v);
    });

    gantt.render();
  }

  private getSprintsForComponent(componentId) {}

  private addTask(eles: any) {
    let n: GraphItem = eles._private;

    // Get the schemes for this node
    let schemes = this.getSchemes(n.data.type);
    if (!schemes || schemes.length == 0) {
      return;
    }

    // Determine if the scheme is selected

    schemes.forEach(scheme => {
      // Determine the path of that node
      let path = this.getPath(eles, scheme);
      // ({ path: eles, found: node }),
      if (path.found) {
        // Note - The path contains the edges and the nodes
        let lastId = undefined;
        let p = path.path;
        for (let i = p.length - 1; i >= 0; i -= 2) {
          let pathNode = p[i];
          // get the task by the id to see if it exists
          let id = pathNode.data("id");
          let n = pathNode._private;
          this.dataset.fromType(n, lastId);
          lastId = id;
        }
      }
    });
  }

  public stepNext() {
    var project = gantt.getSubtaskDates();
    console.log(JSON.stringify(project));

    let newIndex = this.prefs.scaleIndex + 1;
    if (newIndex >= this.scaleConfigs.length) {
      newIndex = 0;
    }

    this.applyConfig(this.scaleConfigs[newIndex], project);
    this.prefs.scaleIndex = newIndex;
    gantt.render();
  }

  public stepPrev() {
    var project = gantt.getSubtaskDates();
    console.log(JSON.stringify(project));

    let newIndex = this.prefs.scaleIndex - 1;
    if (newIndex < 0) {
      newIndex = this.scaleConfigs.length - 1;
    }

    this.applyConfig(this.scaleConfigs[newIndex], project);
    this.prefs.scaleIndex = newIndex;
    gantt.render();
  }

  public zoomToFit() {
    var project = gantt.getSubtaskDates(),
      areaWidth = gantt.$task.offsetWidth;

    for (var i = 0; i < this.scaleConfigs.length; i++) {
      var columnCount = this.getUnitsBetween(
        project.start_date,
        project.end_date,
        this.scaleConfigs[i].unit,
        this.scaleConfigs[i].step
      );
      if ((columnCount + 2) * gantt.config.min_column_width <= areaWidth) {
        break;
      }
    }

    if (i == this.scaleConfigs.length) {
      i--;
    }

    this.applyConfig(this.scaleConfigs[i], project);
    this.prefs.scaleIndex = i;
    gantt.render();
  }
  // get number of columns in timeline
  getUnitsBetween(from, to, unit, step) {
    var start = new Date(from),
      end = new Date(to);
    var units = 0;
    while (start.valueOf() < end.valueOf()) {
      units++;
      start = gantt.date.add(start, step, unit);
    }
    return units;
  }

  applyConfig(config, dates) {
    gantt.config.scale_unit = config.scale_unit;
    if (config.date_scale) {
      gantt.config.date_scale = config.date_scale;
      gantt.templates.date_scale = null;
    } else {
      gantt.templates.date_scale = config.template;
    }

    gantt.config.step = config.step;
    gantt.config.subscales = config.subscales;

    if (dates) {
      gantt.config.start_date = gantt.date.add(
        dates.start_date,
        -1,
        config.unit
      );
      gantt.config.end_date = gantt.date.add(
        gantt.date[config.unit + "_start"](dates.end_date),
        2,
        config.unit
      );
    } else {
      gantt.config.start_date = gantt.config.end_date = null;
    }
  }

  weekScaleTemplate = function(date) {
    var dateToStr = gantt.date.date_to_str("%d %M");
    var endDate = gantt.date.add(gantt.date.add(date, 1, "week"), -1, "day");
    return dateToStr(date) + " - " + dateToStr(endDate);
  };

  //Setting available scales
  scaleConfigs = [
    // days
    {
      unit: "day",
      step: 1,
      scale_unit: "month",
      date_scale: "%F",
      subscales: [{ unit: "day", step: 1, date: "%j" }]
    },
    // weeks
    {
      unit: "week",
      step: 1,
      scale_unit: "month",
      date_scale: "%F",
      subscales: [
        {
          unit: "week",
          step: 1,
          template: function(date) {
            var dateToStr = gantt.date.date_to_str("%d %M");
            var endDate = gantt.date.add(
              gantt.date.add(date, 1, "week"),
              -1,
              "day"
            );
            return dateToStr(date) + " - " + dateToStr(endDate);
          }
        }
      ]
    },
    // months
    {
      unit: "month",
      step: 1,
      scale_unit: "year",
      date_scale: "%Y",
      subscales: [{ unit: "month", step: 1, date: "%M" }]
    },
    // quarters
    {
      unit: "month",
      step: 3,
      scale_unit: "year",
      date_scale: "%Y",
      subscales: [
        {
          unit: "month",
          step: 3,
          template: function(date) {
            var dateToStr = gantt.date.date_to_str("%M");
            var endDate = gantt.date.add(
              gantt.date.add(date, 3, "month"),
              -1,
              "day"
            );
            return dateToStr(date) + " - " + dateToStr(endDate);
          }
        }
      ]
    },
    // years
    {
      unit: "year",
      step: 1,
      scale_unit: "year",
      date_scale: "%Y",
      subscales: [
        {
          unit: "year",
          step: 5,
          template: function(date) {
            var dateToStr = gantt.date.date_to_str("%Y");
            var endDate = gantt.date.add(
              gantt.date.add(date, 5, "year"),
              -1,
              "day"
            );
            return dateToStr(date) + " - " + dateToStr(endDate);
          }
        }
      ]
    },
    // decades
    {
      unit: "year",
      step: 5,
      scale_unit: "year",
      template: function(date) {
        var dateToStr = gantt.date.date_to_str("%Y");
        var endDate = gantt.date.add(
          gantt.date.add(date, 5, "year"),
          -1,
          "day"
        );
        return dateToStr(date) + " - " + dateToStr(endDate);
      },
      subscales: [
        {
          unit: "year",
          step: 50,
          template: function(date) {
            var dateToStr = gantt.date.date_to_str("%Y");
            var endDate = gantt.date.add(
              gantt.date.add(date, 50, "year"),
              -1,
              "day"
            );
            return dateToStr(date) + " - " + dateToStr(endDate);
          }
        }
      ]
    }
  ];

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

  public savePrefs() {
    let str = JSON.stringify(this.prefs);
    this.localStorage.set(this.LOCAL_STORAGE_KEY, str);
  }

  public resetPreferences() {
    this.prefs = new Prefs();
    this.savePrefs();
    this.update();
  }

  public Schemes: Scheme[] = [
    {
      name: "Components",
      id_prefix: "com",
      levels: ["component", "Sprint"]
    },
    {
      name: "Requirements",
      id_prefix: "req",
      levels: ["requirement", "feature", "Sprint"]
    },
    {
      name: "Environments",
      id_prefix: "ins",
      levels: ["environment", "install"]
    }
  ];
}

class Prefs {
  filtered: string[] = [""];
  scaleIndex = -1;
}

class Scheme {
  name: string;
  id_prefix: string;
  levels: string[];
}

class Dataset {
  public taskDefs = new Map<string, any>();
  public linkDefs = new Map<string, any>();
  public markerDefs = new Map<string, any>();

  public get tasks(): any[] {
    let all = [];
    this.taskDefs.forEach(v => all.push(v));
    return all;
  }

  public get links(): any[] {
    let all = [];
    this.linkDefs.forEach(v => all.push(v));
    return all;
  }

  constructor(private data: DataService) {}

  project(id, text, parent?) {
    if (!this.taskDefs.has(id)) {
      let t: any = {
        id: id,
        text: text,
        type: "project",
        open: true
      };
      if (parent) {
        t.parent = parent;
      }
      this.taskDefs.set(id, t);
    }
  }

  task(id, text, start_date, end_date, parent?) {
    if (!this.taskDefs.has(id)) {
      let t: any = {
        id: id,
        text: text,
        start_date: dt.format(start_date, "DD-MM-YYYY"),
        end_date: dt.format(end_date, "DD-MM-YYYY"),
        type: "task"
      };
      if (parent) {
        t.parent = parent;
      }
      this.taskDefs.set(id, t);
    }
  }

  milestone(id, text, date, parent?) {
    if (!this.taskDefs.has(id)) {
      let t: any = {
        id: id,
        text: text,
        start_date: date,
        duration: 1 / 24,
        type: "task"
      };
      if (parent) {
        t.parent = parent;
      }
      this.taskDefs.set(id, t);
    }
  }

  marker(id, text, date) {
    if (!this.markerDefs.has(id)) {
      let t: any = {
        id: id,
        start_date: date, //a Date object that sets the marker's date
        css: "today", //a CSS class applied to the marker
        text: text, //the marker title
        title: text // the marker's tooltip
      };
      this.markerDefs.set(id, t);
    }
  }

  link(id, source, target, type = "FS") {
    if (!this.linkDefs.has(id)) {
      let typeNum = 0;
      switch (type) {
        case "FS":
          typeNum = 0;
          break;
        case "SS":
          typeNum = 1;
          break;
        case "FF":
          typeNum = 2;
          break;
        case "SF":
          typeNum = 3;
          break;
      }

      let t: any = {
        id: id,
        source: source,
        target: target,
        type: typeNum
      };
      this.linkDefs.set(id, t);
    }
  }

  fromType(n: GraphItem, parent?) {
    let nodeType = this.data.nodeType(n.data.type);
    let dateType = nodeType.dateType;

    let dtStart: Date = n.data.start_date;
    if (dtStart && typeof dtStart === "string") {
      dtStart = new Date(Date.parse(dtStart));
    }

    let dtEnd: Date = n.data.finish_date;
    if (dtEnd && typeof dtEnd === "string") {
      dtEnd = new Date(Date.parse(dtEnd));
    }

    let dtOne = dtStart ? dtStart : dtEnd;

    switch (dateType) {
      case DateType.DateRange:
        if (
          !dtStart ||
          !dtEnd ||
          isNaN(dtStart.getDay()) ||
          isNaN(dtEnd.getDay())
        ) {
          console.log(
            "STOP " +
              n.data.id +
              " " +
              n.data.type +
              " " +
              n.data.start_date +
              " to " +
              n.data.finish_date
          );
        } else {
          this.task(n.data.id, n.data.label, dtStart, dtEnd, parent);
        }
        break;
      case DateType.None:
        this.project(n.data.id, n.data.label, parent);
        break;
      case DateType.Milestone:
        this.milestone(n.data.id, n.data.label, dtOne, parent);
        break;
      case DateType.Marker:
        this.marker(n.data.id, n.data.label, dtOne);
        break;
    }
  }
}
