import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { DataService } from '../data.service';
import { GraphItem } from '../models';

@Component({
  selector: "app-view",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.component.css"]
})
export class ViewComponent implements OnInit {
  show = false;

  _item: GraphItem;
  links;

  constructor(
    private route: ActivatedRoute,
    private db: DataService,
    private router: Router
  ) {
    console.log("Created View");

    let id = this.route.snapshot.paramMap.get("id");
    this.route.paramMap.subscribe((p: ParamMap) => {
      let id = p.get("id");
      if (id) {
        this.item = this.db.findItem(id);
        this.show = true;
      }
    });
  }

  @Input()
  set item(i: GraphItem) {
    console.log("Setting Items " + i);
    if (i && i.data) {
      this._item = i;
      this.getLinks();
    }
  }

  get item() {
    return this._item;
  }

  ngOnInit() {}

  private getLinks() {
    if (this.item && this.item.data) {
      let edges = this.db.getEdgesWith(this.item.data.id);
      let _links: string[] = [];
      edges.forEach(e => {
        if (e.data.target == this.item.data.id) {
          _links.push(e.data.source);
        } else {
          _links.push(e.data.target);
        }
      });
      this.links = _links;
      // let groups = _.groupBy(edges, item => this.item.data.type)
      // this.links = groups
    }
  }

  edit() {
    if (this.item) {
      this.router.navigate(["/edit", this.item.data.id]);
    }
  }
  cancel() {
    window.history.back();
  }

  isScheduled(item: GraphItem): boolean {
    let nt = this.db.nodeType(item.data.type);
    if (nt) {
      return nt.hasDate;
    }
    return false;
  }
}
