import {
  Component,
  OnInit,
  ViewChild,
  AfterContentInit,
  HostListener,
  OnDestroy
} from "@angular/core";

import { DataService } from "../data.service";
import { LocalStorageService } from "angular-2-local-storage";
import { Database, GraphItem } from "../models";
import { Styles } from "../styles";

import * as _ from "lodash";

@Component({
  selector: "app-dependency-graph",
  templateUrl: "./dependency-graph.component.html",
  styleUrls: ["./dependency-graph.component.css"]
})
export class DependencyGraphComponent
  implements OnInit, AfterContentInit, OnDestroy {
  LOCAL_STORAGE_KEY = "DependencyGraphComponent.PREFS";

  @ViewChild("drawingArea") drawingArea;
  @ViewChild("navigator") navigator;
  cyZoom;
  cy: any;
  large = true;
  db: Database;
  styles = new Styles();
  layoutChoices = [
    { name: "Breadth First", value: "breadthfirst" },
    { name: "Circle", value: "circle" },
    { name: "Concentric", value: "concentric" },
    { name: "COSE", value: "cose" },
    { name: "Directed Graph", value: "dagre" },
    { name: "Grid", value: "grid" }
  ];

  types = [
  ];

  layout = this.layoutChoices[2];

  prefs = new Prefs();

  constructor(
    private dataSvc: DataService,
    private localStorage: LocalStorageService
  ) {
    // Read Prefereces
    let str = <string>this.localStorage.get(this.LOCAL_STORAGE_KEY);
    if (str) {
      this.prefs = JSON.parse(str);
      if (this.prefs.layoutChoice >= 0) {
        this.layout = this.layoutChoices[this.prefs.layoutChoice];
      }
    }

    // Monitor ScreenSize
    let mq = window.matchMedia("(min-width: 992px)");
    this.large = mq.matches;
    mq.addListener(newMatch => {
      this.large = newMatch.matches;
      this.updateForMedia();
    });

    this.types = this.dataSvc.nodeTypes;
  }

  //STUPID, STUPID, STUPID
  ngAfterContentInit() {
    setTimeout(() => {
      if (this.resize()) {
        this.update();
        setTimeout(() => {
          if (this.resize()) {
            this.update();
          }
        }, 1000);
      }
    }, 300);
  }

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    // let windowH = event.target.innerHeight
    // var rect = this.drawingArea.nativeElement.getBoundingClientRect();
    // this.drawingArea.nativeElement.style.height = (windowH - rect.top - 10) + "px"
    this.resize();
  }

  public resize() {
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

      let r2 = this.drawingArea.nativeElement.getBoundingClientRect();
      let aspect = r2.width / r2.height;

      let navH = 100;
      let navW = navH * aspect;
      this.navigator.nativeElement.style.height = navH + 6 + "px";
      this.navigator.nativeElement.style.width = navW + "px";
      return true;
    }
  }

  public isLayout(layout: any): boolean {
    return this.layout.value == layout.value;
  }

  public isFiltered(l: string): boolean {
    return _.includes(this.prefs.filtered, l);
  }

  public setLayout(newLayout: any) {
    this.layout = newLayout;
    this.prefs.layoutChoice = _.indexOf(this.layoutChoices, newLayout);
    this.savePrefs();
    this.update();
  }

  public setSelectPref(p: string) {
    this.prefs.select = p;
    this.update();
  }

  public update() {
    let layoutOptions = {
      name: this.layout.value,
      nodeSpacing: 5,
      minNodeSpacing: 30,
      edgeLengthVal: 45,
      animate: true
    };

    this.getActiveEles()
      .layout(layoutOptions)
      .run();
  }

  public toggleSized() {
    this.prefs.sized = !this.prefs.sized;
    this.updateSized();
  }

  public updateSized() {
    if (this.prefs.sized) {
      this.cy.nodes().addClass("sized");
    } else {
      this.cy.nodes().removeClass("sized");
    }
  }

  public toggleAuto() {
    this.prefs.autoLayout = !this.prefs.autoLayout;
    this.savePrefs();
    this.update();
  }

  public toggleNav() {
    this.prefs.showNavigator = !this.prefs.showNavigator;
    this.savePrefs();
  }

  public toggleVersion() {
    this.prefs.showVersion = !this.prefs.showVersion;
    this.savePrefs();
    this.updateVersion();
  }

  public updateVersion() {
    if (this.prefs.showVersion) {
      this.cy.edges().addClass("version");
    } else {
      this.cy.edges().removeClass("version");
    }
  }
  public toggleArrows() {
    this.prefs.showArrows = !this.prefs.showArrows;
    this.savePrefs();
    this.updateArrows();
  }

  public updateArrows() {
    if (this.prefs.showArrows) {
      this.cy.edges().addClass("arrow");
    } else {
      this.cy.edges().removeClass("arrow");
    }
  }

  public toggleFilter(t) {
    // Toggle the filter
    let len = this.prefs.filtered.length;
    let success = _.pull(this.prefs.filtered, t);
    if (success.length == len) {
      this.prefs.filtered.push(t);
    }
    this.savePrefs();
    this.updateFilters();
    this.update();
  }

  public updateFilters() {
    this.cy.batch(() => {
      this.cy.nodes().forEach(p => {
        let n = p._private;
        let type = n.data["type"];
        p.removeClass("filtered");
        if (_.includes(this.prefs.filtered, type)) {
          p.addClass("filtered");
        }
      });
    });
  }

  public highlight(node) {
    let keep: any;

    let selector = "#" + node.id();
    if (this.prefs.select == "neighborhood") {
      keep = node.closedNeighborhood();
    } else if (this.prefs.select == "incomers") {
      keep = this.cy.nodes(selector).incomers();
    } else if (this.prefs.select == "outgoers") {
      keep = this.cy.nodes(selector).outgoers();
    } else if (this.prefs.select == "successors") {
      keep = this.cy.nodes(selector).successors();
    } else if (this.prefs.select == "predecessors") {
      keep = this.cy.nodes(selector).predecessors();
    } else if (this.prefs.select == "bog-neighborhood") {
      keep = this.cy
        .nodes(selector)
        .predecessors()
        .union(this.cy.nodes(selector).successors());
    }

    if (keep == undefined) {
      console.log(
        "Bad Selection " + this.prefs.select + " or BAD Selector " + selector
      );
      keep = node.closedNeighborhood();
    }
    var others = this.cy.elements().not(keep);

    console.log("Results KEEP=" + keep.length + " OUT=" + others.length);

    this.cy.batch(() => {
      others.addClass("hidden");
      keep.removeClass("hidden");
      this.cy.edges().removeClass("hidden");
      node.removeClass("hidden");
      this.update();
    });
  }

  ngOnDestroy() {
    this.cy.destroy();
  }

  ngOnInit() {
    // Setup Cy
    this.cy = cytoscape({
      container: this.drawingArea.nativeElement,
      style: this.styles.styles,
      wheelSensitivity: 0.2
    });
    this.setUpExtensions();
    this.setUpEvents();

    // Add the nodes
    this.dataSvc.getDb().subscribe(db => {
      this.db = db;
      if (db.graph) {
        // Add the nodes
        db.graph.forEach((i: GraphItem) => {
          this.cy.add(i);
        });

        var max = 1;
        this.cy.nodes().forEach(p => {
          let n = p._private;
          let id = n.data["id"];
          let l = p.connectedEdges().length;
          n.data.degree = l;
          max = Math.max(max, l);
        });
        this.styles.setMaxSize(max);
        this.cy.style(this.styles.styles);
        this.updateSized();
        this.updateArrows();
        this.updateVersion();

        // Layout
        this.update();
        this.cy.fit();
      }
    });
  }

  public updateForMedia() {
    if (!this.large) {
      this.cyZoom.hidden = true;
    } else {
      this.cyZoom.hidden = !this.prefs.showZoom;
    }
  }

  public toggleZoom() {
    this.prefs.showZoom = !this.prefs.showZoom;
    this.savePrefs();
    this.updateForMedia();
  }

  private setUpExtensions() {
    // Setup Extensions
    let pzdefaults = {};
    this.cy.panzoom(pzdefaults);
    // this.cyZoom = this.drawingArea.nativeElement.
    this.cyZoom = document.getElementsByClassName("cy-panzoom").item(0);
    this.updateForMedia();

    let navDefaults = { container: this.navigator.nativeElement };
    this.cy.navigator(navDefaults);
  }

  private setUpEvents() {
    this.cy.on("tap", "node", evt => {
      let _id = evt.target.id();
      let t = evt.target;
      this.highlight(t);
    });
    this.cy.on("tap", "edge", evt => {
      let _id = evt.target.id();
    });
    this.cy.on("taphold", "node", evt => {
      let _id = evt.target.id();
      let t = evt.target;
    });
    this.cy.on("unselect", "node", evt => {
      this.cy.batch(() => {
        this.cy.elements().removeClass("hidden");
        this.update();
      });
    });
  }

  private debug(obj: any) {
    let keys = Object.keys(obj);
    keys.forEach(k => {
      console.log(k);
    });
  }

  public getActiveEles(): any {
    if (this.prefs.autoLayout) {
      return this.cy
        .elements()
        .not(".filtered")
        .not(".hidden");
    } else {
      return this.cy.elements();
    }
  }

  public savePrefs() {
    let str = JSON.stringify(this.prefs);
    this.localStorage.set(this.LOCAL_STORAGE_KEY, str);
  }

  public resetPreferences() {
    this.prefs = new Prefs();
    if (this.prefs.layoutChoice >= 0) {
      this.layout = this.layoutChoices[this.prefs.layoutChoice];
    }
    this.savePrefs();
    this.updateArrows();
    this.updateVersion();
    this.updateFilters();
    this.updateSized();
    this.update();
  }
}

class Prefs {
  layoutChoice: number = 2;
  showNavigator = true;
  showZoom = true;
  autoLayout = true;
  showArrows = true;
  showVersion = true;
  sized = false;
  select = "neighborhood";
  filtered: string[] = [""];
}
