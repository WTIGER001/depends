import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: "app-summary-chart",
  templateUrl: "./summary-chart.component.html",
  styleUrls: ["./summary-chart.component.css"]
})
export class SummaryChartComponent implements OnInit {
  @Input() items;
  @Input() type;
  view;
  w: number;
  h: number;

  colorScheme = {
    domain: ["#5AA454", "#A10A28", "#C7B42C", "#AAAAAA"]
  };

  constructor() {}

  ngOnInit() {}

  @Input()
  public set width(w: number) {
    this.w = w;
    this.view = [this.w, this.h];
  }

  @Input()
  public set height(h: number) {
    this.h = h;
    this.view = [this.w, this.h];
  }

  public onSelect(event) {
    console.log("Selected");
  }
}
