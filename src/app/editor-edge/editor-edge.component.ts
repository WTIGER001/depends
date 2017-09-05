import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NgbDateStruct, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap'
import { DataService } from '../data.service';
import { GraphItem, Database } from '../models';
import { Observable } from 'rxjs/Observable';
import { UUID } from 'angular2-uuid';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import * as _ from 'lodash'
const holder = []

@Component({
  selector: 'app-editor-edge',
  templateUrl: './editor-edge.component.html',
  styleUrls: ['./editor-edge.component.css']
})
export class EditorEdgeComponent implements OnInit {

  original: GraphItem
  node: GraphItem
  target
  source
  // newEdge: any = {
  //   data: {},
  //   temp: true
  // }

  constructor(private route: ActivatedRoute, private db: DataService) {
    this.node = new GraphItem()
    this.node.group = 'edges'

    let id = this.route.snapshot.paramMap.get('id');
    this.route.paramMap.subscribe((p: ParamMap) => {
      let id = p.get("id")
      let node = this.db.findItem(id)
      if (node) {
        console.log("SETTING NODE " + node.data.id);
        this.original = node
        let newOne = new GraphItem()
        newOne.group = node.group
        newOne.data = _.clone(node.data)
        this.node = newOne
        this.fillIn()
      }
    })

    holder[0] = this.db
  }

  ngOnInit() {
  }

  public fillIn() {
    let tgtId = this.node.data.target
    if (tgtId) {
      this.target = this.db.getItem(tgtId)
    }

    let srcId = this.node.data.source
    if (srcId) {
      this.source = this.db.getItem(srcId)
    }
  }

  public searchforIds(text): Observable<any> {
    return text
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => {
        return term.length < 2 ? []
          : holder[0].findAll2(term)
      }
      );
  }


  public fixId() {
    this.node.data.id = DataService.valid(this.node.data.id)
  }

  public randomId() {
    this.node.data.id = UUID.UUID();
  }

  public formatter(item): string {
    return item.data.id
  }


  public save() {
    if (this.node.data['start_date_obj']) {
      let dt: NgbDateStruct = this.node.data['start_date_obj']
      this.node.data.start_date = new Date(dt.day, dt.month, dt.year, 0, 0, 0, 0)
    }

    if (this.node.data['finish_date_obj']) {
      let dt: NgbDateStruct = this.node.data['finish_date_obj']
      this.node.data.start_date = new Date(dt.day, dt.month, dt.year, 0, 0, 0, 0)
    }

    // Fix the 
    if ((typeof this.target) == 'string') {
      this.node.data.target = this.target
    } else {
      this.node.data.target = this.target.data.id
    }

    if ((typeof this.source) == 'string') {
      this.node.data.source = this.source
    } else {
      this.node.data.source = this.source.data.id
    }

    if (this.original) {
      // EDIT
      this.original.data = this.node.data
    } else {
      // NEW
      this.db.add(this.node)
    }

    window.history.back()
  }

  public cancel() {
    window.history.back()
  }
}
