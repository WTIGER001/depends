import { Component, OnInit, Input } from '@angular/core'
import { Router } from '@angular/router';
import { CalendarEvent } from 'angular-calendar'
import { DataService } from '../data.service'
import { GraphItem } from '../models'

import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  display: string = 'month';

  _d: Date = new Date();
  selected: GraphItem
  events: CalendarEvent[] = [];
  activeDayIsOpen = false

  constructor(private data: DataService, private router: Router) {

    // this.events.push({
    //   title: "TEST",
    //   start: new Date(),
    //   end: new Date(),
    //   color: EventColors.blue
    // })

    this.data.cy.elements().forEach(i => {
      let n: GraphItem = i._private

      if (n.data.start_date || n.data.finish_date) {

        // start: Date;
        // end?: Date;
        // title: string;
        // color: EventColor;
        // actions?: EventAction[];
        // allDay?: boolean;
        // cssClass?: string;
        // resizable?: {
        //     beforeStart?: boolean;
        //     afterEnd?: boolean;
        // };
        // draggable?: boolean;
        // meta?: MetaType;
        console.log("Adding Event " + n.data.id);


        let e: CalendarEvent = {
          title: n.data.label,
          start: n.data.finish_date,
          color: EventColors.blue,
          meta: n
        }

        // console.log("Adding Event " + n.data.id + " EVENT: " + JSON.stringify(e));
        this.events.push(e)
      }
    });

  }

  ngOnInit() {
  }

  public set viewDate(d: Date) {
    this._d = d
  }

  public get viewDate(): Date {
    return this._d
  }

  public eventClicked({ event }: { event: CalendarEvent }) {
    console.log("Event Clicked ");
    // if (event.meta) {
    this.selected = event.meta
    // }
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
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
}

export const EventColors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};