import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isCollapsed: boolean = false
  large = true
  constructor() {
    let mq = window.matchMedia("(min-width: 992px)");
    this.large = mq.matches
    mq.addListener(newMatch => {
      console.log("Media Query " + newMatch.matches + " IS LARGE");
      this.large = newMatch.matches
    });
  }

  ngOnInit() {
  }

}
