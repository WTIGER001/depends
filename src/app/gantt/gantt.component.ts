import { Component, OnInit, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service'
import { GraphItem } from '../models'
import { LocalStorageService } from 'angular-2-local-storage'
import { Utils } from '../utils'
import * as dt from 'date-fns'

import * as _ from 'lodash'

@Component({
  selector: 'app-gantt',
  templateUrl: './gantt.component.html',
  styleUrls: ['./gantt.component.css']
})
export class GanttComponent implements OnInit, AfterViewInit {
  u: Utils
  LOCAL_STORAGE_KEY = "GanttComponent.PREFS"

  @ViewChild('drawingArea') drawingArea
  types = []
  selected: GraphItem
  prefs = new Prefs()
  large = true

  constructor(private data: DataService, private router: Router, private localStorage: LocalStorageService) {
    // this.u = new Utils(localStorage, router, data, this.LOCAL_STORAGE_KEY, new Prefs(), this.update)

    // Read Prefereces
    let str = <string>this.localStorage.get(this.LOCAL_STORAGE_KEY)
    if (str) {
      this.prefs = JSON.parse(str)
    }

    let mq = window.matchMedia("(min-width: 992px)");
    this.large = mq.matches
    mq.addListener(newMatch => {
      console.log("Media Query " + newMatch.matches + " IS LARGE");
      this.large = newMatch.matches
    });

    this.types = this.data.nodeTypes
  }

  // public get prefs() : Prefs {
  //   return this.u.prefs
  // }
  // public get large() : boolean {
  //   return this.u.large
  // }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    // let windowH = event.target.innerHeight
    // var rect = this.drawingArea.nativeElement.getBoundingClientRect();
    // this.drawingArea.nativeElement.style.height = (windowH - rect.top - 10) + "px"
    this.resize()
  }

  ngOnInit() {
  }

  // private createTasks() {

  //   let tasks = new Map<string, any>()

  //   this.data.cy.nodes().forEach(i => {
  //     let n: GraphItem = i._private
  //     if (n.data.start_date || n.data.finish_date) {
  //       let type = n.data.type
  //       let dStart = n.data.start_date
  //       let dEnd = n.data.finish_date
  //       if (!dStart) {
  //         dStart = dEnd
  //       } else if (!dEnd) {
  //         dEnd = dStart
  //       }
  //       let duration = dt.differenceInCalendarDays(dStart, dEnd)

  //       // Create the basic task
  //       let t: any = {
  //         id: n.data.id,
  //         text: n.data.label,
  //         start_date: dStart,
  //         duration: duration
  //       }

  //       // Determine which active schemes are used
  //       let schemes = this.getSchemes(type)

  //       // determine the possible paths

  //       // Look for a parent
  //       // this.data.cy.nodes()
  //       // let parents = i.outgoers("edges[type=\"parent\"]") 
  //       // let pids = []
  //       // parents.forEach(p => {
  //       //   let pId = p.target()
  //       //   pids.push(pId)
  //       // });
  //       // if (pids.length >= 1) {
  //       //   t.parent = pids[0]
  //       // }

  //     }
  //   })
  // }

  private getPath(eles: any, s: Scheme): any {
    var dfs = this.data.cy.elements().dfs({
      // The element to start from
      roots: eles,
      // Function figure out if we are taking the right path
      visit: function (v, e, u, i, depth) {
        console.log('visit ' + v.id());

        // The desired node type is 
        let backLevels = s.levels.slice().reverse();
        let lookingForType = backLevels[depth]

        if (v.data('type') != lookingForType) {
          // DoOwn the wrong path
          return false
        }

        if (depth == backLevels.length) {
          return true
        }
      },
      directed: false
    });

  }

  private getSchemes(type: string): Scheme[] {
    let result = []
    this.Schemes.forEach(scheme => {
      if (_.includes(scheme.levels, type)) {
        result.push(scheme)
      }
    });
    return result;
  }

  private resize() {
    // Resize the main window
    var rect = this.drawingArea.nativeElement.getBoundingClientRect();
    let windowH = window.innerHeight
    let newH = (windowH - rect.top - 10)
    if (newH == this.drawingArea.nativeElement.style.height) {
      // nochange 
      return false
    } else {
      this.drawingArea.nativeElement.style.height = (windowH - rect.top - 10) + "px"
      return true
    }
  }

  ngAfterViewInit() {
    gantt.config.drag_resize = false
    gantt.config.drag_move = false
    gantt.config.drag_links = false
    gantt.config.columns = [
      { name: "text", tree: true, width: '*', resize: true },
      { name: "start_date", align: "left" },
    ];

    gantt.init("gantt_here");
    this.update()
    this.resize()
  }

  public update() {
    gantt.clearAll()

    let cnt = 1
    this.data.cy.nodes().forEach(i => {
      let n: GraphItem = i._private
      if (!this.isFiltered(n.data.type) && n.data.start_date && n.data.finish_date) {
        cnt += 1

        var taskId = gantt.addTask({
          id: n.data.id,
          text: n.data.label,
          start_date: n.data.start_date,
          duration: dt.differenceInCalendarDays(n.data.finish_date, n.data.start_date)
        }, n.data.type, 1);
      }
    })
  }

  public zoomToFit() {
    var project = gantt.getSubtaskDates(),
      areaWidth = gantt.$task.offsetWidth;

    for (var i = 0; i < this.scaleConfigs.length; i++) {
      var columnCount = this.getUnitsBetween(project.start_date, project.end_date, this.scaleConfigs[i].unit, this.scaleConfigs[i].step);
      if ((columnCount + 2) * gantt.config.min_column_width <= areaWidth) {
        break;
      }
    }

    if (i == this.scaleConfigs.length) {
      i--;
    }

    this.applyConfig(this.scaleConfigs[i], project);
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
    }
    else {
      gantt.templates.date_scale = config.template;
    }

    gantt.config.step = config.step;
    gantt.config.subscales = config.subscales;

    if (dates) {
      gantt.config.start_date = gantt.date.add(dates.start_date, -1, config.unit);
      gantt.config.end_date = gantt.date.add(gantt.date[config.unit + "_start"](dates.end_date), 2, config.unit);
    } else {
      gantt.config.start_date = gantt.config.end_date = null;
    }
  }

  weekScaleTemplate = function (date) {
    var dateToStr = gantt.date.date_to_str("%d %M");
    var endDate = gantt.date.add(gantt.date.add(date, 1, "week"), -1, "day");
    return dateToStr(date) + " - " + dateToStr(endDate);
  };


  //Setting available scales
  scaleConfigs = [
    // minutes
    {
      unit: "minute", step: 1, scale_unit: "hour", date_scale: "%H", subscales: [
        { unit: "minute", step: 1, date: "%H:%i" }
      ]
    },
    // hours
    {
      unit: "hour", step: 1, scale_unit: "day", date_scale: "%j %M",
      subscales: [
        { unit: "hour", step: 1, date: "%H:%i" }
      ]
    },
    // days
    {
      unit: "day", step: 1, scale_unit: "month", date_scale: "%F",
      subscales: [
        { unit: "day", step: 1, date: "%j" }
      ]
    },
    // weeks
    {
      unit: "week", step: 1, scale_unit: "month", date_scale: "%F",
      subscales: [
        {
          unit: "week", step: 1, template: function (date) {
            var dateToStr = gantt.date.date_to_str("%d %M");
            var endDate = gantt.date.add(gantt.date.add(date, 1, "week"), -1, "day");
            return dateToStr(date) + " - " + dateToStr(endDate);
          }
        }
      ]
    },
    // months
    {
      unit: "month", step: 1, scale_unit: "year", date_scale: "%Y",
      subscales: [
        { unit: "month", step: 1, date: "%M" }
      ]
    },
    // quarters
    {
      unit: "month", step: 3, scale_unit: "year", date_scale: "%Y",
      subscales: [
        {
          unit: "month", step: 3, template: function (date) {
            var dateToStr = gantt.date.date_to_str("%M");
            var endDate = gantt.date.add(gantt.date.add(date, 3, "month"), -1, "day");
            return dateToStr(date) + " - " + dateToStr(endDate);
          }
        }
      ]
    },
    // years
    {
      unit: "year", step: 1, scale_unit: "year", date_scale: "%Y",
      subscales: [
        {
          unit: "year", step: 5, template: function (date) {
            var dateToStr = gantt.date.date_to_str("%Y");
            var endDate = gantt.date.add(gantt.date.add(date, 5, "year"), -1, "day");
            return dateToStr(date) + " - " + dateToStr(endDate);
          }
        }
      ]
    },
    // decades
    {
      unit: "year", step: 10, scale_unit: "year", template: function (date) {
        var dateToStr = gantt.date.date_to_str("%Y");
        var endDate = gantt.date.add(gantt.date.add(date, 10, "year"), -1, "day");
        return dateToStr(date) + " - " + dateToStr(endDate);
      },
      subscales: [
        {
          unit: "year", step: 100, template: function (date) {
            var dateToStr = gantt.date.date_to_str("%Y");
            var endDate = gantt.date.add(gantt.date.add(date, 100, "year"), -1, "day");
            return dateToStr(date) + " - " + dateToStr(endDate);
          }
        }
      ]
    }
  ];


  public isFiltered(l: string): boolean {
    return _.includes(this.prefs.filtered, l)
  }

  public toggleFilter(t) {
    // Toggle the filter
    let len = this.prefs.filtered.length
    let success = _.pull(this.prefs.filtered, t)
    if (success.length == len) {
      this.prefs.filtered.push(t)
    }
    this.savePrefs()
    this.update()
  }

  public edit() {
    if (this.selected) {
      this.router.navigate(['/edit', this.selected.data.id]);
    }
  }

  public view(r: any) {
    if (r) {
      this.router.navigate(['/view', r.item.data.id]);
    }
    if (this.selected) {
      this.router.navigate(['/view', this.selected.data.id]);
    }
  }

  public newItem() {
    this.router.navigate(['/edit'])
  }

  public newEdge() {
    this.router.navigate(['/edit_edge'])
  }

  public savePrefs() {
    let str = JSON.stringify(this.prefs)
    this.localStorage.set(this.LOCAL_STORAGE_KEY, str)
  }

  public resetPreferences() {
    this.prefs = new Prefs()
    this.savePrefs()
    this.update()
  }

  public Schemes: Scheme[] = [
    { name: "Components", id_prefix: "com", levels: ['component', 'process', 'release'] },
    { name: "Requirements", id_prefix: "req", levels: ['requirement', 'feature', 'release'] },
    { name: "Installs", id_prefix: "ins", levels: ['install'] },
    { name: "Environments", id_prefix: "ins", levels: ['environment', 'install'] },
  ]
}

class Prefs {
  filtered: string[] = [""]
}

class Scheme {
  name: string
  id_prefix: string
  levels: string[]
}
