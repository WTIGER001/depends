import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { GraphItem, Database } from '../models';
import { DataService } from '../data.service';
import * as _ from 'lodash'

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  show = false

  _item: GraphItem
  links

  constructor(private route: ActivatedRoute, private db: DataService, private router: Router) {
    let id = this.route.snapshot.paramMap.get('id');
    this.route.paramMap.subscribe((p: ParamMap) => {
      let id = p.get("id")
      if (id) {
        this.item = this.db.findItem(id)
        this.show = true
      }
    })
  }

  @Input() set item(i: GraphItem) {
    if (i && i.data) {
      this._item = i
      this.getLinks()
    }
  }

  get item() {
    return this._item
  }

  ngOnInit() {
  }

  private getLinks() {
    if (this.item && this.item.data) {
      let edges = this.db.getEdgesFrom(this.item.data.id)
      this.links = edges
      // let groups = _.groupBy(edges, item => this.item.data.type)
      // this.links = groups
    }
  }

  edit() {
    if (this.item) {
      this.router.navigate(['/edit', this.item.data.id]);
    }
  }
  cancel() {
    window.history.back()
  }
}
