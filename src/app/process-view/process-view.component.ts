import { Component, OnInit, Input } from '@angular/core';
import { Process } from '../models'

@Component({
  selector: 'app-process-view',
  templateUrl: './process-view.component.html',
  styleUrls: ['./process-view.component.css']
})
export class ProcessViewComponent implements OnInit {

  constructor() { }
  @Input() selected : Process
  
  ngOnInit() {
  }
}
