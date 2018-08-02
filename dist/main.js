(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<app-menu></app-menu>\r\n\r\n<div class=\"container-fluid\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/dist/index.js");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angular_2_local_storage__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var ng2_split_pane_lib_ng2_split_pane__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-split-pane/lib/ng2-split-pane */ "./node_modules/ng2-split-pane/lib/ng2-split-pane.js");
/* harmony import */ var ng2_split_pane_lib_ng2_split_pane__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ng2_split_pane_lib_ng2_split_pane__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var ng2_table_ng2_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-table/ng2-table */ "./node_modules/ng2-table/ng2-table.js");
/* harmony import */ var ng2_table_ng2_table__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ng2_table_ng2_table__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/esm5/ngx-chips.js");
/* harmony import */ var ngx_timeline__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-timeline */ "./node_modules/ngx-timeline/dist/esm5/ngx-timeline.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./calendar/calendar.component */ "./src/app/calendar/calendar.component.ts");
/* harmony import */ var _data_manager_data_manager_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./data-manager/data-manager.component */ "./src/app/data-manager/data-manager.component.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _dependency_graph_dependency_graph_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dependency-graph/dependency-graph.component */ "./src/app/dependency-graph/dependency-graph.component.ts");
/* harmony import */ var _dependency_matrix_dependency_matrix_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./dependency-matrix/dependency-matrix.component */ "./src/app/dependency-matrix/dependency-matrix.component.ts");
/* harmony import */ var _dependency_table_dependency_table_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./dependency-table/dependency-table.component */ "./src/app/dependency-table/dependency-table.component.ts");
/* harmony import */ var _edgelabel_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./edgelabel.pipe */ "./src/app/edgelabel.pipe.ts");
/* harmony import */ var _editor_edge_editor_edge_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./editor-edge/editor-edge.component */ "./src/app/editor-edge/editor-edge.component.ts");
/* harmony import */ var _editor_editor_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./editor/editor.component */ "./src/app/editor/editor.component.ts");
/* harmony import */ var _gantt_gantt_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./gantt/gantt.component */ "./src/app/gantt/gantt.component.ts");
/* harmony import */ var _label_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./label.pipe */ "./src/app/label.pipe.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _nodetypelabel_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./nodetypelabel.pipe */ "./src/app/nodetypelabel.pipe.ts");
/* harmony import */ var _process_list_process_list_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./process-list/process-list.component */ "./src/app/process-list/process-list.component.ts");
/* harmony import */ var _report_report_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./report/report.component */ "./src/app/report/report.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _stash_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./stash.service */ "./src/app/stash.service.ts");
/* harmony import */ var _summary_chart_summary_chart_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./summary-chart/summary-chart.component */ "./src/app/summary-chart/summary-chart.component.ts");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./timeline/timeline.component */ "./src/app/timeline/timeline.component.ts");
/* harmony import */ var _type_pipe__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./type.pipe */ "./src/app/type.pipe.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./view/view.component */ "./src/app/view/view.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





































var appRoutes = [
    { path: "home", component: _process_list_process_list_component__WEBPACK_IMPORTED_MODULE_29__["ProcessListComponent"] },
    { path: "edit", component: _editor_editor_component__WEBPACK_IMPORTED_MODULE_24__["EditorComponent"] },
    { path: "edit_edge", component: _editor_edge_editor_edge_component__WEBPACK_IMPORTED_MODULE_23__["EditorEdgeComponent"] },
    { path: "edit/:id", component: _editor_editor_component__WEBPACK_IMPORTED_MODULE_24__["EditorComponent"] },
    { path: "edit_edge/:id", component: _editor_edge_editor_edge_component__WEBPACK_IMPORTED_MODULE_23__["EditorEdgeComponent"] },
    { path: "view/:id", component: _view_view_component__WEBPACK_IMPORTED_MODULE_36__["ViewComponent"] },
    { path: "matrix", component: _dependency_matrix_dependency_matrix_component__WEBPACK_IMPORTED_MODULE_20__["DependencyMatrixComponent"] },
    { path: "graph", component: _dependency_graph_dependency_graph_component__WEBPACK_IMPORTED_MODULE_19__["DependencyGraphComponent"] },
    { path: "report", component: _report_report_component__WEBPACK_IMPORTED_MODULE_30__["ReportComponent"] },
    { path: "calendar", component: _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_16__["CalendarComponent"] },
    { path: "timeline", component: _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_34__["TimelineComponent"] },
    { path: "gantt", component: _gantt_gantt_component__WEBPACK_IMPORTED_MODULE_25__["GanttComponent"] },
    { path: "database", component: _data_manager_data_manager_component__WEBPACK_IMPORTED_MODULE_17__["DataManagerComponent"] },
    { path: "settings", component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_31__["SettingsComponent"] },
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "**", redirectTo: "/home" }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_27__["MenuComponent"],
                _process_list_process_list_component__WEBPACK_IMPORTED_MODULE_29__["ProcessListComponent"],
                _dependency_matrix_dependency_matrix_component__WEBPACK_IMPORTED_MODULE_20__["DependencyMatrixComponent"],
                _dependency_graph_dependency_graph_component__WEBPACK_IMPORTED_MODULE_19__["DependencyGraphComponent"],
                _data_manager_data_manager_component__WEBPACK_IMPORTED_MODULE_17__["DataManagerComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_31__["SettingsComponent"],
                _report_report_component__WEBPACK_IMPORTED_MODULE_30__["ReportComponent"],
                _dependency_table_dependency_table_component__WEBPACK_IMPORTED_MODULE_21__["DependencyTableComponent"],
                _editor_editor_component__WEBPACK_IMPORTED_MODULE_24__["EditorComponent"],
                _view_view_component__WEBPACK_IMPORTED_MODULE_36__["ViewComponent"],
                _label_pipe__WEBPACK_IMPORTED_MODULE_26__["LabelPipe"],
                _type_pipe__WEBPACK_IMPORTED_MODULE_35__["TypePipe"],
                _editor_edge_editor_edge_component__WEBPACK_IMPORTED_MODULE_23__["EditorEdgeComponent"],
                _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_16__["CalendarComponent"],
                _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_34__["TimelineComponent"],
                _gantt_gantt_component__WEBPACK_IMPORTED_MODULE_25__["GanttComponent"],
                _edgelabel_pipe__WEBPACK_IMPORTED_MODULE_22__["EdgelabelPipe"],
                _nodetypelabel_pipe__WEBPACK_IMPORTED_MODULE_28__["NodetypelabelPipe"],
                _summary_chart_summary_chart_component__WEBPACK_IMPORTED_MODULE_33__["SummaryChartComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(appRoutes),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"].forRoot(),
                angular_2_local_storage__WEBPACK_IMPORTED_MODULE_9__["LocalStorageModule"].withConfig({
                    prefix: "depends",
                    storageType: "localStorage"
                }),
                ng2_split_pane_lib_ng2_split_pane__WEBPACK_IMPORTED_MODULE_11__["SplitPaneModule"],
                ng2_table_ng2_table__WEBPACK_IMPORTED_MODULE_12__["Ng2TableModule"],
                ngx_chips__WEBPACK_IMPORTED_MODULE_13__["TagInputModule"],
                angular_calendar__WEBPACK_IMPORTED_MODULE_10__["CalendarModule"].forRoot(),
                ngx_timeline__WEBPACK_IMPORTED_MODULE_14__["NgxTimelineModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_8__["NgxChartsModule"]
            ],
            providers: [_data_service__WEBPACK_IMPORTED_MODULE_18__["DataService"], _stash_service__WEBPACK_IMPORTED_MODULE_32__["StashService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]]
        }),
        __metadata("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/calendar/calendar.component.css":
/*!*************************************************!*\
  !*** ./src/app/calendar/calendar.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/calendar/calendar.component.html":
/*!**************************************************!*\
  !*** ./src/app/calendar/calendar.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4> {{ viewDate | calendarDate:(display + 'ViewTitle') }} </h4>\n<div class=\"sticky-top\">\n  <div class=\"btn-group btn-group-sm  mb-1\">\n    <div class=\"btn btn-info btn-sm\" mwlCalendarPreviousView [view]=\"display\" [(viewDate)]=\"viewDate\">Previous </div>\n    <div class=\"btn btn-secondary btn-sm\" mwlCalendarToday [(viewDate)]=\"viewDate\">Today</div>\n    <div class=\"btn btn-info btn-sm\" mwlCalendarNextView [view]=\"display\" [(viewDate)]=\"viewDate\">Next</div>\n  </div>\n\n  <div class=\"btn-group btn-group-sm  mb-1\">\n    <div class=\"btn btn-info btn-sm\" (click)=\"display = 'month'\" [class.active]=\"display === 'month'\">\n      Month\n    </div>\n    <div class=\"btn btn-info btn-sm\" (click)=\"display = 'week'\" [class.active]=\"display === 'week'\">\n      Week\n    </div>\n    <!-- <div class=\"btn btn-info btn-sm\" (click)=\"display = 'day'\" [class.active]=\"display === 'day'\">\n      Day\n    </div> -->\n  </div>\n\n  <div class=\"btn-group btn-group-sm mb-1\" role=\"group\" data-toggle=\"buttons\">\n    <button [disabled]=\"!selected\" class=\"btn btn-secondary btn-sm \" (click)=\"edit()\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> Edit </button>\n    <button class=\"btn btn-sm btn-secondary \" (click)=\"newItem()\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i> New Item</button>\n    <button class=\"btn btn-sm btn-secondary \" (click)=\"newEdge()\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i> New Link</button>\n  </div>\n</div>\n\n\n\n<div class=\"row\">\n  <div class=\"col-lg-9\">\n    <div [ngSwitch]=\"display\">\n      <mwl-calendar-month-view *ngSwitchCase=\"'month'\" [viewDate]=\"viewDate\" [events]=\"events\" [activeDayIsOpen]=\"activeDayIsOpen\"\n        (eventClicked)=\"eventClicked($event)\" (dayClicked)=\"dayClicked($event.day)\">\n      </mwl-calendar-month-view>\n      <mwl-calendar-week-view *ngSwitchCase=\"'week'\" [viewDate]=\"viewDate\" [events]=\"events\" (eventClicked)=\"eventClicked($event)\">\n      </mwl-calendar-week-view>\n      <mwl-calendar-day-view *ngSwitchCase=\"'day'\" [viewDate]=\"viewDate\" [events]=\"events\" (eventClicked)=\"eventClicked($event)\">\n      </mwl-calendar-day-view>\n    </div>\n  </div>\n  <div class=\"col-lg-3\">\n    <app-view [item]=\"selected\"></app-view>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/calendar/calendar.component.ts":
/*!************************************************!*\
  !*** ./src/app/calendar/calendar.component.ts ***!
  \************************************************/
/*! exports provided: CalendarComponent, EventColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventColors", function() { return EventColors; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CalendarComponent = /** @class */ (function () {
    function CalendarComponent(data, router) {
        // this.events.push({
        //   title: "TEST",
        //   start: new Date(),
        //   end: new Date(),
        //   color: EventColors.blue
        // })
        var _this = this;
        this.data = data;
        this.router = router;
        this.display = "month";
        this._d = new Date();
        this.events = [];
        this.activeDayIsOpen = false;
        this.data.cy.elements().forEach(function (i) {
            var n = i._private;
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
                console.log("Adding Event " + n.data.id + " at " + n.data.finish_date);
                var dt = n.data.finish_date;
                if (typeof dt === "string") {
                    dt = new Date(Date.parse(dt));
                }
                var e = {
                    title: n.data.label,
                    start: dt,
                    color: EventColors.blue,
                    meta: n
                };
                // console.log("Adding Event " + n.data.id + " EVENT: " + JSON.stringify(e));
                _this.events.push(e);
            }
        });
    }
    CalendarComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(CalendarComponent.prototype, "viewDate", {
        get: function () {
            return this._d;
        },
        set: function (d) {
            this._d = d;
        },
        enumerable: true,
        configurable: true
    });
    CalendarComponent.prototype.eventClicked = function (_a) {
        var event = _a.event;
        console.log("Event Clicked ");
        // if (event.meta) {
        this.selected = event.meta;
        // }
    };
    CalendarComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["isSameMonth"])(date, this.viewDate)) {
            if ((Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
                this.viewDate = date;
            }
        }
    };
    CalendarComponent.prototype.edit = function () {
        if (this.selected) {
            this.router.navigate(["/edit", this.selected.data.id]);
        }
    };
    CalendarComponent.prototype.view = function (r) {
        if (r) {
            this.router.navigate(["/view", r.item.data.id]);
        }
        if (this.selected) {
            this.router.navigate(["/view", this.selected.data.id]);
        }
    };
    CalendarComponent.prototype.newItem = function () {
        this.router.navigate(["/edit"]);
    };
    CalendarComponent.prototype.newEdge = function () {
        this.router.navigate(["/edit_edge"]);
    };
    CalendarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-calendar",
            template: __webpack_require__(/*! ./calendar.component.html */ "./src/app/calendar/calendar.component.html"),
            styles: [__webpack_require__(/*! ./calendar.component.css */ "./src/app/calendar/calendar.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CalendarComponent);
    return CalendarComponent;
}());

var EventColors = {
    red: {
        primary: "#ad2121",
        secondary: "#FAE3E3"
    },
    blue: {
        primary: "#1e90ff",
        secondary: "#D1E8FF"
    },
    yellow: {
        primary: "#e3bc08",
        secondary: "#FDF1BA"
    }
};


/***/ }),

/***/ "./src/app/data-manager/data-manager.component.css":
/*!*********************************************************!*\
  !*** ./src/app/data-manager/data-manager.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-file {\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n.btn-file input[type=\"file\"] {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  min-width: 100%;\r\n  min-height: 100%;\r\n  font-size: 100px;\r\n  text-align: right;\r\n  filter: alpha(opacity=0);\r\n  opacity: 0;\r\n  outline: none;\r\n  background: white;\r\n  cursor: inherit;\r\n  display: block;\r\n}\r\n.chart-container {\r\n  min-height: 400px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/data-manager/data-manager.component.html":
/*!**********************************************************!*\
  !*** ./src/app/data-manager/data-manager.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Database Manager</h4>\n<div class=\"sticky-top\">\n  <div class=\"btn-group btn-group-sm mb-1\" role=\"group\" data-toggle=\"buttons\">\n    <label class=\"btn btn-secondary btn-file\"><i class=\"fa fa-upload\" aria-hidden=\"true\"></i> Upload Database<input type=\"file\" (change)=\"fileChange($event)\" placeholder=\"Upload file\" accept=\".json\" multiple></label>\n    <button class=\"btn btn-secondary\" (click)=\"clearDb()\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i> Clear Database</button>\n    <button class=\"btn btn-secondary\" (click)=\"downloadFile()\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i> Download Database</button>\n  </div>\n\n  <div class=\"btn-group btn-group-sm mb-1\" role=\"group\" data-toggle=\"buttons\">\n    <button class=\"btn btn-info btn-sm\" (click)=\"type ='pie'\" [ngClass]=\"{'active': type == 'pie'}\"><i class=\"fa fa-pie-chart\" aria-hidden=\"true\"></i></button>\n    <button class=\"btn btn-info btn-sm\" (click)=\"type ='pie_advanced'\" [ngClass]=\"{'active': type == 'pie_advanced'}\"><i class=\"fa fa-pie-chart\" aria-hidden=\"true\"></i></button>\n    <button class=\"btn btn-info btn-sm\" (click)=\"type ='pie_grid'\" [ngClass]=\"{'active': type == 'pie_grid'}\"><i class=\"fa fa-pie-chart\" aria-hidden=\"true\"></i></button>\n    <button class=\"btn btn-info btn-sm\" (click)=\"type ='bar_v'\" [ngClass]=\"{'active': type == 'bar_v'}\"><i class=\"fa fa-bar-chart\" aria-hidden=\"true\"></i></button>\n    <button class=\"btn btn-info btn-sm\" (click)=\"type ='bar_h'\" [ngClass]=\"{'active': type == 'bar_h'}\"><i class=\"fa fa-bar-chart fa-rotate-90\" aria-hidden=\"true\"></i></button>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-12\">\n    <p>The current source of your database is: {{database.source}}</p>\n    <p>Current database contains </p>\n    <ul>\n      <li>{{database.graph.length}} Graph Items</li>\n    </ul>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-12 chart-container\">\n    <p>Nodes </p>\n    <app-summary-chart [type]=\"type\" [items]=\"histogram\" [width]=\"1500\" [height]=\"400\"></app-summary-chart>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-12 chart-container\">\n    <p>Edges </p>\n    <app-summary-chart [type]=\"type\" [items]=\"histogramEdges\" [width]=\"1500\" [height]=\"400\"></app-summary-chart>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/data-manager/data-manager.component.ts":
/*!********************************************************!*\
  !*** ./src/app/data-manager/data-manager.component.ts ***!
  \********************************************************/
/*! exports provided: DataManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataManagerComponent", function() { return DataManagerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/FileSaver.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _stash_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../stash.service */ "./src/app/stash.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DataManagerComponent = /** @class */ (function () {
    function DataManagerComponent(dataService, stash) {
        var _this = this;
        this.dataService = dataService;
        this.stash = stash;
        this.type = "pie_advanced";
        this.view = [700, 400];
        // options
        this.showLegend = true;
        this.xAxisLabel = "Country";
        this.showYAxisLabel = true;
        this.yAxisLabel = "Population";
        this.colorScheme = {
            domain: ["#5AA454", "#A10A28", "#C7B42C", "#AAAAAA"]
        };
        this.repos = new Array();
        this.dataService.getDb().subscribe(function (db) {
            _this.database = db;
            _this.histogram = _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"].countNodes(_this.dataService.cy.elements());
            _this.histogramEdges = _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"].countEdges(_this.dataService.cy.elements());
        });
    }
    DataManagerComponent.prototype.ngOnInit = function () { };
    DataManagerComponent.prototype.clearDb = function () {
        this.dataService.clearDb();
    };
    DataManagerComponent.prototype.fileChange = function (event) {
        var files = event.target.files;
        this.dataService.addFiles(files, function () { });
    };
    DataManagerComponent.prototype.downloadFile = function () {
        var data = JSON.stringify(this.database);
        var blob = new Blob([data], { type: "application/json;charset=utf-8" });
        Object(file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"])(blob, "database.json");
    };
    DataManagerComponent.prototype.onSelect = function (event) {
        console.log("Selected");
    };
    DataManagerComponent.prototype.readProcessFile = function (slug) {
        var _this = this;
        this.stash.getProcessesFile(slug).subscribe(function (data) {
            console.log(data);
            _this.repos = data;
        }, function (err) {
            console.log("ERROR READING FILE" + JSON.stringify(err));
            console.error(err);
        });
    };
    DataManagerComponent.prototype.getRepoList = function () {
        var _this = this;
        this.stash.getRepos().subscribe(function (data) {
            console.log(data);
            _this.repos = data;
        }, function (err) {
            console.log("ERROR " + JSON.stringify(err));
            console.error(err);
        });
        console.log("clicked");
    };
    DataManagerComponent.prototype.randomDates = function () {
        this.dataService.cy.elements().forEach(function (i) {
            var n = i._private;
            // Generate a random date
            var yr = 2017;
            var mon = Math.floor(Math.random() * 3) + 9;
            var days = Math.floor(Math.random() * 60) + 1;
            var dateStart = new Date(yr, mon, 0, 0, 0, 0);
            var dt = date_fns__WEBPACK_IMPORTED_MODULE_1__["addDays"](dateStart, days);
            var duration = Math.floor(Math.random() * 30) + 1;
            n.data.start_date = dt;
            n.data.finish_date = date_fns__WEBPACK_IMPORTED_MODULE_1__["addDays"](dt, duration);
        });
    };
    DataManagerComponent.prototype.edgeLabels = function () {
        var _this = this;
        var types = this.dataService.nodeTypes;
        this.dataService.cy.nodes().forEach(function (i) {
            var n = i._private;
            var type = n.data.type;
            types.forEach(function (t) {
                if (t.value == type.toLowerCase()) {
                    n.data.type = t.value;
                }
            });
        });
        this.dataService.cy.edges().forEach(function (i) {
            var n = i._private;
            var a = _this.dataService.label(n.data.target);
            var b = _this.dataService.label(n.data.source);
            var c = _this.dataService.edgeTypeLabel(n.data.type);
            if (!c) {
                n.data.type = "dependency";
                c = "Depends On";
            }
            n.data.label = b + " " + c + " " + a;
        });
    };
    DataManagerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-data-manager",
            template: __webpack_require__(/*! ./data-manager.component.html */ "./src/app/data-manager/data-manager.component.html"),
            styles: [__webpack_require__(/*! ./data-manager.component.css */ "./src/app/data-manager/data-manager.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _stash_service__WEBPACK_IMPORTED_MODULE_4__["StashService"]])
    ], DataManagerComponent);
    return DataManagerComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/dist/index.js");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular_2_local_storage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-uuid */ "./node_modules/angular2-uuid/index.js");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_uuid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./models */ "./src/app/models.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DataService = /** @class */ (function () {
    function DataService(localStorageService, http) {
        // Init Cytoscape engine
        this.localStorageService = localStorageService;
        this.http = http;
        this.cyo = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](this.cy);
        console.info("Reading from Local Storage");
        var dbString = this.localStorageService.get("database");
        var db;
        if (dbString) {
            // console.info("Read " + dbString);
            db = JSON.parse(dbString);
            db.source = "Local Storage";
            db.structure = new _models__WEBPACK_IMPORTED_MODULE_6__["DbConfig"]();
            this.generateCy(db);
        }
        else {
            db = new _models__WEBPACK_IMPORTED_MODULE_6__["Database"]();
            this.generateCy(db);
            this.loadDefaultData();
        }
        this.database = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](db); //Signals that we are ready
        this.deconflict(db);
    }
    DataService_1 = DataService;
    DataService.prototype.loadFromLocalStorage = function (dbString) {
        var db = JSON.parse(dbString);
        db.source = "Local Storage";
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(db);
    };
    DataService.prototype.nodeType = function (value) {
        return lodash__WEBPACK_IMPORTED_MODULE_4__["find"](this.nodeTypes, function (t) { return t.value == value; });
    };
    DataService.prototype.edgeType = function (value) {
        return lodash__WEBPACK_IMPORTED_MODULE_4__["find"](this.edgeTypes, function (t) { return t.value == value; });
    };
    Object.defineProperty(DataService.prototype, "nodeTypes", {
        get: function () {
            return this.database.getValue().structure.nodeTypes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataService.prototype, "edgeTypes", {
        get: function () {
            return this.database.getValue().structure.edgeTypes;
        },
        enumerable: true,
        configurable: true
    });
    DataService.countNodes = function (elements) {
        var items = lodash__WEBPACK_IMPORTED_MODULE_4__["filter"](elements, function (item) { return item.group() == "nodes"; });
        return DataService_1.countAll(items);
    };
    DataService.countEdges = function (elements) {
        var items = lodash__WEBPACK_IMPORTED_MODULE_4__["filter"](elements, function (item) { return item.group() == "edges"; });
        return DataService_1.countAll(items);
    };
    DataService.countAll = function (elements) {
        var results = lodash__WEBPACK_IMPORTED_MODULE_4__["countBy"](elements, function (item) { return item.data("type"); });
        var counts = new Array();
        Object.keys(results).forEach(function (key) {
            counts.push({
                name: key,
                value: results[key]
            });
        });
        return counts;
    };
    /**
     * Generate the Graph Representation in Cytoscape
     * @param db Database to use
     */
    DataService.prototype.generateCy = function (db) {
        var _this = this;
        if (db === void 0) { db = this.database.getValue(); }
        console.info("Generating CY Elements");
        this.cy = cytoscape({
            headless: true,
            styleEnabled: false
        });
        // if (db.graph) {
        // Add the nodes
        db.graph.forEach(function (i) {
            console.debug("Adding " + i.data.id);
            _this.cy.add(i);
        });
        // }
        this.cyo.next(this.cy);
        console.info("Complete CY " + this.cy.elements().length);
    };
    DataService.prototype.getDb = function () {
        return this.database.asObservable();
    };
    DataService.prototype.add = function (item) {
        this.database.getValue().graph.push(item);
        this.deconflict();
        this.cy.add(item);
        this.save();
    };
    DataService.prototype.edgeTypeLabel = function (value) {
        return lodash__WEBPACK_IMPORTED_MODULE_4__["result"](lodash__WEBPACK_IMPORTED_MODULE_4__["find"](this.edgeTypes, { value: value }), "label");
    };
    DataService.prototype.label = function (id) {
        var i = this.getItem(id);
        if (i) {
            return i.data.label;
        }
        return "";
    };
    DataService.prototype.addEdge = function (target, source, type, version, label, id) {
        var e = new _models__WEBPACK_IMPORTED_MODULE_6__["GraphItem"]();
        e.group = "edges";
        e.data.target = target;
        e.data.source = source;
        e.data.id = id ? id : angular2_uuid__WEBPACK_IMPORTED_MODULE_3__["UUID"].UUID();
        e.data.from = e.data.source;
        e.data.to = e.data.target;
        e.data.label = label ? label : version;
        e.data.type = type;
        // Check if the target and source already exist
        if (!this.exists(target)) {
            var tNode = DataService_1.makeDefault(target);
            this.add(tNode);
        }
        if (!this.exists(source)) {
            var sNode = DataService_1.makeDefault(source);
            this.add(sNode);
        }
        this.database.getValue().graph.push(e);
        this.cy.add(e);
        this.save();
        return e;
    };
    /** Saves to Local Storage */
    DataService.prototype.save = function () {
        this.localStorageService.set("database", JSON.stringify(this.database.getValue()));
        console.info("Wrote updated database to local storage");
    };
    DataService.prototype.remove = function (id) {
        console.info("Removing item with id " + id);
        this.cy.remove("#" + id);
        lodash__WEBPACK_IMPORTED_MODULE_4__["remove"](this.database.getValue().graph, function (item) { return item.data.id == id; });
        this.save();
    };
    DataService.makeDefault = function (id, type, name) {
        if (type === void 0) { type = "Generated"; }
        var n = new _models__WEBPACK_IMPORTED_MODULE_6__["GraphItem"]();
        n.data.id = id;
        n.data.type = type;
        n.data.label = name ? name : id;
        return n;
    };
    DataService.prototype.makeIfNeeded = function (id, type, name) {
        if (type === void 0) { type = "Generated"; }
        var n = this.getItem(id);
        if (!n) {
            n = DataService_1.makeDefault(id, type, name);
            this.add(n);
        }
        return n;
    };
    DataService.prototype.exists = function (id) {
        return this.cy.getElementById(id);
    };
    DataService.prototype.getItem = function (id) {
        var item = this.cy.getElementById(id);
        if (item && item._private && item.length == 1) {
            return item._private;
        }
        return undefined;
    };
    DataService.prototype.getEdgesWith = function (id) {
        var item = this.cy.getElementById(id);
        if (item) {
            var rtn_1 = [];
            var items = [];
            items.push.apply(items, item.connectedEdges());
            items.forEach(function (element) {
                var nodeEdge = element._private;
                if (nodeEdge.group == "edges") {
                    rtn_1.push(nodeEdge);
                }
            });
            return rtn_1;
        }
        else {
            return [];
        }
    };
    DataService.prototype.getEdgesFrom = function (id) {
        var item = this.cy.getElementById(id);
        if (item) {
            var rtn_2 = [];
            var items = [];
            items.push.apply(items, item.outgoers());
            items.forEach(function (element) {
                var nodeEdge = element._private;
                if (nodeEdge.group == "edges") {
                    rtn_2.push(nodeEdge);
                }
            });
            return rtn_2;
        }
        else {
            return [];
        }
    };
    DataService.prototype.findItem = function (value, field) {
        if (field === void 0) { field = "id"; }
        if (field == "id") {
            return this.getItem(value);
        }
        var selector = DataService_1.selector(value, field);
        this.cy.elements(selector).forEach(function (item) {
            return item._private;
        });
        return undefined;
    };
    DataService.selector = function (value, field) {
        if (field === void 0) { field = "id"; }
        return 'node[ + "field + "="' + value + '"]';
    };
    DataService.prototype.findAll = function (term) {
        var lcase = term.toLocaleLowerCase();
        var vals = [];
        this.database.getValue().graph.forEach(function (item) {
            if (item.data.id.toLocaleLowerCase().startsWith(lcase)) {
                vals.push(item.data.id);
            }
        });
        vals.sort();
        return vals;
    };
    DataService.prototype.findAll2 = function (term) {
        var lcase = term.toLocaleLowerCase();
        var vals = [];
        this.database.getValue().graph.forEach(function (item) {
            if (item.group == "nodes" &&
                item.data.label.toLocaleLowerCase().startsWith(lcase)) {
                vals.push(item);
            }
        });
        vals.sort(function (a, b) {
            return a.data.label.localeCompare(b.data.label);
        });
        return vals;
    };
    DataService.prototype.clearDb = function () {
        console.warn("Clearing Database");
        this.localStorageService.remove("database");
        if (this.cy) {
            this.cy.elements().remove();
            this.cy.destroy();
        }
        this.database.next(new _models__WEBPACK_IMPORTED_MODULE_6__["Database"]());
    };
    DataService.prototype.addFiles = function (files, callback) {
        console.info("Adding  " + files.length + " new database files");
        for (var i = 0; i < files.length; i++) {
            this.addFile(files[i], callback);
        }
        // this.generateCy(this.database.getValue());
        this.deconflict();
    };
    DataService.prototype.addFile = function (file, callback) {
        var _this = this;
        console.info("Adding new Database file " + file.name);
        var local = this.localStorageService;
        var db = this.database.getValue();
        var r = new FileReader();
        r.onload = function (e) {
            console.debug(r.result);
            var obj = JSON.parse(r.result);
            var source = file.name.replace(".json", "");
            if (obj.graph) {
                // Add Nodes
                obj.graph.forEach(function (item) {
                    if (item.group == "nodes") {
                        // add to the database
                        db.graph.push(item);
                        // add the node to Cytoscape
                        _this.cy.add(item);
                    }
                });
                obj.graph.forEach(function (item) {
                    if (item.group == "edges") {
                        // Check that nodes exist
                        if (_this.validate(item)) {
                            // add to the database
                            db.graph.push(item);
                            // add the node to Cytoscape
                            _this.cy.add(item);
                        }
                        else {
                            console.warn("Invalid Edge:" +
                                item.data.label +
                                " ( " +
                                item.data.id +
                                ") t:" +
                                item.data.target +
                                " s:" +
                                item.data.source);
                        }
                    }
                });
                console.info(file.name + " contained " + obj.graph.length + " items");
            }
            _this.save();
            callback();
        };
        r.readAsText(file);
    };
    /**
     * Loads the default database
     */
    DataService.prototype.loadDefaultData = function () {
        var _this = this;
        console.info("Reading Default Database");
        this.http.get("assets/data/database.json").subscribe(function (res) {
            var db = res.json();
            db.graph.forEach(function (i) {
                var a = i.data.start_date;
                var b = i.data.finish_date;
                if (typeof a == "string") {
                    i.data.start_date = new Date(a);
                }
                if (typeof b == "string") {
                    i.data.finish_date = new Date(b);
                }
            });
            // DataService.generateGraph(db)
            db.source = "Default";
            db.structure = new _models__WEBPACK_IMPORTED_MODULE_6__["DbConfig"]();
            _this.generateCy(db);
            console.info("DB2");
            _this.database.next(db);
            // this.database = new BehaviorSubject(db) //Signals that we are ready
            console.info("DECONFLICT");
            _this.deconflict(db);
        });
    };
    /**
     * Generates a valid ID for a graph item
     * @param s original ID
     */
    DataService.valid = function (s) {
        try {
            return s
                .replace(" ", "_")
                .replace(" ", "_")
                .replace(" ", "_")
                .replace(" ", "_");
        }
        catch (error) {
            console.log("BAD " + JSON.stringify(s));
        }
        return "";
    };
    DataService.prototype.validate = function (item) {
        if (item.group == "edges") {
            if (!item.data.target || !this.exists(item.data.target)) {
                return false;
            }
            if (!item.data.source || !this.exists(item.data.source)) {
                return false;
            }
        }
        return true;
    };
    /**
     * Deconflicts and corrects all the nodes in the graph ensuring that there are nodes for each edge and that duplicate ids (edges and nodes) are merged
     * @param db
     */
    DataService.prototype.deconflict = function (db) {
        var _this = this;
        if (db === void 0) { db = this.database.getValue(); }
        var g = db.graph;
        // First make sure that there are no duplicates
        var groups = lodash__WEBPACK_IMPORTED_MODULE_4__["groupBy"](g, "data.id");
        Object.keys(groups).forEach(function (id) {
            var arr = groups[id];
            if (arr.length > 1) {
                var keep = arr[0];
                for (var i = 1; i < arr.length; i++) {
                    // Copy all the attributes
                    Object.assign(keep, arr[i]);
                    // Remove the duplicate item
                    lodash__WEBPACK_IMPORTED_MODULE_4__["pull"](g, arr[i]);
                }
            }
        });
        // Now make sure that all the nodes are present
        g.forEach(function (item) {
            if (item.group == "edges") {
                var t = item.data.target;
                if (!groups[t]) {
                    var n = new _models__WEBPACK_IMPORTED_MODULE_6__["GraphItem"]();
                    n.data.id = t;
                    n.data.label = t;
                    n.data.type = "Generated";
                    g.push(n);
                    groups[t] = [n];
                }
                var s = item.data.source;
                if (!groups[s]) {
                    var n = new _models__WEBPACK_IMPORTED_MODULE_6__["GraphItem"]();
                    n.data.id = s;
                    n.data.label = s;
                    n.data.type = "Generated";
                    g.push(n);
                    groups[s] = [n];
                }
            }
        });
        // Now fix all the ids so they are valid
        g.forEach(function (item) {
            item.data.id = DataService_1.valid(item.data.id);
            if (item.group == "edges") {
                item.data.target = item.data.to = DataService_1.valid(item.data.target);
                item.data.source = item.data.from = DataService_1.valid(item.data.source);
                item.data.version = item.data.label;
            }
            else {
                if (item.data.parent) {
                    var parent_1 = _this.makeIfNeeded(item.data.parent);
                    _this.addEdge(item.data.parent, item.data.id, "Parent");
                    item.data.parent = undefined;
                }
            }
        });
    };
    var DataService_1;
    DataService = DataService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angular_2_local_storage__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], DataService);
    return DataService;
}());

var Zipped = /** @class */ (function () {
    function Zipped() {
        this.dbs = new Array();
        this.repos = new Array();
    }
    return Zipped;
}());
var NameValue = /** @class */ (function () {
    function NameValue() {
    }
    return NameValue;
}());
var Util = /** @class */ (function () {
    function Util() {
    }
    return Util;
}());


/***/ }),

/***/ "./src/app/dependency-graph/dependency-graph.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/dependency-graph/dependency-graph.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full {\r\n  height: 100%;\r\n  width: 100%;\r\n  min-height: 400px;\r\n  min-width: 400px;\r\n}\r\n\r\n.library {\r\n  background-color: yellow\r\n}\r\n\r\n.check {\r\n  margin-left: -24px\r\n}\r\n\r\n.gutter {\r\n  padding-left: 1.75rem\r\n}\r\n\r\n.navigator {\r\n  display: block;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  min-width: 200px;\r\n  min-height: 150px;\r\n  overflow: hidden;\r\n  box-shadow: 10px 10px 10px #888888;\r\n  outline: #ffffff solid thick;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n"

/***/ }),

/***/ "./src/app/dependency-graph/dependency-graph.component.html":
/*!******************************************************************!*\
  !*** ./src/app/dependency-graph/dependency-graph.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4> Network Graph</h4>\n\n<span>Layout </span>\n\n<div class=\"btn-group btn-group-sm  mb-1 \" role=\"group\" aria-label=\"Button group with nested dropdown\">\n  <div class=\"btn-group btn-group-sm\" role=\"group\">\n    <div ngbDropdown class=\"d-inline-block\">\n      <button class=\"btn btn-secondary btn-sm\" id=\"ddCog2\" ngbDropdownToggle>{{layout.name}}</button>\n      <div ngbDropdownMenu aria-labelledby=\"ddCog2\">\n        <button class=\"dropdown-item gutter\" *ngFor=\"let l of layoutChoices\" (click)=\"setLayout(l)\"><i class=\"fa fa-check fa-fw check\" *ngIf=\"l == layout\"></i> {{l.name}}</button>\n      </div>\n    </div>\n  </div>\n  <button class=\"btn btn-secondary btn-sm\" (click)=\"update()\"><i class=\"fa fa-refresh\"></i></button>\n</div>\n\n<div class=\"btn-group btn-group-sm mb-1 mr-auto\" role=\"group\" data-toggle=\"buttons\" *ngIf=\"large\">\n  <button class=\"btn btn-info btn-sm\" *ngFor=\"let t of types\" (click)=\"toggleFilter(t.value)\" [ngClass]=\"{'active': isFiltered(t.value)}\">{{t.label}}</button>\n</div>\n\n<div ngbDropdown class=\"d-inline-block\" *ngIf=\"!large\">\n  <button class=\"btn btn-sm btn-info mb-1\" id=\"dropdownBasic1\" ngbDropdownToggle><i class=\"fa fa-filter\"></i> Types</button>\n  <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n    <button class=\"dropdown-item gutter\" *ngFor=\"let t of types\" (click)=\"toggleFilter(t)\"><i class=\"fa fa-check fa-fw check\" *ngIf=\"isFiltered(t)\"></i>{{t}}</button>\n  </div>\n</div>\n\n<div ngbDropdown class=\"d-inline-block\">\n  <button class=\"btn btn-secondary btn-sm  mb-1 \" id=\"ddCog\" ngbDropdownToggle><i class=\"fa fa-cog\"></i></button>\n  <div ngbDropdownMenu aria-labelledby=\"ddCog\">\n    <button class=\"dropdown-item gutter\" (click)=\"toggleAuto()\"><i class=\"fa fa-check  fa-fw check\" *ngIf=\"prefs.autoLayout\"></i> Auto Layout</button>\n    <button class=\"dropdown-item gutter\" (click)=\"toggleNav()\" *ngIf=\"large\"><i class=\"fa fa-check fa-fw check\" *ngIf=\"prefs.showNavigator\"></i> Navigator</button>\n    <button class=\"dropdown-item gutter\" (click)=\"toggleZoom()\" *ngIf=\"large\"><i class=\"fa fa-check fa-fw check\" *ngIf=\"prefs.showZoom\"></i> Zoom / Pan Controls</button>\n    <button class=\"dropdown-item gutter\" (click)=\"toggleVersion()\"><i class=\"fa fa-check fa-fw check\" *ngIf=\"prefs.showVersion\"></i> Version Information</button>\n    <button class=\"dropdown-item gutter\" (click)=\"toggleArrows()\"><i class=\"fa fa-check fa-fw check\" *ngIf=\"prefs.showArrows\"></i> Dependency Arrows</button>\n    <button class=\"dropdown-item gutter\" (click)=\"toggleSized()\"><i class=\"fa fa-check fa-fw check\" *ngIf=\"prefs.sized\"></i> Size Based on Dependencies</button>\n\n    <div class=\"dropdown-divider dropdown-provider-override\"></div>\n    <button class=\"dropdown-item gutter\" (click)=\"setSelectPref('neighborhood')\"><i class=\"fa fa-check fa-fw check\" *ngIf=\"prefs.select=='neighborhood'\"></i> 1st Level Incoming and Outgoing</button>\n    <button class=\"dropdown-item gutter\" (click)=\"setSelectPref('incomers')\"><i class=\"fa fa-check fa-fw check\" *ngIf=\"prefs.select=='incomers'\"></i> 1st Level Incoming</button>\n    <button class=\"dropdown-item gutter\" (click)=\"setSelectPref('outgoers')\"><i class=\"fa fa-check fa-fw check\" *ngIf=\"prefs.select=='outgoers'\"></i> 1st Level Outgoing</button>\n    <button class=\"dropdown-item gutter\" (click)=\"setSelectPref('big-neighborhood')\"><i class=\"fa fa-check fa-fw check\" *ngIf=\"prefs.select=='big-neighborhood'\"></i> All Incoming and Outgoing</button>\n    <button class=\"dropdown-item gutter\" (click)=\"setSelectPref('successors')\"><i class=\"fa fa-check fa-fw check\" *ngIf=\"prefs.select=='successors'\"></i> All Incoming</button>\n    <button class=\"dropdown-item gutter\" (click)=\"setSelectPref('predessors')\"><i class=\"fa fa-check fa-fw check\" *ngIf=\"prefs.select=='predessors'\"></i> All Outgoing</button>\n\n    <div class=\"dropdown-divider dropdown-provider-override\"></div>\n\n    <button class=\"dropdown-item gutter\" (click)=\"resetPreferences()\"> Reset Preferences</button>\n  </div>\n</div>\n\n<div>\n  <div class=\"full\" #drawingArea>\n    <div class=\"navigator\" #navigator [ngClass]=\"{'hidden': large?!prefs.showNavigator:true}\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dependency-graph/dependency-graph.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dependency-graph/dependency-graph.component.ts ***!
  \****************************************************************/
/*! exports provided: DependencyGraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DependencyGraphComponent", function() { return DependencyGraphComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/dist/index.js");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular_2_local_storage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles */ "./src/app/styles.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DependencyGraphComponent = /** @class */ (function () {
    function DependencyGraphComponent(dataSvc, localStorage) {
        var _this = this;
        this.dataSvc = dataSvc;
        this.localStorage = localStorage;
        this.LOCAL_STORAGE_KEY = "DependencyGraphComponent.PREFS";
        this.large = true;
        this.styles = new _styles__WEBPACK_IMPORTED_MODULE_3__["Styles"]();
        this.layoutChoices = [
            { name: "Breadth First", value: "breadthfirst" },
            { name: "Circle", value: "circle" },
            { name: "Concentric", value: "concentric" },
            { name: "COSE", value: "cose" },
            { name: "Directed Graph", value: "dagre" },
            { name: "Grid", value: "grid" }
        ];
        this.types = [];
        this.layout = this.layoutChoices[2];
        this.prefs = new Prefs();
        // Read Prefereces
        var str = this.localStorage.get(this.LOCAL_STORAGE_KEY);
        if (str) {
            this.prefs = JSON.parse(str);
            if (this.prefs.layoutChoice >= 0) {
                this.layout = this.layoutChoices[this.prefs.layoutChoice];
            }
        }
        // Monitor ScreenSize
        var mq = window.matchMedia("(min-width: 992px)");
        this.large = mq.matches;
        mq.addListener(function (newMatch) {
            _this.large = newMatch.matches;
            _this.updateForMedia();
        });
        this.types = this.dataSvc.nodeTypes;
    }
    //STUPID, STUPID, STUPID
    DependencyGraphComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.resize()) {
                _this.update();
                setTimeout(function () {
                    if (_this.resize()) {
                        _this.update();
                    }
                }, 1000);
            }
        }, 300);
    };
    DependencyGraphComponent.prototype.onResize = function (event) {
        // let windowH = event.target.innerHeight
        // var rect = this.drawingArea.nativeElement.getBoundingClientRect();
        // this.drawingArea.nativeElement.style.height = (windowH - rect.top - 10) + "px"
        this.resize();
    };
    DependencyGraphComponent.prototype.resize = function () {
        // Resize the main window
        var rect = this.drawingArea.nativeElement.getBoundingClientRect();
        var windowH = window.innerHeight;
        var newH = windowH - rect.top - 10;
        if (newH == this.drawingArea.nativeElement.style.height) {
            // nochange
            return false;
        }
        else {
            this.drawingArea.nativeElement.style.height =
                windowH - rect.top - 10 + "px";
            var r2 = this.drawingArea.nativeElement.getBoundingClientRect();
            var aspect = r2.width / r2.height;
            var navH = 100;
            var navW = navH * aspect;
            this.navigator.nativeElement.style.height = navH + 6 + "px";
            this.navigator.nativeElement.style.width = navW + "px";
            return true;
        }
    };
    DependencyGraphComponent.prototype.isLayout = function (layout) {
        return this.layout.value == layout.value;
    };
    DependencyGraphComponent.prototype.isFiltered = function (l) {
        return lodash__WEBPACK_IMPORTED_MODULE_4__["includes"](this.prefs.filtered, l);
    };
    DependencyGraphComponent.prototype.setLayout = function (newLayout) {
        this.layout = newLayout;
        this.prefs.layoutChoice = lodash__WEBPACK_IMPORTED_MODULE_4__["indexOf"](this.layoutChoices, newLayout);
        this.savePrefs();
        this.update();
    };
    DependencyGraphComponent.prototype.setSelectPref = function (p) {
        this.prefs.select = p;
        this.update();
    };
    DependencyGraphComponent.prototype.update = function () {
        var layoutOptions = {
            name: this.layout.value,
            nodeSpacing: 5,
            minNodeSpacing: 30,
            edgeLengthVal: 45,
            animate: true
        };
        this.getActiveEles()
            .layout(layoutOptions)
            .run();
    };
    DependencyGraphComponent.prototype.toggleSized = function () {
        this.prefs.sized = !this.prefs.sized;
        this.updateSized();
    };
    DependencyGraphComponent.prototype.updateSized = function () {
        if (this.prefs.sized) {
            this.cy.nodes().addClass("sized");
        }
        else {
            this.cy.nodes().removeClass("sized");
        }
    };
    DependencyGraphComponent.prototype.toggleAuto = function () {
        this.prefs.autoLayout = !this.prefs.autoLayout;
        this.savePrefs();
        this.update();
    };
    DependencyGraphComponent.prototype.toggleNav = function () {
        this.prefs.showNavigator = !this.prefs.showNavigator;
        this.savePrefs();
    };
    DependencyGraphComponent.prototype.toggleVersion = function () {
        this.prefs.showVersion = !this.prefs.showVersion;
        this.savePrefs();
        this.updateVersion();
    };
    DependencyGraphComponent.prototype.updateVersion = function () {
        if (this.prefs.showVersion) {
            this.cy.edges().addClass("version");
        }
        else {
            this.cy.edges().removeClass("version");
        }
    };
    DependencyGraphComponent.prototype.toggleArrows = function () {
        this.prefs.showArrows = !this.prefs.showArrows;
        this.savePrefs();
        this.updateArrows();
    };
    DependencyGraphComponent.prototype.updateArrows = function () {
        if (this.prefs.showArrows) {
            this.cy.edges().addClass("arrow");
        }
        else {
            this.cy.edges().removeClass("arrow");
        }
    };
    DependencyGraphComponent.prototype.toggleFilter = function (t) {
        // Toggle the filter
        var len = this.prefs.filtered.length;
        var success = lodash__WEBPACK_IMPORTED_MODULE_4__["pull"](this.prefs.filtered, t);
        if (success.length == len) {
            this.prefs.filtered.push(t);
        }
        this.savePrefs();
        this.updateFilters();
        this.update();
    };
    DependencyGraphComponent.prototype.updateFilters = function () {
        var _this = this;
        this.cy.batch(function () {
            _this.cy.nodes().forEach(function (p) {
                var n = p._private;
                var type = n.data["type"];
                p.removeClass("filtered");
                if (lodash__WEBPACK_IMPORTED_MODULE_4__["includes"](_this.prefs.filtered, type)) {
                    p.addClass("filtered");
                }
            });
        });
    };
    DependencyGraphComponent.prototype.highlight = function (node) {
        var _this = this;
        var keep;
        var selector = "#" + node.id();
        if (this.prefs.select == "neighborhood") {
            keep = node.closedNeighborhood();
        }
        else if (this.prefs.select == "incomers") {
            keep = this.cy.nodes(selector).incomers();
        }
        else if (this.prefs.select == "outgoers") {
            keep = this.cy.nodes(selector).outgoers();
        }
        else if (this.prefs.select == "successors") {
            keep = this.cy.nodes(selector).successors();
        }
        else if (this.prefs.select == "predecessors") {
            keep = this.cy.nodes(selector).predecessors();
        }
        else if (this.prefs.select == "bog-neighborhood") {
            keep = this.cy
                .nodes(selector)
                .predecessors()
                .union(this.cy.nodes(selector).successors());
        }
        if (keep == undefined) {
            console.log("Bad Selection " + this.prefs.select + " or BAD Selector " + selector);
            keep = node.closedNeighborhood();
        }
        var others = this.cy.elements().not(keep);
        console.log("Results KEEP=" + keep.length + " OUT=" + others.length);
        this.cy.batch(function () {
            others.addClass("hidden");
            keep.removeClass("hidden");
            _this.cy.edges().removeClass("hidden");
            node.removeClass("hidden");
            _this.update();
        });
    };
    DependencyGraphComponent.prototype.ngOnDestroy = function () {
        this.cy.destroy();
    };
    DependencyGraphComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Setup Cy
        this.cy = cytoscape({
            container: this.drawingArea.nativeElement,
            style: this.styles.styles,
            wheelSensitivity: 0.2
        });
        this.setUpExtensions();
        this.setUpEvents();
        // Add the nodes
        this.dataSvc.getDb().subscribe(function (db) {
            _this.db = db;
            if (db.graph) {
                // Add the nodes
                db.graph.forEach(function (i) {
                    _this.cy.add(i);
                });
                var max = 1;
                _this.cy.nodes().forEach(function (p) {
                    var n = p._private;
                    var id = n.data["id"];
                    var l = p.connectedEdges().length;
                    n.data.degree = l;
                    max = Math.max(max, l);
                });
                _this.styles.setMaxSize(max);
                _this.cy.style(_this.styles.styles);
                _this.updateSized();
                _this.updateArrows();
                _this.updateVersion();
                // Layout
                _this.update();
                _this.cy.fit();
            }
        });
    };
    DependencyGraphComponent.prototype.updateForMedia = function () {
        if (!this.large) {
            this.cyZoom.hidden = true;
        }
        else {
            this.cyZoom.hidden = !this.prefs.showZoom;
        }
    };
    DependencyGraphComponent.prototype.toggleZoom = function () {
        this.prefs.showZoom = !this.prefs.showZoom;
        this.savePrefs();
        this.updateForMedia();
    };
    DependencyGraphComponent.prototype.setUpExtensions = function () {
        // Setup Extensions
        var pzdefaults = {};
        this.cy.panzoom(pzdefaults);
        // this.cyZoom = this.drawingArea.nativeElement.
        this.cyZoom = document.getElementsByClassName("cy-panzoom").item(0);
        this.updateForMedia();
        var navDefaults = { container: this.navigator.nativeElement };
        this.cy.navigator(navDefaults);
    };
    DependencyGraphComponent.prototype.setUpEvents = function () {
        var _this = this;
        this.cy.on("tap", "node", function (evt) {
            var _id = evt.target.id();
            var t = evt.target;
            _this.highlight(t);
        });
        this.cy.on("tap", "edge", function (evt) {
            var _id = evt.target.id();
        });
        this.cy.on("taphold", "node", function (evt) {
            var _id = evt.target.id();
            var t = evt.target;
        });
        this.cy.on("unselect", "node", function (evt) {
            _this.cy.batch(function () {
                _this.cy.elements().removeClass("hidden");
                _this.update();
            });
        });
    };
    DependencyGraphComponent.prototype.debug = function (obj) {
        var keys = Object.keys(obj);
        keys.forEach(function (k) {
            console.log(k);
        });
    };
    DependencyGraphComponent.prototype.getActiveEles = function () {
        if (this.prefs.autoLayout) {
            return this.cy
                .elements()
                .not(".filtered")
                .not(".hidden");
        }
        else {
            return this.cy.elements();
        }
    };
    DependencyGraphComponent.prototype.savePrefs = function () {
        var str = JSON.stringify(this.prefs);
        this.localStorage.set(this.LOCAL_STORAGE_KEY, str);
    };
    DependencyGraphComponent.prototype.resetPreferences = function () {
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
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("drawingArea"),
        __metadata("design:type", Object)
    ], DependencyGraphComponent.prototype, "drawingArea", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("navigator"),
        __metadata("design:type", Object)
    ], DependencyGraphComponent.prototype, "navigator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("window:resize", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DependencyGraphComponent.prototype, "onResize", null);
    DependencyGraphComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-dependency-graph",
            template: __webpack_require__(/*! ./dependency-graph.component.html */ "./src/app/dependency-graph/dependency-graph.component.html"),
            styles: [__webpack_require__(/*! ./dependency-graph.component.css */ "./src/app/dependency-graph/dependency-graph.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            angular_2_local_storage__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]])
    ], DependencyGraphComponent);
    return DependencyGraphComponent;
}());

var Prefs = /** @class */ (function () {
    function Prefs() {
        this.layoutChoice = 2;
        this.showNavigator = true;
        this.showZoom = true;
        this.autoLayout = true;
        this.showArrows = true;
        this.showVersion = true;
        this.sized = false;
        this.select = "neighborhood";
        this.filtered = [""];
    }
    return Prefs;
}());


/***/ }),

/***/ "./src/app/dependency-matrix/dependency-matrix.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/dependency-matrix/dependency-matrix.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table.matrix {\r\n  border-spacing: 2px;\r\n  border-color: grey;\r\n}\r\n\r\ntd.matrix_left {\r\n  border: 1px solid black;\r\n  text-align: right;\r\n  padding: 5px 10px;\r\n  border: 1px solid #ccc;\r\n  white-space: nowrap;\r\n}\r\n\r\ntd.matrix {\r\n  border: 1px solid black;\r\n  width: 40px;\r\n  text-align: center;\r\n  padding: 0px;\r\n  border: 1px solid #ccc;\r\n}\r\n\r\nth.rotate {\r\n  font-weight: normal;\r\n  height: 180px;\r\n  white-space: nowrap;\r\n}\r\n\r\nth.rotate>div {\r\n  -webkit-transform: /* Magic Numbers  height-110*/\r\n  translate(24px, 70px)\r\n  /* 45 is really 360 - 45 */\r\n  rotate(315deg);\r\n          transform: /* Magic Numbers  height-110*/\r\n  translate(24px, 70px)\r\n  /* 45 is really 360 - 45 */\r\n  rotate(315deg);\r\n  width: 30px;\r\n}\r\n\r\nth.rotate>div>span {\r\n  border-bottom: 1px solid #ccc;\r\n  padding: 5px 10px;\r\n  display: inline-block;\r\n  width: 200px;\r\n}\r\n\r\nth.rotate>div>span:hover {\r\n  background-color: #eee;\r\n  cursor: pointer;\r\n}\r\n\r\ntd:hover {\r\n  background-color: #eee;\r\n  cursor: pointer;\r\n}\r\n\r\n.check {\r\n  margin-left: -24px\r\n}\r\n\r\n.gutter {\r\n  padding-left: 1.75rem\r\n}\r\n\r\n.filled {\r\n  background-color: #ccc\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.version {\r\n  font-size: 8pt;\r\n  text-shadow: -1px -1px 0 #ffffff, 1px -1px 0 #ffffff, -1px 1px 0 #ffffff, 1px 1px 0 #ffffff;\r\n}\r\n"

/***/ }),

/***/ "./src/app/dependency-matrix/dependency-matrix.component.html":
/*!********************************************************************!*\
  !*** ./src/app/dependency-matrix/dependency-matrix.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4> Dependency Matrix</h4>\n\n<span>Rows </span>\n<div class=\"btn-group btn-group-sm  mb-1 \" role=\"group\" aria-label=\"Button group with nested dropdown\">\n  <div ngbDropdown class=\"d-inline-block\">\n    <button class=\"btn btn-secondary btn-sm\" id=\"ddCog2\" ngbDropdownToggle>{{prefs.xAxis|nodetypelabel}}</button>\n    <div ngbDropdownMenu aria-labelledby=\"ddCog2\">\n      <button class=\"dropdown-item gutter\" *ngFor=\"let l of types\" (click)=\"setX(l.value)\"><i class=\"fa fa-check fa-fw check\" *ngIf=\"l.value == xAxis\"></i> {{l.label}}</button>\n    </div>\n  </div>\n</div>\n\n<span>Columns </span>\n<div class=\"btn-group btn-group-sm  mb-1 \" role=\"group\" aria-label=\"Button group with nested dropdown\">\n  <div ngbDropdown class=\"d-inline-block\">\n    <button class=\"btn btn-secondary btn-sm\" id=\"ddCog2\" ngbDropdownToggle>{{prefs.yAxis|nodetypelabel}}</button>\n    <div ngbDropdownMenu aria-labelledby=\"ddCog2\">\n      <button class=\"dropdown-item gutter\" *ngFor=\"let l of types\" (click)=\"setY(l.value)\"><i class=\"fa fa-check fa-fw check\" *ngIf=\"l.value == yAxis\"></i> {{l.label}}</button>\n    </div>\n  </div>\n</div>\n\n<div class=\"btn-group btn-group-sm mb-1\" role=\"group\" data-toggle=\"buttons\">\n  <button [disabled]=\"!selected\" class=\"btn btn-secondary btn-sm \" (click)=\"edit()\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> Edit </button>\n  <button class=\"btn btn-sm btn-secondary \" (click)=\"newItem()\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i> New Item</button>\n  <button class=\"btn btn-sm btn-secondary \" (click)=\"newEdge()\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i> New Link</button>\n</div>\n\n<div ngbDropdown class=\"d-inline-block\">\n  <button class=\"btn btn-secondary btn-sm  mb-1 \" id=\"ddCog\" ngbDropdownToggle><i class=\"fa fa-cog\"></i></button>\n  <div ngbDropdownMenu aria-labelledby=\"ddCog\">\n    <button class=\"dropdown-item gutter\" (click)=\"toggleVersion()\"><i class=\"fa fa-check fa-fw check\" *ngIf=\"prefs.showVersion\"></i> Version Information</button>\n    <div class=\"dropdown-divider dropdown-provider-override\"></div>\n    <button class=\"dropdown-item gutter\" (click)=\"resetPreferences()\"> Reset Preferences</button>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-lg-9\">\n    <table class=\"matrix\">\n      <tr>\n        <th class=\"matrix\"> </th>\n        <th *ngFor=\"let yHeader of yHeaders\" class=\"matrix rotate\">\n          <div><span (click)=\"select(yHeader)\">{{yHeader.display}}</span></div>\n        </th>\n      </tr>\n      <tr *ngFor=\"let xHeader of xHeaders; let row = index\">\n        <td class=\"matrix_left\" (click)=\"select(xHeader)\">{{xHeader.display}}</td>\n        <td *ngFor=\"let yHeader of yHeaders; let col = index\" class=\"matrix item\" (click)=\"select(cells[row][col])\" [ngClass]=\"{'filled': xHeader.value == yHeader.value}\"><i class=\"fa fa-fw {{cells[row][col].direction}}\"></i><br /> <span class=\"version\" *ngIf=\"prefs.showVersion\">{{cells[row][col].version}}</span></td>\n      </tr>\n    </table>\n  </div>\n  <div class=\"col-lg-3\" *ngIf=\"large\">\n    <div class=\" sticky-top\">\n      <app-view [item]=\"selected\"></app-view>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dependency-matrix/dependency-matrix.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/dependency-matrix/dependency-matrix.component.ts ***!
  \******************************************************************/
/*! exports provided: DependencyMatrixComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DependencyMatrixComponent", function() { return DependencyMatrixComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/dist/index.js");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular_2_local_storage__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DependencyMatrixComponent = /** @class */ (function () {
    function DependencyMatrixComponent(dataSvc, localStorage, router) {
        var _this = this;
        this.dataSvc = dataSvc;
        this.localStorage = localStorage;
        this.router = router;
        this.LOCAL_STORAGE_KEY = "DependencyMatrixComponent.PREFS";
        this.prefs = new Prefs();
        this.xHeaders = new Array();
        this.yHeaders = new Array();
        this.cells = new Array();
        this.large = true;
        // Load Preferences 
        var str = this.localStorage.get(this.LOCAL_STORAGE_KEY);
        if (str) {
            this.prefs = JSON.parse(str);
        }
        // Monitor ScreenSize
        var mq = window.matchMedia("(min-width: 992px)");
        this.large = mq.matches;
        mq.addListener(function (newMatch) {
            _this.large = newMatch.matches;
        });
        // Init Cytoscape engine
        this.cy = cytoscape({
            headless: true,
            styleEnabled: false,
        });
        // Get the data
        this.dataSvc.getDb().subscribe(function (db) {
            _this.db = db;
            _this.types = _this.db.structure.nodeTypes;
            if (db.graph) {
                // Add the nodes
                db.graph.forEach(function (i) {
                    _this.cy.add(i);
                });
                _this.generate();
            }
        });
    }
    DependencyMatrixComponent.prototype.ngOnInit = function () {
    };
    DependencyMatrixComponent.prototype.view = function (r) {
        if (r) {
            this.router.navigate(['/view', r.item.data.id]);
        }
        if (this.selected) {
            this.router.navigate(['/view', this.selected.data.id]);
        }
    };
    DependencyMatrixComponent.prototype.newItem = function () {
        this.router.navigate(['/edit']);
    };
    DependencyMatrixComponent.prototype.newEdge = function () {
        this.router.navigate(['/edit_edge']);
    };
    DependencyMatrixComponent.prototype.setY = function (y) {
        this.prefs.yAxis = y;
        this.savePrefs();
        this.generate();
    };
    DependencyMatrixComponent.prototype.setX = function (x) {
        this.prefs.xAxis = x;
        this.savePrefs();
        this.generate();
    };
    DependencyMatrixComponent.prototype.generate = function () {
        // Get the unique
        this.xHeaders = this.getHeaders(this.prefs.xAxis);
        this.yHeaders = this.getHeaders(this.prefs.yAxis);
        // Get the cells
        var cells = new Array();
        for (var row = 0; row < this.xHeaders.length; row++) {
            cells[row] = [];
            for (var col = 0; col < this.yHeaders.length; col++) {
                var x = this.xHeaders[row];
                var y = this.yHeaders[col];
                var c = this.getCell(x.value, y.value);
                // cells.push(c)
                cells[row][col] = c;
            }
        }
        this.cells = cells;
    };
    DependencyMatrixComponent.prototype.getCell = function (xAxis, yAxis) {
        var nodex = this.cy.getElementById(xAxis);
        var nodey = this.cy.getElementById(yAxis);
        if (nodex && nodey) {
            var outgoers = nodex.edgesTo('#' + yAxis);
            var incoming = nodey.edgesTo('#' + xAxis);
            // let incoming = nodex.incomers('#' + yAxis)
            // let outgoers = nodex.outgoers('#' + yAxis)
            var left = false;
            var top_1 = false;
            var val = new Cell();
            if (incoming && incoming.length > 0) {
                top_1 = true;
                val.direction = "fa-arrow-left";
                var n = incoming[0]._private;
                val.version = n.data.version;
                val.value = n.data.id;
            }
            if (outgoers && outgoers.length > 0) {
                left = true;
                val.direction = "fa-arrow-up";
                var n = outgoers[0]._private;
                val.version = n.data.version;
                val.value = n.data.id;
            }
            if (left && top_1) {
                val.direction = "fa-arrow-up";
            }
            return val;
        }
        else {
            return new Cell();
        }
    };
    DependencyMatrixComponent.prototype.getHeaders = function (type) {
        var all = new Array();
        var selector = 'node[type=\"' + type + '\"]';
        var items = this.cy.nodes(selector);
        items.forEach(function (p) {
            var n = p._private;
            var id = n.data['id'];
            var label = n.data.label;
            all.push({ display: label, value: id });
        });
        return all;
    };
    DependencyMatrixComponent.prototype.toggleVersion = function () {
        this.prefs.showVersion = !this.prefs.showVersion;
        this.savePrefs();
        this.updateVersion();
    };
    DependencyMatrixComponent.prototype.updateVersion = function () {
        //TODO
    };
    DependencyMatrixComponent.prototype.edit = function () {
        if (this.selected) {
            if (this.selected.group == 'nodes') {
                this.router.navigate(['/edit', this.selected.data.id]);
            }
            else {
                this.router.navigate(['/edit_edge', this.selected.data.id]);
            }
        }
    };
    DependencyMatrixComponent.prototype.select = function (me) {
        console.log("Selecting " + me.value);
        var item = this.dataSvc.findItem(me.value);
        console.log("FOUND = " + item);
        this.selected = item;
    };
    DependencyMatrixComponent.prototype.savePrefs = function () {
        var str = JSON.stringify(this.prefs);
        this.localStorage.set(this.LOCAL_STORAGE_KEY, str);
    };
    DependencyMatrixComponent.prototype.resetPreferences = function () {
        this.prefs = new Prefs();
    };
    DependencyMatrixComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dependency-matrix',
            template: __webpack_require__(/*! ./dependency-matrix.component.html */ "./src/app/dependency-matrix/dependency-matrix.component.html"),
            styles: [__webpack_require__(/*! ./dependency-matrix.component.css */ "./src/app/dependency-matrix/dependency-matrix.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], angular_2_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], DependencyMatrixComponent);
    return DependencyMatrixComponent;
}());

var Prefs = /** @class */ (function () {
    function Prefs() {
        this.showVersion = true;
        this.xAxis = "process";
        this.yAxis = "process";
    }
    return Prefs;
}());
var Pair = /** @class */ (function () {
    function Pair() {
    }
    return Pair;
}());
var Cell = /** @class */ (function () {
    function Cell() {
    }
    return Cell;
}());


/***/ }),

/***/ "./src/app/dependency-table/dependency-table.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/dependency-table/dependency-table.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dependency-table/dependency-table.component.html":
/*!******************************************************************!*\
  !*** ./src/app/dependency-table/dependency-table.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-table [config]=\"config\" (tableChanged)=\"onChangeTable(config)\" (cellClicked)=\"onCellClick($event)\" [rows]=\"rows\" [columns]=\"columns\">\n</ng-table>\n"

/***/ }),

/***/ "./src/app/dependency-table/dependency-table.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dependency-table/dependency-table.component.ts ***!
  \****************************************************************/
/*! exports provided: DependencyTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DependencyTableComponent", function() { return DependencyTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/dist/index.js");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular_2_local_storage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DependencyTableComponent = /** @class */ (function () {
    function DependencyTableComponent(dataSvc, localStorage) {
        var _this = this;
        this.dataSvc = dataSvc;
        this.localStorage = localStorage;
        this.dependencyType = "predecessors";
        this._items = new Array();
        this._filters = new Array();
        this.predecessors = [];
        this.successors = [];
        this.rows = [];
        this.columns = [
            {
                title: 'Name',
                name: 'id',
                filtering: { filterString: '', placeholder: 'Filter by name' }
            },
            {
                title: 'Type',
                name: 'type',
                filtering: { filterString: '', placeholder: 'Filter by component' }
            },
            {
                title: 'Version',
                name: 'version',
                filtering: { filterString: '', placeholder: 'Filter by source' }
            }
        ];
        this.config = {
            paging: false,
            sorting: { columns: this.columns },
            filtering: { filterString: '' },
            className: ['table-striped', 'table-bordered']
        };
        // Init Cytoscape engine
        this.cy = cytoscape({
            headless: true,
            styleEnabled: false,
        });
        // Get the data
        this.dataSvc.getDb().subscribe(function (db) {
            _this.db = db;
            if (db.graph) {
                // Add the nodes
                db.graph.forEach(function (i) {
                    _this.cy.add(i);
                });
                _this.generate();
            }
        });
    }
    Object.defineProperty(DependencyTableComponent.prototype, "items", {
        set: function (newItems) {
            this._items = newItems;
            this.generate();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DependencyTableComponent.prototype, "filters", {
        set: function (filters) {
            this._filters = filters;
            this.generate();
        },
        enumerable: true,
        configurable: true
    });
    DependencyTableComponent.prototype.ngOnChanges = function (changes) {
        this.generate();
    };
    DependencyTableComponent.prototype.ngOnInit = function () {
        this.onChangeTable(this.config);
    };
    DependencyTableComponent.prototype.changePage = function (page, data) {
        // let start = (page.page - 1) * page.itemsPerPage;
        // let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
        // return data.slice(start, end);
        return null;
    };
    DependencyTableComponent.prototype.changeSort = function (data, config) {
        if (!config.sorting) {
            return data;
        }
        var columns = this.config.sorting.columns || [];
        var columnName = void 0;
        var sort = void 0;
        for (var i = 0; i < columns.length; i++) {
            if (columns[i].sort !== '' && columns[i].sort !== false) {
                columnName = columns[i].name;
                sort = columns[i].sort;
            }
        }
        if (!columnName) {
            return data;
        }
        // simple sorting
        return data.sort(function (previous, current) {
            if (previous[columnName] > current[columnName]) {
                return sort === 'desc' ? -1 : 1;
            }
            else if (previous[columnName] < current[columnName]) {
                return sort === 'asc' ? -1 : 1;
            }
            return 0;
        });
    };
    DependencyTableComponent.prototype.changeFilter = function (data, config) {
        var _this = this;
        var filteredData = data;
        this.columns.forEach(function (column) {
            if (column.filtering) {
                filteredData = filteredData.filter(function (item) {
                    if (item[column.name]) {
                        return item[column.name].match(column.filtering.filterString);
                    }
                    console.log("OOPS " + column.name);
                    return true;
                });
            }
        });
        if (!config.filtering) {
            return filteredData;
        }
        if (config.filtering.columnName) {
            return filteredData.filter(function (item) {
                if (item[config.filtering.columnName]) {
                    item[config.filtering.columnName].match(_this.config.filtering.filterString);
                }
            });
        }
        var tempArray = [];
        filteredData.forEach(function (item) {
            var flag = false;
            _this.columns.forEach(function (column) {
                if (item[column.name] && item[column.name].toString().match(_this.config.filtering.filterString)) {
                    flag = true;
                }
            });
            if (flag) {
                tempArray.push(item);
            }
        });
        filteredData = tempArray;
        return filteredData;
    };
    DependencyTableComponent.prototype.onChangeTable = function (config, page) {
        if (page === void 0) { page = {}; }
        if (config.filtering) {
            Object.assign(this.config.filtering, config.filtering);
        }
        if (config.sorting) {
            Object.assign(this.config.sorting, config.sorting);
        }
        if (this.predecessors) {
            var filteredData = this.changeFilter(this.predecessors, this.config);
            var sortedData = this.changeSort(filteredData, this.config);
            this.rows = sortedData;
        }
    };
    DependencyTableComponent.prototype.onCellClick = function (data) {
        console.log("clicked " + JSON.stringify(data));
    };
    DependencyTableComponent.prototype.onAdd = function ($event) {
        this.generate();
    };
    DependencyTableComponent.prototype.onRemove = function ($event) {
        this.generate();
    };
    DependencyTableComponent.prototype.generate = function () {
        var _this = this;
        // quick out
        if (this._items.length == 0) {
            this.predecessors = [];
            this.onChangeTable(this.config);
            return;
        }
        var mine = [];
        this._items.forEach(function (i) {
            mine.push('#' + i);
        });
        var selector = mine.join(',');
        console.log("SELECTOR " + selector);
        var preds;
        if (this.dependencyType == 'predecessors') {
            preds = this.cy.nodes(selector).predecessors();
        }
        else if (this.dependencyType == 'successors') {
            preds = this.cy.nodes(selector).successors();
        }
        else if (this.dependencyType == 'incomers') {
            preds = this.cy.nodes(selector).incomers();
        }
        else if (this.dependencyType == 'outgoers') {
            preds = this.cy.nodes(selector).outgoers();
        }
        var newPreds = [];
        preds.forEach(function (p) {
            var n = p._private;
            if (n.group == 'nodes') {
                if (!lodash__WEBPACK_IMPORTED_MODULE_3__["includes"](_this._filters, n.data.type)) {
                    var item = {
                        id: n.data['id'],
                        type: n.data['type'],
                        version: n.data['version']
                    };
                    newPreds.push(item);
                }
            }
        });
        this.predecessors = newPreds;
        this.onChangeTable(this.config);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DependencyTableComponent.prototype, "dependencyType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], DependencyTableComponent.prototype, "items", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], DependencyTableComponent.prototype, "filters", null);
    DependencyTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dependency-table',
            template: __webpack_require__(/*! ./dependency-table.component.html */ "./src/app/dependency-table/dependency-table.component.html"),
            styles: [__webpack_require__(/*! ./dependency-table.component.css */ "./src/app/dependency-table/dependency-table.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], angular_2_local_storage__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]])
    ], DependencyTableComponent);
    return DependencyTableComponent;
}());



/***/ }),

/***/ "./src/app/edgelabel.pipe.ts":
/*!***********************************!*\
  !*** ./src/app/edgelabel.pipe.ts ***!
  \***********************************/
/*! exports provided: EdgelabelPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdgelabelPipe", function() { return EdgelabelPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EdgelabelPipe = /** @class */ (function () {
    function EdgelabelPipe() {
    }
    EdgelabelPipe.prototype.transform = function (value, args) {
        return null;
    };
    EdgelabelPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'edgelabel'
        })
    ], EdgelabelPipe);
    return EdgelabelPipe;
}());



/***/ }),

/***/ "./src/app/editor-edge/editor-edge.component.css":
/*!*******************************************************!*\
  !*** ./src/app/editor-edge/editor-edge.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/editor-edge/editor-edge.component.html":
/*!********************************************************!*\
  !*** ./src/app/editor-edge/editor-edge.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid sticky-top\">\n  <div class=\"row justify-content-end\">\n\n    <button class=\"btn btn-info btn-sm mr-1\" (click)=\"save()\" type=\"button\">\n                    <i class=\"fa fa-floppy-o\" aria-hidden=\"true\"> Save</i>\n                </button>\n    <button class=\"btn btn-secondary btn-sm\" (click)=\"cancel()\" type=\"button\">\n                    <i class=\"fa fa-ban\" aria-hidden=\"true\"> Cancel</i>\n                </button>\n  </div>\n</div>\n\n<h6 class=\"text-muted\">General Information</h6>\n\n<div class=\"form-row\">\n\n  <div class=\"form-group  col-md-4\">\n    <label for=\"label\" class=\"col-form-label\">Label</label>\n    <input name=\"label\" type=\"text\" class=\"form-control\" id=\"label\" aria-describedby=\"label\" placeholder=\"Label...\" [(ngModel)]=\"node.data.label\" (ngModelChange)=\"updateid()\">\n  </div>\n\n  <div class=\"form-group col-md-4\">\n    <label for=\"id\" class=\"col-form-label\">ID</label>\n    <div class=\"input-group\">\n      <input name=\"id\" type=\"text\" class=\"form-control\" id=\"id\" aria-describedby=\"id\" placeholder=\"Enter Valid ID\" [(ngModel)]=\"node.data.id\" >\n      <span class=\"input-group-btn\">\n            <button class=\"btn btn-secondary\" type=\"button\" (click)=\"randomId()\"><i class=\"fa fa-random\"></i></button>\n            <button class=\"btn btn-secondary\" type=\"button\" (click)=\"fixId()\"><i class=\"fa fa-check-circle\"></i></button>\n          </span>\n    </div>\n  </div>\n\n  <div class=\"form-group col-md-4\">\n    <label for=\"linkVersion\" class=\"col-form-label\">Version</label>\n    <input name=\"edgeVersion\" type=\"text\" class=\"form-control\" id=\"linkVersion\" placeholder=\"Version\" [(ngModel)]=\"node.data.version\">\n  </div>\n</div>\n<div class=\"form-row\">\n  <div class=\"form-group col-md-4\">\n    <label for=\"source\" class=\"col-form-label\">Source</label>\n    <input name=\"edgeSource \" type=\"text\" class=\"form-control\" id=\"source\" placeholder=\"Source\" [(ngModel)]=\"source\" [ngbTypeahead]=\"searchforIds\"\n      [resultTemplate]=\"rt\" [inputFormatter]=\"formatter\">\n  </div>\n\n  <div class=\"form-group col-md-4\">\n    <label for=\"linkType\" class=\"col-form-label\">Type</label>\n    <select name=\"edgeType\" class=\"form-control\" [(ngModel)]=\"node.data.type\">\n          <option value=\"dependency\">Depends On</option>\n          <option value=\"child\">Child Of</option>\n          <option value=\"parent\">Parent Of</option>\n    </select>\n  </div>\n\n  <div class=\"form-group col-md-4\">\n    <label for=\"target\" class=\"col-form-label\">Target</label>\n    <input name=\"edgeTarget \" type=\"text\" class=\"form-control\" id=\"target\" placeholder=\"Target\" [(ngModel)]=\"target\" [ngbTypeahead]=\"searchforIds\"\n      [resultTemplate]=\"rt\" [inputFormatter]=\"formatter\">\n  </div>\n\n\n</div>\n\n<div class=\"form-group\">\n  <label for=\"description\">Description</label>\n  <textarea name=\"description\" rows=\"4\" type=\"textarea\" class=\"form-control\" id=\"description\" aria-describedby=\"description\"\n    placeholder=\"Description...\" [(ngModel)]=\"node.data.description\"></textarea>\n</div>\n\n<!-- <h6 class=\"text-muted\">Scheduling</h6>\n\n<div class=\"form-row\">\n  <div class=\"form-group col-md-4\">\n    <label class=\"col-form-label\"> Status </label>\n    <div class=\"form-group\">\n      <label class=\"custom-control custom-radio\">\n        <input id=\"radio1\" name=\"radio\" type=\"radio\" class=\"custom-control-input\"  [(ngModel)]=\"node.data.status\" value=\"complete\">\n        <span class=\"custom-control-indicator\"></span>\n        <span class=\"custom-control-description\">Complete</span>\n    </label>\n      <label class=\"custom-control custom-radio\">\n        <input id=\"radio2\" name=\"radio\" type=\"radio\" class=\"custom-control-input\"   [(ngModel)]=\"node.data.status\" value=\"planned\">\n        <span class=\"custom-control-indicator\"></span>\n        <span class=\"custom-control-description\">In Work / Planned</span>\n      </label>\n    </div>\n  </div>\n  <div class=\"form-group col-md-4\">\n    <label for=\"name\" class=\"col-form-label\">Start Date</label>\n    <div class=\"input-group\">\n      <input name=\"planned_start_date\" class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" [(ngModel)]=\"node.data.start_date\"\n        ngbDatepicker #d=\"ngbDatepicker\">\n      <button class=\"input-group-addon\" (click)=\"d.toggle()\" type=\"button\">\n         <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n  </div>\n  <div class=\"form-group col-md-4\">\n    <label for=\"name\" class=\"col-form-label\">Finish Date</label>\n    <div class=\"input-group\">\n      <input name=\"planned_finish_date\" class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp2\" [(ngModel)]=\"node.data.finish_date\"\n        ngbDatepicker #d2=\"ngbDatepicker\">\n      <button class=\"input-group-addon\" (click)=\"d2.toggle()\" type=\"button\">\n           <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n        </button>\n    </div>\n  </div>\n</div>  -->\n\n<ng-template #rt let-r=\"result\" let-t=\"term\">\n  <span class=\"badge badge-secondary\">{{r.data.type}}</span> {{ r.data.label}} <span class=\"text-muted\">id: {{r.data.label}}</span>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/editor-edge/editor-edge.component.ts":
/*!******************************************************!*\
  !*** ./src/app/editor-edge/editor-edge.component.ts ***!
  \******************************************************/
/*! exports provided: EditorEdgeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorEdgeComponent", function() { return EditorEdgeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models */ "./src/app/models.ts");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-uuid */ "./node_modules/angular2-uuid/index.js");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_uuid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var holder = [];
var EditorEdgeComponent = /** @class */ (function () {
    function EditorEdgeComponent(route, db) {
        var _this = this;
        this.route = route;
        this.db = db;
        this.node = new _models__WEBPACK_IMPORTED_MODULE_3__["GraphItem"]();
        this.node.group = 'edges';
        var id = this.route.snapshot.paramMap.get('id');
        this.route.paramMap.subscribe(function (p) {
            var id = p.get("id");
            var node = _this.db.findItem(id);
            if (node) {
                console.log("SETTING NODE " + node.data.id);
                _this.original = node;
                var newOne = new _models__WEBPACK_IMPORTED_MODULE_3__["GraphItem"]();
                newOne.group = node.group;
                newOne.data = lodash__WEBPACK_IMPORTED_MODULE_5__["clone"](node.data);
                _this.node = newOne;
                _this.fillIn();
            }
        });
        holder[0] = this.db;
    }
    EditorEdgeComponent.prototype.ngOnInit = function () {
    };
    EditorEdgeComponent.prototype.updateid = function () {
        if (!this.original) {
            this.node.data.id = _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"].valid(this.node.data.label.toLowerCase());
        }
    };
    EditorEdgeComponent.prototype.fillIn = function () {
        var tgtId = this.node.data.target;
        if (tgtId) {
            this.target = this.db.getItem(tgtId);
        }
        var srcId = this.node.data.source;
        if (srcId) {
            this.source = this.db.getItem(srcId);
        }
    };
    EditorEdgeComponent.prototype.searchforIds = function (text) {
        return text
            .debounceTime(200)
            .distinctUntilChanged()
            .map(function (term) {
            return term.length < 2 ? []
                : holder[0].findAll2(term);
        });
    };
    EditorEdgeComponent.prototype.fixId = function () {
        this.node.data.id = _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"].valid(this.node.data.id);
    };
    EditorEdgeComponent.prototype.randomId = function () {
        this.node.data.id = angular2_uuid__WEBPACK_IMPORTED_MODULE_4__["UUID"].UUID();
    };
    EditorEdgeComponent.prototype.formatter = function (item) {
        return item.data.id;
    };
    EditorEdgeComponent.prototype.save = function () {
        if (this.node.data['start_date_obj']) {
            var dt = this.node.data['start_date_obj'];
            this.node.data.start_date = new Date(dt.day, dt.month, dt.year, 0, 0, 0, 0);
        }
        if (this.node.data['finish_date_obj']) {
            var dt = this.node.data['finish_date_obj'];
            this.node.data.start_date = new Date(dt.day, dt.month, dt.year, 0, 0, 0, 0);
        }
        // Fix the 
        if ((typeof this.target) == 'string') {
            this.node.data.target = this.target;
        }
        else {
            this.node.data.target = this.target.data.id;
        }
        if ((typeof this.source) == 'string') {
            this.node.data.source = this.source;
        }
        else {
            this.node.data.source = this.source.data.id;
        }
        if (this.original) {
            // EDIT
            this.original.data = this.node.data;
        }
        else {
            // NEW
            this.db.add(this.node);
        }
        window.history.back();
    };
    EditorEdgeComponent.prototype.cancel = function () {
        window.history.back();
    };
    EditorEdgeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editor-edge',
            template: __webpack_require__(/*! ./editor-edge.component.html */ "./src/app/editor-edge/editor-edge.component.html"),
            styles: [__webpack_require__(/*! ./editor-edge.component.css */ "./src/app/editor-edge/editor-edge.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], EditorEdgeComponent);
    return EditorEdgeComponent;
}());



/***/ }),

/***/ "./src/app/editor/editor.component.css":
/*!*********************************************!*\
  !*** ./src/app/editor/editor.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".label-block {\r\n  display: inline-block\r\n}\r\n\r\n.desc {\r\n  height: 4rem;\r\n}\r\n"

/***/ }),

/***/ "./src/app/editor/editor.component.html":
/*!**********************************************!*\
  !*** ./src/app/editor/editor.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid sticky-top\">\r\n  <div class=\"row justify-content-end\">\r\n\r\n    <button class=\"btn btn-info btn-sm mr-1\" (click)=\"save()\" type=\"button\">\r\n                    <i class=\"fa fa-floppy-o\" aria-hidden=\"true\"> Save</i>\r\n                </button>\r\n    <button class=\"btn btn-secondary btn-sm\" (click)=\"cancel()\" type=\"button\">\r\n                    <i class=\"fa fa-ban\" aria-hidden=\"true\"> Cancel</i>\r\n                </button>\r\n  </div>\r\n</div>\r\n<form>\r\n  <div class=\"container-fluid\">\r\n    <h6 class=\"text-muted\">General Information</h6>\r\n\r\n    <div class=\"form-row\">\r\n\r\n      <div class=\"form-group  col-md-6\">\r\n        <label for=\"label\" class=\"col-form-label\">Label</label>\r\n        <input name=\"label\" type=\"text\" class=\"form-control\" id=\"label\" aria-describedby=\"label\" placeholder=\"Label...\" [(ngModel)]=\"node.data.label\"\r\n          (ngModelChange)=\"updateid($event)\">\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-6\">\r\n        <label for=\"id\" class=\"col-form-label\">ID</label>\r\n        <div class=\"input-group\">\r\n          <input name=\"id\" type=\"text\" class=\"form-control\" id=\"id\" aria-describedby=\"id\" placeholder=\"Enter Valid ID\" [(ngModel)]=\"node.data.id\">\r\n          <span class=\"input-group-btn\">\r\n          <button class=\"btn btn-secondary\" type=\"button\" (click)=\"randomId()\"><i class=\"fa fa-random\"></i></button>\r\n          <button class=\"btn btn-secondary\" type=\"button\" (click)=\"fixId()\"><i class=\"fa fa-check-circle\"></i></button>\r\n        </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-row\">\r\n      <!-- <div class=\"form-group col-md-6\">\r\n        <label for=\"type\" class=\"col-form-label\">Type</label>\r\n        <input name=\"type\" id=\"type\" type=\"text\" class=\"form-control\" [(ngModel)]=\"node.data.type\" [ngbTypeahead]=\"search\" />\r\n      </div> -->\r\n\r\n      <div class=\"form-group col-md-6\">\r\n        <label for=\"type\" class=\"col-form-label\">Type</label>\r\n        <select class=\"form-control\" [(ngModel)]=\"node.data.type\" name=\"type\">\r\n          <option *ngFor=\"let l of nodeTypes\" [value]=\"l.value\">{{l.label}}</option>\r\n        </select>\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-6\">\r\n        <label for=\"name\" class=\"col-form-label\">Version</label>\r\n        <input name=\"version\" type=\"text\" class=\"form-control\" id=\"version\" aria-describedby=\"id\" placeholder=\"Version\" [(ngModel)]=\"node.data.version\">\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"description\">Description</label>\r\n      <textarea name=\"description\" rows=\"4\" type=\"textarea\" class=\"form-control\" id=\"description\" aria-describedby=\"description\"\r\n        placeholder=\"Description...\" [(ngModel)]=\"node.data.description\"></textarea>\r\n    </div>\r\n\r\n    <div *ngIf=\"hasDate()\">\r\n      <h6 class=\"text-muted\">Scheduling</h6>\r\n\r\n      <div class=\"form-row\">\r\n        <div class=\"col-md-4\">\r\n          <label class=\"col-form-label\"> Status </label>\r\n          <div class=\"form-group\">\r\n            <label class=\"custom-control custom-radio\">\r\n            <input id=\"radio1\" name=\"radio\" type=\"radio\" class=\"custom-control-input\"  [(ngModel)]=\"node.data.status\" value=\"complete\">\r\n            <span class=\"custom-control-indicator\"></span>\r\n            <span class=\"custom-control-description\">Complete</span>\r\n        </label>\r\n            <label class=\"custom-control custom-radio\">\r\n            <input id=\"radio2\" name=\"radio\" type=\"radio\" class=\"custom-control-input\"   [(ngModel)]=\"node.data.status\" value=\"planned\">\r\n            <span class=\"custom-control-indicator\"></span>\r\n            <span class=\"custom-control-description\">In Work / Planned</span>\r\n          </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group col-md-4\">\r\n          <label for=\"name\" class=\"col-form-label\">Start Date</label>\r\n          <div class=\"input-group\">\r\n            <input name=\"planned_start_date\" class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" [(ngModel)]=\"node.data.start_date\"\r\n              ngbDatepicker #d=\"ngbDatepicker\">\r\n            <button class=\"input-group-addon\" (click)=\"d.toggle()\" type=\"button\">\r\n             <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n          </button>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group  col-md-4\">\r\n          <label for=\"name\" class=\"col-form-label\">Finish Date</label>\r\n          <div class=\"input-group\">\r\n            <input name=\"planned_finish_date\" class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp2\" [(ngModel)]=\"node.data.finish_date\"\r\n              ngbDatepicker #d2=\"ngbDatepicker\">\r\n            <button class=\"input-group-addon\" (click)=\"d2.toggle()\" type=\"button\">\r\n               <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <h6 class=\"text-muted\">Links</h6>\r\n\r\n    <div class=\"form-row\">\r\n      <div class=\"form-group col-md-4\">\r\n        <label for=\"linkType\" class=\"col-form-label\">Type</label>\r\n        <select name=\"edgeType\" class=\"form-control\" [(ngModel)]=\"newEdge.data.type\">\r\n            <option *ngFor=\"let l of edgeTypes\" [value]=\"l.value\">{{l.label}}</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"form-group col-md-4\">\r\n        <label for=\"target\" class=\"col-form-label\">Target</label>\r\n        <input name=\"edgeTarget \" type=\"text\" class=\"form-control\" id=\"target\" placeholder=\"Target\" [(ngModel)]=\"newEdge.data.target\"\r\n          [ngbTypeahead]=\"searchforIds\" [resultTemplate]=\"rt\" [inputFormatter]=\"formatter\">\r\n\r\n      </div>\r\n      <div class=\"form-group col-md-4\">\r\n        <label for=\"linkVersion\" class=\"col-form-label\">Version</label>\r\n        <input name=\"edgeVersion\" type=\"text\" class=\"form-control\" id=\"linkVersion\" placeholder=\"Version\" [(ngModel)]=\"newEdge.data.version\">\r\n      </div>\r\n      <!-- <div class=\"form-group col-md-4\">\r\n        <label class=\"col-form-label\"> Status </label>\r\n        <div class=\"form-group\">\r\n          <label class=\"custom-control custom-radio\">\r\n            <input id=\"radio1\" name=\"radio\" type=\"radio\" class=\"custom-control-input\"  [(ngModel)]=\"newEdge.data.status\" value=\"complete\">\r\n            <span class=\"custom-control-indicator\"></span>\r\n            <span class=\"custom-control-description\">Complete</span>\r\n        </label>\r\n          <label class=\"custom-control custom-radio\">\r\n            <input id=\"radio2\" name=\"radio\" type=\"radio\" class=\"custom-control-input\"   [(ngModel)]=\"newEdge.data.status\" value=\"planned\">\r\n            <span class=\"custom-control-indicator\"></span>\r\n            <span class=\"custom-control-description\">In Work / Planned</span>\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group col-md-4\">\r\n        <label for=\"name\" class=\"col-form-label\">Start Date</label>\r\n        <div class=\"input-group\">\r\n          <input name=\"planned_start_date\" class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp3\" [(ngModel)]=\"newEdge.data.start_date\"\r\n            ngbDatepicker #d3=\"ngbDatepicker\">\r\n          <button class=\"input-group-addon\" (click)=\"d3.toggle()\" type=\"button\">\r\n             <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group col-md-4\">\r\n        <label for=\"name\" class=\"col-form-label\">Finish Date</label>\r\n        <div class=\"input-group\">\r\n          <input name=\"planned_finish_date\" class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp4\" [(ngModel)]=\"newEdge.data.finish_date\"\r\n            ngbDatepicker #d4=\"ngbDatepicker\">\r\n          <button class=\"input-group-addon\" (click)=\"d4.toggle()\" type=\"button\">\r\n               <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n            </button>\r\n        </div>\r\n      </div> -->\r\n      <div class=\"form-group col-md-1\">\r\n        <div class=\"align-self-end\">\r\n          <button class=\"btn btn-sm btn-secondary align-self-end\" (click)=\"addEdge()\">Add</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\" *ngFor=\"let link of links\">\r\n      <div class=\"col-md-3\"><button class=\"btn btn-sm btn-light\" (click)=\"delEdge(link)\"> <i class=\"fa fa-times\"></i></button> {{link.data.type}}</div>\r\n      <div class=\"col-md-3\">{{link.data.target}}</div>\r\n      <div class=\"col-md-3\">{{link.data.version}}</div>\r\n    </div>\r\n\r\n  </div>\r\n  <!-- End Container -->\r\n</form>\r\n\r\n\r\n<ng-template #rt let-r=\"result\" let-t=\"term\">\r\n  <span class=\"badge badge-secondary\">{{r.data.type}}</span> {{ r.data.label}} <span class=\"text-muted\">id: {{r.data.label}}</span>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/editor/editor.component.ts":
/*!********************************************!*\
  !*** ./src/app/editor/editor.component.ts ***!
  \********************************************/
/*! exports provided: EditorComponent, MyNgbDateParserFormatter, isNumber, padNumber, toInteger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorComponent", function() { return EditorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyNgbDateParserFormatter", function() { return MyNgbDateParserFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "padNumber", function() { return padNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toInteger", function() { return toInteger; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models */ "./src/app/models.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-uuid */ "./node_modules/angular2-uuid/index.js");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_uuid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var types = [
    "Algorithm",
    "Component",
    "Data Type",
    "Endpoint",
    "Library",
    "Process",
    "Technology"
];
var holder = [];
var EditorComponent = /** @class */ (function () {
    function EditorComponent(route, db) {
        var _this = this;
        this.route = route;
        this.db = db;
        this.nodeTypes = [];
        this.edgeTypes = [];
        this.node = new _models__WEBPACK_IMPORTED_MODULE_3__["GraphItem"]();
        this.newEdge = {
            data: {},
            temp: true
        };
        this.newLinks = [];
        this.deletedLinks = [];
        this.links = [];
        console.log("VERSION " + lodash__WEBPACK_IMPORTED_MODULE_6__["VERSION"]);
        this.nodeTypes = this.db.nodeTypes;
        this.edgeTypes = this.db.edgeTypes;
        var id = this.route.snapshot.paramMap.get("id");
        this.route.paramMap.subscribe(function (p) {
            var id = p.get("id");
            var node = _this.db.findItem(id);
            if (node) {
                console.log("SETTING NODE " + node.data.id);
                _this.original = node;
                var newOne = new _models__WEBPACK_IMPORTED_MODULE_3__["GraphItem"]();
                newOne.group = node.group;
                newOne.data = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](node.data);
                _this.node = newOne;
            }
        });
        this.updateLinks();
        holder[0] = this.db;
    }
    EditorComponent.prototype.ngOnInit = function () { };
    EditorComponent.prototype.updateid = function (event) {
        if (!this.original) {
            this.node.data.id = _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"].valid(this.node.data.label.toLowerCase());
        }
    };
    EditorComponent.prototype.updateLinks = function () {
        // Get all the links from the database
        var links = [];
        if (this.original) {
            var orgLinks = this.db.getEdgesFrom(this.original.data.id);
            links.push.apply(links, orgLinks);
        }
        links.push.apply(links, this.newLinks);
        this.deletedLinks.forEach(function (l) {
            lodash__WEBPACK_IMPORTED_MODULE_6__["remove"](links, function (i) { return i.data.id == l.data.id; });
        });
        links.forEach(function (item) {
            console.log("ITEM " +
                item.group +
                " " +
                item.data.target +
                JSON.stringify(item.data));
        });
        this.links = links;
    };
    EditorComponent.prototype.fixId = function () {
        this.node.data.id = _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"].valid(this.node.data.id);
    };
    EditorComponent.prototype.randomId = function () {
        this.node.data.id = angular2_uuid__WEBPACK_IMPORTED_MODULE_5__["UUID"].UUID();
    };
    EditorComponent.prototype.changeStatus = function (entry) {
        console.log("ChangeStatus" + entry);
        this.node.data.status = entry;
    };
    EditorComponent.prototype.hasDate = function () {
        var nt = this.db.nodeType(this.node.data.type);
        if (nt) {
            return nt.hasDate;
        }
        return false;
    };
    EditorComponent.prototype.save = function () {
        var _this = this;
        if (this.node.data.start_date) {
            var dt = this.node.data.start_date;
            this.node.data.start_date = new Date(dt.year, dt.month - 1, dt.day, 0, 0, 0, 0);
        }
        if (this.node.data.finish_date) {
            var dt = this.node.data.finish_date;
            this.node.data.finish_date = new Date(dt.year, dt.month - 1, dt.day, 0, 0, 0, 0);
        }
        if (this.original) {
            // EDIT
            this.original.data = this.node.data;
        }
        else {
            // NEW
            this.db.add(this.node);
        }
        // Add each of the new links
        this.newLinks.forEach(function (link) {
            _this.db.addEdge(link.data.target, _this.node.data.id, link.data.type, link.data.version);
        });
        // Remove the links
        this.deletedLinks.forEach(function (link) {
            if (!link.temp) {
                _this.db.remove(link.data.id);
            }
        });
        window.history.back();
    };
    EditorComponent.prototype.cancel = function () {
        window.history.back();
    };
    EditorComponent.prototype.search = function (text$) {
        return text$
            .debounceTime(200)
            .distinctUntilChanged()
            .map(function (term) {
            return term.length < 2
                ? []
                : types.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; });
        });
    };
    EditorComponent.prototype.searchforIds = function (text) {
        return text
            .debounceTime(200)
            .distinctUntilChanged()
            .map(function (term) {
            return term.length < 2 ? [] : holder[0].findAll2(term);
        });
    };
    EditorComponent.prototype.formatter = function (item) {
        return item.data.id;
    };
    EditorComponent.prototype.addEdge = function () {
        var tgt = this.newEdge.data.target;
        if (tgt.data && tgt.data.id) {
            this.newEdge.data.target = tgt.data.id;
        }
        this.newLinks.push(this.newEdge);
        this.newEdge = {
            data: {},
            temp: true
        };
        this.updateLinks();
    };
    EditorComponent.prototype.delEdge = function (item) {
        lodash__WEBPACK_IMPORTED_MODULE_6__["remove"](this.newLinks, function (i) {
            return item.data.target == i.data.target;
        });
        this.deletedLinks.push(item);
        this.updateLinks();
    };
    EditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-editor",
            template: __webpack_require__(/*! ./editor.component.html */ "./src/app/editor/editor.component.html"),
            styles: [__webpack_require__(/*! ./editor.component.css */ "./src/app/editor/editor.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
    ], EditorComponent);
    return EditorComponent;
}());

var MyNgbDateParserFormatter = /** @class */ (function (_super) {
    __extends(MyNgbDateParserFormatter, _super);
    function MyNgbDateParserFormatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyNgbDateParserFormatter.prototype.parse = function (value) {
        if (value) {
            var dateParts = value.trim().split("-");
            if (dateParts.length === 1 && isNumber(dateParts[0])) {
                return { year: toInteger(dateParts[0]), month: null, day: null };
            }
            else if (dateParts.length === 2 &&
                isNumber(dateParts[0]) &&
                isNumber(dateParts[1])) {
                return {
                    year: toInteger(dateParts[0]),
                    month: toInteger(dateParts[1]),
                    day: null
                };
            }
            else if (dateParts.length === 3 &&
                isNumber(dateParts[0]) &&
                isNumber(dateParts[1]) &&
                isNumber(dateParts[2])) {
                return {
                    year: toInteger(dateParts[0]),
                    month: toInteger(dateParts[1]),
                    day: toInteger(dateParts[2])
                };
            }
        }
        return null;
    };
    MyNgbDateParserFormatter.prototype.format = function (date) {
        return date
            ? (isNumber(date.month) ? padNumber(date.month) : "") + "-" + (isNumber(date.day)
                ? padNumber(date.day)
                : "") + "-" + date.year
            : "";
    };
    return MyNgbDateParserFormatter;
}(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateParserFormatter"]));

function isNumber(value) {
    return !isNaN(toInteger(value));
}
function padNumber(value) {
    if (isNumber(value)) {
        return ("0" + value).slice(-2);
    }
    else {
        return "";
    }
}
function toInteger(value) {
    return parseInt("" + value, 10);
}


/***/ }),

/***/ "./src/app/gantt/gantt.component.css":
/*!*******************************************!*\
  !*** ./src/app/gantt/gantt.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gantt_container {\r\n  width: 100%;\r\n  height: 700px;\r\n  position: relative;\r\n}\r\n\r\n.bordered {\r\n  border: 3px solid #000000;\r\n}\r\n"

/***/ }),

/***/ "./src/app/gantt/gantt.component.html":
/*!********************************************!*\
  !*** ./src/app/gantt/gantt.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Gannt Chart</h4>\n\n<div class=\"sticky-top\">\n\n  <div class=\"btn-group btn-group-sm mb-1 mr-auto\" role=\"group\" data-toggle=\"buttons\" *ngIf=\"u.large\">\n    <button class=\"btn btn-info btn-sm\" *ngFor=\"let t of types\" (click)=\"toggleFilter(t.value)\" [ngClass]=\"{'active': isFiltered(t.value)}\">{{t.label}}</button>\n  </div>\n\n  <div ngbDropdown class=\"d-inline-block\" *ngIf=\"!u.large\">\n    <button class=\"btn btn-sm btn-info mb-1\" id=\"dropdownBasic1\" ngbDropdownToggle><i class=\"fa fa-filter\"></i> Types</button>\n    <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n      <button class=\"dropdown-item gutter\" *ngFor=\"let t of types\" (click)=\"toggleFilter(t)\"><i class=\"fa fa-check fa-fw check\" *ngIf=\"isFiltered(t)\"></i>{{t}}</button>\n    </div>\n  </div>\n\n  <div class=\"btn-group btn-group-sm mb-1\" role=\"group\" data-toggle=\"buttons\">\n    <button class=\"btn btn-sm btn-secondary \" (click)=\"zoomToFit()\"><i class=\"fa fa-arrows-alt\" aria-hidden=\"true\"></i></button>\n    <button class=\"btn btn-sm btn-secondary \" (click)=\"stepPrev()\"><i class=\"fa fa-step-backward\" aria-hidden=\"true\"></i></button>\n    <button class=\"btn btn-sm btn-secondary \" (click)=\"stepNext()\"><i class=\"fa fa-step-forward\" aria-hidden=\"true\"></i></button>\n  </div>\n\n  <div class=\"btn-group btn-group-sm mb-1\" role=\"group\" data-toggle=\"buttons\">\n    <button [disabled]=\"!u.selected\" class=\"btn btn-secondary btn-sm \" (click)=\"u.edit()\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> Edit </button>\n    <button class=\"btn btn-sm btn-secondary \" (click)=\"u.newItem()\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i> New Item</button>\n    <button class=\"btn btn-sm btn-secondary \" (click)=\"u.newEdge()\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i> New Link</button>\n  </div>\n\n</div>\n<div class=\"row\">\n  <div [ngClass]=\"{'col-lg-9 pr-0': u.selected, 'col-lg-12':!u.selected}\">\n    <div id=\"gantt_here\" class='gantt_container' #drawingArea></div>\n  </div>\n  <div class=\"\" *ngIf=\"u.large && u.selected\" [ngClass]=\"{'col-lg-3': u.selected}\">\n    <div class=\"sticky-top\">\n      <app-view [item]=\"u.selected\"></app-view>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/gantt/gantt.component.ts":
/*!******************************************!*\
  !*** ./src/app/gantt/gantt.component.ts ***!
  \******************************************/
/*! exports provided: GanttComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GanttComponent", function() { return GanttComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/dist/index.js");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular_2_local_storage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models */ "./src/app/models.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils */ "./src/app/utils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var GanttComponent = /** @class */ (function () {
    function GanttComponent(data, router, localStorage) {
        this.data = data;
        this.router = router;
        this.localStorage = localStorage;
        this.LOCAL_STORAGE_KEY = "GanttComponent.PREFS";
        this.types = [];
        this.prefs = new Prefs();
        this.weekScaleTemplate = function (date) {
            var dateToStr = gantt.date.date_to_str("%d %M");
            var endDate = gantt.date.add(gantt.date.add(date, 1, "week"), -1, "day");
            return dateToStr(date) + " - " + dateToStr(endDate);
        };
        //Setting available scales
        this.scaleConfigs = [
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
                        template: function (date) {
                            var dateToStr = gantt.date.date_to_str("%d %M");
                            var endDate = gantt.date.add(gantt.date.add(date, 1, "week"), -1, "day");
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
                        template: function (date) {
                            var dateToStr = gantt.date.date_to_str("%M");
                            var endDate = gantt.date.add(gantt.date.add(date, 3, "month"), -1, "day");
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
                        template: function (date) {
                            var dateToStr = gantt.date.date_to_str("%Y");
                            var endDate = gantt.date.add(gantt.date.add(date, 5, "year"), -1, "day");
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
                template: function (date) {
                    var dateToStr = gantt.date.date_to_str("%Y");
                    var endDate = gantt.date.add(gantt.date.add(date, 5, "year"), -1, "day");
                    return dateToStr(date) + " - " + dateToStr(endDate);
                },
                subscales: [
                    {
                        unit: "year",
                        step: 50,
                        template: function (date) {
                            var dateToStr = gantt.date.date_to_str("%Y");
                            var endDate = gantt.date.add(gantt.date.add(date, 50, "year"), -1, "day");
                            return dateToStr(date) + " - " + dateToStr(endDate);
                        }
                    }
                ]
            }
        ];
        this.Schemes = [
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
        this.u = new _utils__WEBPACK_IMPORTED_MODULE_7__["Utils"](localStorage, router, data, this.LOCAL_STORAGE_KEY, new Prefs(), this.update);
        this.dataset = new Dataset(this.data);
        this.types = this.data.nodeTypes;
    }
    GanttComponent.prototype.onResize = function (event) {
        // let windowH = event.target.innerHeight
        // var rect = this.drawingArea.nativeElement.getBoundingClientRect();
        // this.drawingArea.nativeElement.style.height = (windowH - rect.top - 10) + "px"
        this.resize();
    };
    GanttComponent.prototype.ngOnInit = function () { };
    GanttComponent.prototype.getPath = function (eles, s) {
        var dfs = this.data.cy.elements().dfs({
            // The element to start from
            roots: eles,
            // Function figure out if we are taking the right path
            visit: function (v, e, u, i, depth) {
                console.log("visit " + v.id());
                // The desired node type is
                var backLevels = s.levels.slice().reverse();
                var lookingForType = backLevels[depth];
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
    };
    GanttComponent.prototype.getSchemes = function (type) {
        var result = [];
        this.Schemes.forEach(function (scheme) {
            if (lodash__WEBPACK_IMPORTED_MODULE_4__["includes"](scheme.levels, type)) {
                result.push(scheme);
            }
        });
        return result;
    };
    GanttComponent.prototype.resize = function () {
        // Resize the main window
        var rect = this.drawingArea.nativeElement.getBoundingClientRect();
        var windowH = window.innerHeight;
        var newH = windowH - rect.top - 10;
        if (newH == this.drawingArea.nativeElement.style.height) {
            // nochange
            return false;
        }
        else {
            this.drawingArea.nativeElement.style.height =
                windowH - rect.top - 10 + "px";
            gantt.render();
            return true;
        }
    };
    GanttComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
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
        gantt.attachEvent("onTaskClick", function (id, e) {
            //any custom logic here
            var item = _this.data.getItem(id);
            if (_this.u.selected && _this.u.selected == item) {
                _this.u.selected = undefined;
            }
            else {
                _this.u.selected = item;
            }
            // gantt.render();
            setTimeout(function () { return gantt.render(); }, 50);
            return true;
        });
        gantt.init("gantt_here");
        this.update();
        this.resize();
    };
    GanttComponent.prototype.update2 = function () {
        var _this = this;
        gantt.clearAll();
        // Create all the tasks, etc
        this.data.cy.nodes().forEach(function (i) {
            var n = i._private;
            var nodeType = _this.data.nodeType(n.data.type);
            var dateType = nodeType.dateType;
            if (dateType == _models__WEBPACK_IMPORTED_MODULE_6__["DateType"].DateRange) {
                _this.addTask(i);
            }
            else if (dateType == _models__WEBPACK_IMPORTED_MODULE_6__["DateType"].Marker) {
                _this.dataset.fromType(n);
            }
        });
        // Update the chart
        var dataToParse = {
            data: this.dataset.tasks,
            links: this.dataset.links
        };
        gantt.parse(dataToParse);
        // Add the markers
        this.dataset.markerDefs.forEach(function (v) {
            gantt.addMarker(v);
        });
        gantt.render();
    };
    GanttComponent.prototype.update = function () {
        var _this = this;
        gantt.clearAll();
        // Create components
        this.data.cy.nodes().forEach(function (i) {
            var n = i._private;
            var nodeType = _this.data.nodeType(n.data.type);
            var dateType = nodeType.dateType;
            if (nodeType.value == "Sprint") {
                _this.dataset.fromType(n);
            }
            else if (dateType == _models__WEBPACK_IMPORTED_MODULE_6__["DateType"].Marker) {
                _this.dataset.fromType(n);
            }
        });
        // Update the chart
        var dataToParse = {
            data: this.dataset.tasks,
            links: this.dataset.links
        };
        gantt.parse(dataToParse);
        // Add the markers
        this.dataset.markerDefs.forEach(function (v) {
            gantt.addMarker(v);
        });
        gantt.render();
    };
    GanttComponent.prototype.getSprintsForComponent = function (componentId) { };
    GanttComponent.prototype.addTask = function (eles) {
        var _this = this;
        var n = eles._private;
        // Get the schemes for this node
        var schemes = this.getSchemes(n.data.type);
        if (!schemes || schemes.length == 0) {
            return;
        }
        // Determine if the scheme is selected
        schemes.forEach(function (scheme) {
            // Determine the path of that node
            var path = _this.getPath(eles, scheme);
            // ({ path: eles, found: node }),
            if (path.found) {
                // Note - The path contains the edges and the nodes
                var lastId = undefined;
                var p = path.path;
                for (var i = p.length - 1; i >= 0; i -= 2) {
                    var pathNode = p[i];
                    // get the task by the id to see if it exists
                    var id = pathNode.data("id");
                    var n_1 = pathNode._private;
                    _this.dataset.fromType(n_1, lastId);
                    lastId = id;
                }
            }
        });
    };
    GanttComponent.prototype.stepNext = function () {
        var project = gantt.getSubtaskDates();
        console.log(JSON.stringify(project));
        var newIndex = this.prefs.scaleIndex + 1;
        if (newIndex >= this.scaleConfigs.length) {
            newIndex = 0;
        }
        this.applyConfig(this.scaleConfigs[newIndex], project);
        this.prefs.scaleIndex = newIndex;
        gantt.render();
    };
    GanttComponent.prototype.stepPrev = function () {
        var project = gantt.getSubtaskDates();
        console.log(JSON.stringify(project));
        var newIndex = this.prefs.scaleIndex - 1;
        if (newIndex < 0) {
            newIndex = this.scaleConfigs.length - 1;
        }
        this.applyConfig(this.scaleConfigs[newIndex], project);
        this.prefs.scaleIndex = newIndex;
        gantt.render();
    };
    GanttComponent.prototype.zoomToFit = function () {
        var project = gantt.getSubtaskDates(), areaWidth = gantt.$task.offsetWidth;
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
        this.prefs.scaleIndex = i;
        gantt.render();
    };
    // get number of columns in timeline
    GanttComponent.prototype.getUnitsBetween = function (from, to, unit, step) {
        var start = new Date(from), end = new Date(to);
        var units = 0;
        while (start.valueOf() < end.valueOf()) {
            units++;
            start = gantt.date.add(start, step, unit);
        }
        return units;
    };
    GanttComponent.prototype.applyConfig = function (config, dates) {
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
        }
        else {
            gantt.config.start_date = gantt.config.end_date = null;
        }
    };
    GanttComponent.prototype.isFiltered = function (l) {
        return lodash__WEBPACK_IMPORTED_MODULE_4__["includes"](this.prefs.filtered, l);
    };
    GanttComponent.prototype.toggleFilter = function (t) {
        // Toggle the filter
        var len = this.prefs.filtered.length;
        var success = lodash__WEBPACK_IMPORTED_MODULE_4__["pull"](this.prefs.filtered, t);
        if (success.length == len) {
            this.prefs.filtered.push(t);
        }
        this.savePrefs();
        this.update();
    };
    GanttComponent.prototype.savePrefs = function () {
        var str = JSON.stringify(this.prefs);
        this.localStorage.set(this.LOCAL_STORAGE_KEY, str);
    };
    GanttComponent.prototype.resetPreferences = function () {
        this.prefs = new Prefs();
        this.savePrefs();
        this.update();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("drawingArea"),
        __metadata("design:type", Object)
    ], GanttComponent.prototype, "drawingArea", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("window:resize", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], GanttComponent.prototype, "onResize", null);
    GanttComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-gantt",
            template: __webpack_require__(/*! ./gantt.component.html */ "./src/app/gantt/gantt.component.html"),
            styles: [__webpack_require__(/*! ./gantt.component.css */ "./src/app/gantt/gantt.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            angular_2_local_storage__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]])
    ], GanttComponent);
    return GanttComponent;
}());

var Prefs = /** @class */ (function () {
    function Prefs() {
        this.filtered = [""];
        this.scaleIndex = -1;
    }
    return Prefs;
}());
var Scheme = /** @class */ (function () {
    function Scheme() {
    }
    return Scheme;
}());
var Dataset = /** @class */ (function () {
    function Dataset(data) {
        this.data = data;
        this.taskDefs = new Map();
        this.linkDefs = new Map();
        this.markerDefs = new Map();
    }
    Object.defineProperty(Dataset.prototype, "tasks", {
        get: function () {
            var all = [];
            this.taskDefs.forEach(function (v) { return all.push(v); });
            return all;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dataset.prototype, "links", {
        get: function () {
            var all = [];
            this.linkDefs.forEach(function (v) { return all.push(v); });
            return all;
        },
        enumerable: true,
        configurable: true
    });
    Dataset.prototype.project = function (id, text, parent) {
        if (!this.taskDefs.has(id)) {
            var t = {
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
    };
    Dataset.prototype.task = function (id, text, start_date, end_date, parent) {
        if (!this.taskDefs.has(id)) {
            var t = {
                id: id,
                text: text,
                start_date: date_fns__WEBPACK_IMPORTED_MODULE_3__["format"](start_date, "DD-MM-YYYY"),
                end_date: date_fns__WEBPACK_IMPORTED_MODULE_3__["format"](end_date, "DD-MM-YYYY"),
                type: "task"
            };
            if (parent) {
                t.parent = parent;
            }
            this.taskDefs.set(id, t);
        }
    };
    Dataset.prototype.milestone = function (id, text, date, parent) {
        if (!this.taskDefs.has(id)) {
            var t = {
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
    };
    Dataset.prototype.marker = function (id, text, date) {
        if (!this.markerDefs.has(id)) {
            var t = {
                id: id,
                start_date: date,
                css: "today",
                text: text,
                title: text // the marker's tooltip
            };
            this.markerDefs.set(id, t);
        }
    };
    Dataset.prototype.link = function (id, source, target, type) {
        if (type === void 0) { type = "FS"; }
        if (!this.linkDefs.has(id)) {
            var typeNum = 0;
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
            var t = {
                id: id,
                source: source,
                target: target,
                type: typeNum
            };
            this.linkDefs.set(id, t);
        }
    };
    Dataset.prototype.fromType = function (n, parent) {
        var nodeType = this.data.nodeType(n.data.type);
        var dateType = nodeType.dateType;
        var dtStart = n.data.start_date;
        if (dtStart && typeof dtStart === "string") {
            dtStart = new Date(Date.parse(dtStart));
        }
        var dtEnd = n.data.finish_date;
        if (dtEnd && typeof dtEnd === "string") {
            dtEnd = new Date(Date.parse(dtEnd));
        }
        var dtOne = dtStart ? dtStart : dtEnd;
        switch (dateType) {
            case _models__WEBPACK_IMPORTED_MODULE_6__["DateType"].DateRange:
                if (!dtStart ||
                    !dtEnd ||
                    isNaN(dtStart.getDay()) ||
                    isNaN(dtEnd.getDay())) {
                    console.log("STOP " +
                        n.data.id +
                        " " +
                        n.data.type +
                        " " +
                        n.data.start_date +
                        " to " +
                        n.data.finish_date);
                }
                else {
                    this.task(n.data.id, n.data.label, dtStart, dtEnd, parent);
                }
                break;
            case _models__WEBPACK_IMPORTED_MODULE_6__["DateType"].None:
                this.project(n.data.id, n.data.label, parent);
                break;
            case _models__WEBPACK_IMPORTED_MODULE_6__["DateType"].Milestone:
                this.milestone(n.data.id, n.data.label, dtOne, parent);
                break;
            case _models__WEBPACK_IMPORTED_MODULE_6__["DateType"].Marker:
                this.marker(n.data.id, n.data.label, dtOne);
                break;
        }
    };
    return Dataset;
}());


/***/ }),

/***/ "./src/app/label.pipe.ts":
/*!*******************************!*\
  !*** ./src/app/label.pipe.ts ***!
  \*******************************/
/*! exports provided: LabelPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelPipe", function() { return LabelPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LabelPipe = /** @class */ (function () {
    function LabelPipe(data) {
        this.data = data;
    }
    LabelPipe.prototype.transform = function (value, args) {
        if (value) {
            var item = this.data.getItem(value);
            if (item) {
                return item.data.label;
            }
        }
        return null;
    };
    LabelPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'label'
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], LabelPipe);
    return LabelPipe;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <a class=\"navbar-brand\" href=\"#\">Dependency Tracker</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\"\r\n    aria-label=\"Toggle navigation\" (click)=\"isCollapsed = !isCollapsed\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse mr-auto\" id=\"navbarNav\" [ngbCollapse]=\"isCollapsed\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" routerLink=\"/home\"><i class=\"fa fa-list\" aria-hidden=\"true\"></i> List </a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/matrix\"><i class=\"fa fa-th\" aria-hidden=\"true\"></i> Matrix </a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/graph\"><i class=\"fa fa-share-alt\" aria-hidden=\"true\"></i> Network </a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/report\"><i class=\"fa fa-file\" aria-hidden=\"true\"></i> Report </a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/calendar\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i> Calendar </a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/timeline\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> Timeline </a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/gantt\"><i class=\"fa fa-bar-chart fa-rotate-90\" aria-hidden=\"true\"></i> Gantt </a>\r\n      </li>\r\n    </ul>\r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item\">\r\n        <a *ngIf=\"!large\" class=\"nav-link\" routerLink=\"/database\"><i class=\"fa fa-database\" aria-hidden=\"true\"></i> Data Manager</a>\r\n        <a *ngIf=\"large\" class=\"nav-link\" routerLink=\"/database\"><i class=\"fa fa-database\" aria-hidden=\"true\"></i></a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        var _this = this;
        this.isCollapsed = false;
        this.large = true;
        var mq = window.matchMedia("(min-width: 992px)");
        this.large = mq.matches;
        mq.addListener(function (newMatch) {
            console.log("Media Query " + newMatch.matches + " IS LARGE");
            _this.large = newMatch.matches;
        });
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/models.ts":
/*!***************************!*\
  !*** ./src/app/models.ts ***!
  \***************************/
/*! exports provided: Database, GraphItem, Data, DbConfig, ProcessExtra, DateType, NodeType, EdgeType, ValidRelation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Database", function() { return Database; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphItem", function() { return GraphItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Data", function() { return Data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbConfig", function() { return DbConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessExtra", function() { return ProcessExtra; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateType", function() { return DateType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeType", function() { return NodeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdgeType", function() { return EdgeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidRelation", function() { return ValidRelation; });
var Database = /** @class */ (function () {
    function Database() {
        this.source = "None";
        this.graph = new Array();
        this.structure = new DbConfig();
    }
    return Database;
}());

var GraphItem = /** @class */ (function () {
    function GraphItem() {
        this.group = "nodes";
        this.classes = ""; // a space separated list of class names that the element has
        this.data = new Data();
    }
    return GraphItem;
}());

var Data = /** @class */ (function () {
    function Data() {
        this.status = "Complete";
    }
    return Data;
}());

var DbConfig = /** @class */ (function () {
    function DbConfig() {
        this.nodeTypes = [
            {
                label: "Component",
                value: "component",
                hasDate: false,
                dateType: DateType.None
            },
            {
                label: "Process",
                value: "process",
                hasDate: false,
                dateType: DateType.None
            },
            {
                label: "Requirement",
                value: "requirement",
                hasDate: false,
                dateType: DateType.None
            },
            {
                label: "Capability",
                value: "capability",
                hasDate: false,
                dateType: DateType.None
            },
            {
                label: "Feature",
                value: "feature",
                hasDate: false,
                dateType: DateType.None
            },
            {
                label: "Thread",
                value: "thread",
                hasDate: true,
                dateType: DateType.Marker
            },
            {
                label: "Technology",
                value: "technology",
                hasDate: false,
                dateType: DateType.None
            },
            {
                label: "Library",
                value: "library",
                hasDate: false,
                dateType: DateType.None
            },
            {
                label: "Environment",
                value: "environment",
                hasDate: false,
                dateType: DateType.None
            },
            {
                label: "Data Type",
                value: "datatype",
                hasDate: false,
                dateType: DateType.None
            },
            {
                label: "Release",
                value: "release",
                hasDate: true,
                dateType: DateType.DateRange
            },
            {
                label: "Sprint",
                value: "Sprint",
                hasDate: true,
                dateType: DateType.DateRange
            },
            {
                label: "Event",
                value: "event",
                hasDate: true,
                dateType: DateType.Marker
            }
        ];
        this.edgeTypes = [
            {
                label: "Parent",
                value: "parent"
            },
            {
                label: "Depends On",
                value: "depends"
            },
            {
                label: "Association",
                value: "association"
            },
            {
                label: "Implements",
                value: "implements"
            },
            {
                label: "Satisfies",
                value: "satisfies"
            },
            {
                label: "Reads",
                value: "reads"
            },
            {
                label: "Writes",
                value: "writes"
            },
            {
                label: "Consumes",
                value: "consumes"
            },
            {
                label: "Handles",
                value: "handles"
            },
            {
                label: "Writes",
                value: "writes"
            }
        ];
        this.validRelations = [
            {
                sourceType: "process",
                targetType: "component",
                edgeType: "parent"
            }
        ];
    }
    return DbConfig;
}());

var ProcessExtra = /** @class */ (function () {
    function ProcessExtra() {
    }
    return ProcessExtra;
}());

var DateType;
(function (DateType) {
    DateType[DateType["None"] = 0] = "None";
    DateType[DateType["DateRange"] = 1] = "DateRange";
    DateType[DateType["Milestone"] = 2] = "Milestone";
    DateType[DateType["Marker"] = 3] = "Marker";
})(DateType || (DateType = {}));
var NodeType = /** @class */ (function () {
    function NodeType() {
        this.hasDate = false;
        this.dateType = DateType.None;
    }
    return NodeType;
}());

var EdgeType = /** @class */ (function () {
    function EdgeType() {
    }
    return EdgeType;
}());

var ValidRelation = /** @class */ (function () {
    function ValidRelation() {
    }
    return ValidRelation;
}());



/***/ }),

/***/ "./src/app/nodetypelabel.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/nodetypelabel.pipe.ts ***!
  \***************************************/
/*! exports provided: NodetypelabelPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodetypelabelPipe", function() { return NodetypelabelPipe; });
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NodetypelabelPipe = /** @class */ (function () {
    function NodetypelabelPipe(data) {
        this.data = data;
    }
    NodetypelabelPipe.prototype.transform = function (value, args) {
        var t = this.data.nodeType(value);
        if (t) {
            return t.label;
        }
        return null;
    };
    NodetypelabelPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: "nodetypelabel"
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_0__["DataService"]])
    ], NodetypelabelPipe);
    return NodetypelabelPipe;
}());



/***/ }),

/***/ "./src/app/process-list/process-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/process-list/process-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "chevron_button {\r\n  border: 0 solid white;\r\n}\r\n\r\n.page {\r\n  min-height: 600px;\r\n  height: 100%;\r\n}\r\n\r\n.cell {\r\n  padding: .1rem !important;\r\n}\r\n\r\n.selectable {\r\n  cursor: pointer;\r\n  padding: 5px 10px 10px 5px;\r\n}\r\n\r\n.selectable:nth-of-type(odd) {\r\n  background-color: rgba(0, 0, 0, .05);\r\n}\r\n\r\n.selectable:hover {\r\n  background-color: #BABABA;\r\n}\r\n\r\n.selected {\r\n  background-color: #BABABA !important;\r\n}\r\n\r\n.list {\r\n  outline: 0px solid transparent;\r\n}\r\n\r\n.list:focus {\r\n  outline: 0px solid transparent;\r\n}\r\n"

/***/ }),

/***/ "./src/app/process-list/process-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/process-list/process-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4> List </h4>\r\n<div class=\"sticky-top\">\r\n  <div class=\"btn-group btn-group-sm mb-1\" role=\"group\" data-toggle=\"buttons\" *ngIf=\"large\">\r\n    <button class=\"btn btn-info btn-sm\" (click)=\"toggleFilter('ALL')\" [ngClass]=\"{'active': isFiltered('ALL')}\">ALL</button>\r\n    <button class=\"btn btn-info btn-sm\" *ngFor=\"let t of types\" (click)=\"toggleFilter(t.value)\" [ngClass]=\"{'active': isFiltered(t.value)}\">{{t.label}}</button>\r\n  </div>\r\n\r\n  <div ngbDropdown class=\"d-inline-block\" *ngIf=\"!large\">\r\n    <button class=\"btn btn-sm btn-info mb-1\" id=\"dropdownBasic1\" ngbDropdownToggle>{{prefs.typeSelected}}</button>\r\n    <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\r\n      <button class=\"dropdown-item gutter\" (click)=\"toggleFilter('ALL')\"><i class=\"fa fa-check fa-fw check\" *ngIf=\"isFiltered('ALL')\"></i>ALL</button>\r\n      <button class=\"dropdown-item gutter\" *ngFor=\"let t of types\" (click)=\"toggleFilter(t.value)\"><i class=\"fa fa-check fa-fw check\" *ngIf=\"isFiltered(t.value)\"></i>{{t.label}}</button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"btn-group btn-group-sm mb-1\" role=\"group\" data-toggle=\"buttons\" *ngIf=\"large\">\r\n    <button class=\"btn btn-info btn-sm\" (click)=\"display = 'table'\" [ngClass]=\"{'active': display == 'table'}\"><i class=\"fa fa-table\"></i></button>\r\n    <button class=\"btn btn-info btn-sm\" (click)=\"display = 'list'\" [ngClass]=\"{'active': display == 'list'}\"><i class=\"fa fa-list\"></i></button>\r\n  </div>\r\n\r\n  <div class=\"btn-group btn-group-sm mb-1\" role=\"group\" data-toggle=\"buttons\">\r\n    <button [disabled]=\"!selected\" class=\"btn btn-secondary btn-sm \" (click)=\"edit()\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> Edit </button>\r\n    <button class=\"btn btn-sm btn-secondary \" (click)=\"newItem()\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i> New Item</button>\r\n    <button class=\"btn btn-sm btn-secondary \" (click)=\"newEdge()\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i> New Link</button>\r\n  </div>\r\n\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-lg-9\">\r\n    <ng-table *ngIf=\"large && display=='table'\" [className]=\"['table-responsive','table-condensed']\" [config]=\"getConfig()\" (tableChanged)=\"onChangeTable()\"\r\n      (cellClicked)=\"onCellClick($event)\" [rows]=\"rows\" [columns]=\"getConfig().sorting.columns\">\r\n    </ng-table>\r\n\r\n    <div *ngIf=\"!large || display=='list'\" tabindex=\"1\" (keydown)=\"key($event)\" class=\"list\">\r\n      <div (keydown)=\"key($event)\" *ngFor=\"let r of rows\" class=\"selectable\" [ngClass]=\"{'selected' : isSelected(r)}\" (click)=\"onListClick(r)\"\r\n        (dblclick)=\"view(r)\" (press)=\"view(r)\">\r\n        {{r.item.data.label}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-lg-3\" *ngIf=\"large\">\r\n    <div class=\" sticky-top\">\r\n      <app-view [item]=\"selected\"></app-view>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/process-list/process-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/process-list/process-list.component.ts ***!
  \********************************************************/
/*! exports provided: ProcessListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessListComponent", function() { return ProcessListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/dist/index.js");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular_2_local_storage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProcessListComponent = /** @class */ (function () {
    function ProcessListComponent(dataSvc, router, modalService, localStorage) {
        var _this = this;
        this.dataSvc = dataSvc;
        this.router = router;
        this.modalService = modalService;
        this.localStorage = localStorage;
        this.LOCAL_STORAGE_KEY = "ProcessListComponent.prefs";
        this.types = [];
        this.items = new Array();
        this.rows = new Array();
        this.prefs = new Prefs();
        this.columnsProcess = [
            {
                title: "Name",
                name: "name",
                filtering: { filterString: "", placeholder: "Filter by name" }
            },
            {
                title: "Component",
                name: "component",
                filtering: { filterString: "", placeholder: "Filter by component" }
            },
            {
                title: "Type",
                name: "type",
                filtering: { filterString: "", placeholder: "Filter by type" }
            }
        ];
        this.columnsRest = [
            {
                title: "Name",
                name: "name",
                filtering: { filterString: "", placeholder: "Filter by name" }
            },
            {
                title: "Component",
                name: "component",
                filtering: { filterString: "", placeholder: "Filter by component" }
            },
            {
                title: "Type",
                name: "type",
                filtering: { filterString: "", placeholder: "Filter by type" }
            }
        ];
        this.page = 1;
        this.itemsPerPage = 10;
        this.maxSize = 5;
        this.numPages = 1;
        this.length = 0;
        this.configProcess = {
            paging: false,
            sorting: { columns: this.columnsProcess },
            // filtering: { filterString: '' },
            className: ["table-striped", "table-bordered"]
        };
        this.configRest = {
            paging: false,
            sorting: { columns: this.columnsRest },
            // filtering: { filterString: '' },
            className: ["table-striped", "table-bordered"]
        };
        var str = this.localStorage.get(this.LOCAL_STORAGE_KEY);
        if (str) {
            this.prefs = JSON.parse(str);
        }
        var mq = window.matchMedia("(min-width: 992px)");
        this.large = mq.matches;
        mq.addListener(function (newMatch) {
            console.log("Media Query " + newMatch.matches + " IS LARGE");
            _this.large = newMatch.matches;
        });
        // Get the data
        this.dataSvc.getDb().subscribe(function (db) {
            _this.db = db;
            // this.types = this.db.structure.nodeTypes
            if (db.graph) {
                _this.cy = _this.dataSvc.cy;
                _this.generate();
            }
        });
        this.dataSvc.cyo.subscribe(function (newCy) {
            _this.cy = newCy;
        });
        this.types = this.dataSvc.nodeTypes;
    }
    ProcessListComponent_1 = ProcessListComponent;
    ProcessListComponent.prototype.ngOnInit = function () {
        this.onChangeTable();
    };
    ProcessListComponent.prototype.toggleFilter = function (t) {
        this.prefs.typeSelected = t;
        this.generate();
    };
    ProcessListComponent.prototype.isFiltered = function (t) {
        return t == this.prefs.typeSelected;
    };
    ProcessListComponent.prototype.generate = function () {
        this.items = this.getItems(this.prefs.typeSelected);
        this.onChangeTable();
    };
    ProcessListComponent.prototype.getItems = function (type) {
        var all = new Array();
        var selector = 'node[type="' + type + '"]';
        console.log("Selecting " + selector);
        var items;
        if (type === "ALL") {
            items = this.cy.nodes();
        }
        else {
            items = this.cy.nodes(selector);
        }
        console.log("Found " + items.length);
        items.forEach(function (p) {
            var n = p._private;
            var id = n.data["id"];
            var label = n.data.label;
            var component = n.data.component;
            all.push({
                name: label,
                value: id,
                type: n.data.type,
                component: ProcessListComponent_1.blank(component),
                item: n
            });
        });
        return all;
    };
    ProcessListComponent.blank = function (value) {
        if (value) {
            return value;
        }
        else {
            return "";
        }
    };
    ProcessListComponent.prototype.changePage = function (page, data) {
        // let start = (page.page - 1) * page.itemsPerPage;
        // let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
        // return data.slice(start, end);
        return null;
    };
    ProcessListComponent.prototype.changeSort = function (data, config) {
        if (!config.sorting) {
            return data;
        }
        var columns = config.sorting.columns || [];
        var columnName = void 0;
        var sort = void 0;
        for (var i = 0; i < columns.length; i++) {
            if (columns[i].sort !== "" && columns[i].sort !== false) {
                columnName = columns[i].name;
                sort = columns[i].sort;
            }
        }
        if (!columnName) {
            return data;
        }
        // simple sorting
        return data.sort(function (previous, current) {
            if (previous[columnName] > current[columnName]) {
                return sort === "desc" ? -1 : 1;
            }
            else if (previous[columnName] < current[columnName]) {
                return sort === "asc" ? -1 : 1;
            }
            return 0;
        });
    };
    ProcessListComponent.prototype.changeFilter = function (data, config) {
        var filteredData = data;
        config.sorting.columns.forEach(function (column) {
            if (column.filtering) {
                filteredData = filteredData.filter(function (item) {
                    if (item[column.name]) {
                        return item[column.name].match(column.filtering.filterString);
                    }
                    console.log("OOPS " + column.name);
                    return true;
                });
            }
        });
        if (!config.filtering) {
            return filteredData;
        }
        if (config.filtering.columnName) {
            return filteredData.filter(function (item) {
                if (item[config.filtering.columnName]) {
                    item[config.filtering.columnName].match(config.filtering.filterString);
                }
            });
        }
        var tempArray = [];
        filteredData.forEach(function (item) {
            var flag = false;
            config.sorting.columns.forEach(function (column) {
                if (item[column.name] &&
                    item[column.name].toString().match(config.filtering.filterString)) {
                    flag = true;
                }
            });
            if (flag) {
                tempArray.push(item);
            }
        });
        filteredData = tempArray;
        return filteredData;
    };
    ProcessListComponent.prototype.onChangeTable = function (config, page) {
        if (config === void 0) { config = this.getConfig(); }
        if (page === void 0) { page = { page: this.page, itemsPerPage: this.itemsPerPage }; }
        if (config.filtering) {
            Object.assign(config.filtering, config.filtering);
        }
        if (config.sorting) {
            Object.assign(config.sorting, config.sorting);
        }
        // Get the real data
        if (this.items) {
            var filteredData = this.changeFilter(this.items, config);
            var sortedData = this.changeSort(filteredData, config);
            this.rows =
                page && config.paging ? this.changePage(page, sortedData) : sortedData;
            this.length = sortedData.length;
        }
    };
    ProcessListComponent.prototype.getConfig = function () {
        if (this.prefs.typeSelected == "Process") {
            return this.configProcess;
        }
        else {
            return this.configRest;
        }
    };
    ProcessListComponent.prototype.onCellClick = function (data) {
        // console.log("clicked " + JSON.stringify(data))
        var r = data.row;
        this.selected = r.item;
    };
    ProcessListComponent.prototype.onListClick = function (r) {
        // console.log("clicked " + JSON.stringify(data))
        this.selected = r.item;
    };
    ProcessListComponent.prototype.edit = function () {
        if (this.selected) {
            this.router.navigate(["/edit", this.selected.data.id]);
        }
    };
    ProcessListComponent.prototype.view = function (r) {
        if (r) {
            this.router.navigate(["/view", r.item.data.id]);
        }
        if (this.selected) {
            this.router.navigate(["/view", this.selected.data.id]);
        }
    };
    ProcessListComponent.prototype.newItem = function () {
        this.router.navigate(["/edit"]);
    };
    ProcessListComponent.prototype.newEdge = function () {
        this.router.navigate(["/edit_edge"]);
    };
    Object.defineProperty(ProcessListComponent.prototype, "display", {
        get: function () {
            if (this.prefs.display) {
                return this.prefs.display;
            }
            return "table";
        },
        set: function (d) {
            this.prefs.display = d;
            this.savePrefs();
        },
        enumerable: true,
        configurable: true
    });
    ProcessListComponent.prototype.savePrefs = function () {
        var str = JSON.stringify(this.prefs);
        this.localStorage.set(this.LOCAL_STORAGE_KEY, str);
    };
    ProcessListComponent.prototype.isSelected = function (r) {
        if (this.selected) {
            return r.item.data.id == this.selected.data.id;
        }
        return false;
    };
    ProcessListComponent.prototype.key = function (event) {
        var _this = this;
        console.log("KEY " + event.keyCode);
        if (event.keyCode) {
            var dir = 0;
            if (event.keyCode == 38) {
                dir = -1;
            }
            else if (event.keyCode == 40) {
                dir = 1;
            }
            if (dir != 0) {
                var indx = 0;
                if (this.selected) {
                    indx = lodash__WEBPACK_IMPORTED_MODULE_4__["findIndex"](this.rows, function (i) { return i.item.data.id == _this.selected.data.id; });
                    indx += dir;
                    indx = Math.max(indx, 0);
                    indx = Math.min(indx, this.rows.length - 1);
                }
                console.log("KEY WORK " + indx);
                this.selected = this.rows[indx].item;
                event.preventDefault();
            }
        }
    };
    var ProcessListComponent_1;
    ProcessListComponent = ProcessListComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-process-list",
            template: __webpack_require__(/*! ./process-list.component.html */ "./src/app/process-list/process-list.component.html"),
            styles: [__webpack_require__(/*! ./process-list.component.css */ "./src/app/process-list/process-list.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            angular_2_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]])
    ], ProcessListComponent);
    return ProcessListComponent;
}());

var Prefs = /** @class */ (function () {
    function Prefs() {
        this.typeSelected = "Process";
        this.display = "table";
    }
    return Prefs;
}());
var Row = /** @class */ (function () {
    function Row() {
    }
    return Row;
}());


/***/ }),

/***/ "./src/app/report/report.component.css":
/*!*********************************************!*\
  !*** ./src/app/report/report.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".middle {\r\n  padding: 8px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/report/report.component.html":
/*!**********************************************!*\
  !*** ./src/app/report/report.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4> Dependency Report</h4>\n\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <span class=\"middle\">Report Items: </span>\n    <tag-input name=\"items\" [placeholder]=\"'Add'\" [secondaryPlaceholder]=\"'Type the name of an item'\" [separatorKeys]=\"separatorKeys\"\n      [(ngModel)]=\"items\" (onRemove)=\"onRemove($event)\" (onAdd)=\"onAdd($event)\" [onlyFromAutocomplete]=\"true\">\n      <tag-input-dropdown [autocompleteItems]=\"choices\" [showDropdownIfEmpty]=\"true\">\n      </tag-input-dropdown>\n    </tag-input>\n  </div>\n  <div class=\"row\">\n    <div class=\"btn-group btn-group-sm mb-1 mr-auto\" role=\"group\" data-toggle=\"buttons\">\n      <button class=\"btn btn-info btn-sm\" *ngFor=\"let t of types\" (click)=\"toggleFilter(t)\" [ngClass]=\"{'active': isFiltered(t)}\">{{t}}</button>\n    </div>\n  </div>\n</div>\n\n<div class=\"card\">\n  <div class=\"card-header\"><i class=\"fa fa-chevron-up mr-auto\" [ngClass]=\"c_1?'fa-chevron-up':'fa-chevron-down'\" aria-hidden=\"true\" (click)=\"c_1= !c_1\"\n      [attr.aria-expanded]=\"!c_1\" aria-controls=\"predecessors\"></i> Predecessors (All Generations)</div>\n  <div class=\"card-body\" id=\"predecessors\" [ngbCollapse]=\"c_1\">\n    <app-dependency-table [items]=\"strItems\" [dependencyType]=\"'predecessors'\" [filters]=\"prefs.filtered\"></app-dependency-table>\n  </div>\n</div>\n\n<div class=\"card\">\n  <div class=\"card-header\"><i class=\"fa fa-chevron-up mr-auto\" [ngClass]=\"c_2?'fa-chevron-up':'fa-chevron-down'\" aria-hidden=\"true\" (click)=\"c_2= !c_2\"\n      [attr.aria-expanded]=\"!c_2\" aria-controls=\"predecessors\"></i> Successors (All Generations)</div>\n  <div class=\"card-body\" id=\"successors\" [ngbCollapse]=\"c_2\">\n    <app-dependency-table [items]=\"strItems\" [dependencyType]=\"'successors'\" [filters]=\"prefs.filtered\"></app-dependency-table>\n  </div>\n</div>\n\n<div class=\"card\">\n  <div class=\"card-header\"><i class=\"fa fa-chevron-up mr-auto\" [ngClass]=\"c_3?'fa-chevron-up':'fa-chevron-down'\" aria-hidden=\"true\" (click)=\"c_3= !c_3\"\n      [attr.aria-expanded]=\"!c_3\" aria-controls=\"predecessors\"></i> Incomers (1 Generation)</div>\n  <div class=\"card-body\" id=\"incomers\" [ngbCollapse]=\"c_3\">\n    <app-dependency-table [items]=\"strItems\" [dependencyType]=\"'incomers'\" [filters]=\"prefs.filtered\"></app-dependency-table>\n  </div>\n</div>\n\n<div class=\"card\">\n  <div class=\"card-header\"><i class=\"fa fa-chevron-up mr-auto\" [ngClass]=\"c_4?'fa-chevron-up':'fa-chevron-down'\" aria-hidden=\"true\" (click)=\"c_4= !c_4\"\n      [attr.aria-expanded]=\"!c_4\" aria-controls=\"predecessors\"></i> Outgoers (1 Generation)</div>\n  <div class=\"card-body\" id=\"outgoers\" [ngbCollapse]=\"c_4\">\n    <app-dependency-table [items]=\"strItems\" [dependencyType]=\"'outgoers'\" [filters]=\"prefs.filtered\"></app-dependency-table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/report/report.component.ts":
/*!********************************************!*\
  !*** ./src/app/report/report.component.ts ***!
  \********************************************/
/*! exports provided: ReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportComponent", function() { return ReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/dist/index.js");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular_2_local_storage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReportComponent = /** @class */ (function () {
    function ReportComponent(dataSvc, localStorage) {
        var _this = this;
        this.dataSvc = dataSvc;
        this.localStorage = localStorage;
        this.LOCAL_STORAGE_KEY = "ReportComponent.PREFS";
        this.separatorKeys = [','];
        this.strItems = [];
        this.choices = new Array();
        this.types = [
            "Process", "Technology", "Library", "Data Type", "Intent", "Endpoint", "Algorithm"
        ];
        this.prefs = new Prefs();
        // Load Preferences 
        var str = this.localStorage.get(this.LOCAL_STORAGE_KEY);
        if (str) {
            this.prefs = JSON.parse(str);
        }
        // Get the data
        this.dataSvc.getDb().subscribe(function (db) {
            _this.db = db;
            if (db.graph) {
                db.graph.forEach(function (i) {
                    if (i.group == 'nodes') {
                        _this.choices.push({
                            display: i.data.label,
                            value: i.data.id
                        });
                    }
                });
                _this.choices.sort(function (a, b) {
                    return a.display.localeCompare(b.display);
                });
            }
        });
    }
    ReportComponent.prototype.isFiltered = function (l) {
        return lodash__WEBPACK_IMPORTED_MODULE_3__["includes"](this.prefs.filtered, l);
    };
    ReportComponent.prototype.toggleFilter = function (t) {
        // Toggle the filter
        var len = this.prefs.filtered.length;
        var success = lodash__WEBPACK_IMPORTED_MODULE_3__["without"](this.prefs.filtered, t);
        if (success.length == len) {
            success.push(t);
        }
        this.prefs.filtered = success;
        this.savePrefs();
    };
    Object.defineProperty(ReportComponent.prototype, "items", {
        set: function (i) {
            var newStr = [];
            i.forEach(function (newItem) {
                newStr.push(newItem.value);
            });
            this.strItems = newStr;
        },
        enumerable: true,
        configurable: true
    });
    ReportComponent.prototype.ngOnInit = function () {
    };
    ReportComponent.prototype.onAdd = function (itm) {
    };
    ReportComponent.prototype.onRemove = function (item) {
    };
    ReportComponent.prototype.savePrefs = function () {
        var str = JSON.stringify(this.prefs);
        this.localStorage.set(this.LOCAL_STORAGE_KEY, str);
    };
    ReportComponent.prototype.resetPreferences = function () {
        this.prefs = new Prefs();
    };
    ReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report',
            template: __webpack_require__(/*! ./report.component.html */ "./src/app/report/report.component.html"),
            styles: [__webpack_require__(/*! ./report.component.css */ "./src/app/report/report.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], angular_2_local_storage__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]])
    ], ReportComponent);
    return ReportComponent;
}());

var Prefs = /** @class */ (function () {
    function Prefs() {
        this.filtered = new Array();
    }
    return Prefs;
}());


/***/ }),

/***/ "./src/app/settings/settings.component.css":
/*!*************************************************!*\
  !*** ./src/app/settings/settings.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/settings/settings.component.html":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  settings works!\n</p>\n"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/stash.service.ts":
/*!**********************************!*\
  !*** ./src/app/stash.service.ts ***!
  \**********************************/
/*! exports provided: StashService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StashService", function() { return StashService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StashService = /** @class */ (function () {
    function StashService(http) {
        this.http = http;
        // rest/api/1.0/projects/PIR/repos/target-manager/browse/process.json
        this.username = " ";
        this.password = " ";
        this.https = "https://";
        this.stash_url = "bitbucket.di2e.net/";
        this.stash_api_part = "rest/api/1.0/projects/";
        this.stash_project = "PIR";
    }
    StashService_1 = StashService;
    StashService.prototype.getProcessesFile = function (repoName) {
        // https://bitbucket.di2e.net/rest/api/1.0/projects/PIR/repos/target-manager/browse/process.json
        var path = this.stash_url + this.stash_api_part + this.stash_project + "/repos/" + repoName + "/browse/process.json";
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]();
        myHeaders.set('Authorization', 'Basic ' + btoa(this.username + ':' + this.password));
        myHeaders.set('Access-Control-Allow-Origin', '*');
        var requestOptions = {
            method: 'GET',
            headers: myHeaders
        };
        return this.http.request(path, requestOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        }));
    };
    StashService.prototype.getRepos = function () {
        // "https://cors-anywhere.herokuapp.com/" +
        var path = this.stash_url + this.stash_api_part + this.stash_project + "/repos";
        // Uncomment for JSON Server (local)
        // path = "http://localhost:3000/values"
        // Uncomment for cors proxy
        // path = "https://localhost:1337/" + path
        var queryParameters = new URLSearchParams();
        queryParameters.set("limit", "1000");
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]();
        myHeaders.set('Authorization', 'Basic ' + btoa(this.username + ':' + this.password));
        myHeaders.set('Access-Control-Allow-Origin', '*');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: myHeaders });
        console.log("path " + path);
        console.log("OPTIONS" + JSON.stringify(options));
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            search: queryParameters
        };
        return this.http.get(path, requestOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(StashService_1.handleError));
    };
    StashService.handleError = function (error) {
        console.error(error);
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(error.json().error || 'Server error');
    };
    var StashService_1;
    StashService = StashService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"]])
    ], StashService);
    return StashService;
}());



/***/ }),

/***/ "./src/app/styles.ts":
/*!***************************!*\
  !*** ./src/app/styles.ts ***!
  \***************************/
/*! exports provided: Styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Styles", function() { return Styles; });
var Styles = /** @class */ (function () {
    function Styles() {
        this.styles = [{
                "selector": "node",
                "style": {
                    "content": "data(label)",
                    "font-size": "12px",
                    "text-valign": "center",
                    "text-halign": "center",
                    "background-color": "#555",
                    "text-outline-color": "#555",
                    "text-outline-width": "2px",
                    "color": "#fff",
                    "overlay-padding": "6px",
                    "z-index": "10"
                }
            }, {
                "selector": "node[?attr]",
                "style": {
                    "shape": "rectangle",
                    "background-color": "#aaa",
                    "text-outline-color": "#aaa",
                    "width": "16px",
                    "height": "16px",
                    "font-size": "6px",
                    "z-index": "1"
                }
            }, {
                "selector": "node[?query]",
                "style": {
                    "background-clip": "none",
                    "background-fit": "contain"
                }
            }, {
                "selector": "node:selected",
                "style": {
                    "border-width": "6px",
                    "border-color": "#AAD8FF",
                    "border-opacity": "0.5",
                    "background-color": "#77828C",
                    "text-outline-color": "#77828C"
                }
            }, {
                "selector": "edge",
                "style": {
                    'curve-style': 'bezier',
                    "opacity": "0.8",
                    "line-color": "#bbb",
                    "width": "1",
                    "overlay-padding": "3px",
                    "font-size": "6px"
                }
            }, {
                "selector": "node.unhighlighted",
                "style": {
                    "opacity": "0.2"
                }
            }, {
                "selector": "edge.arrow",
                "style": {
                    "target-arrow-shape": "triangle",
                    "target-arrow-color": "#bbb"
                }
            }, {
                "selector": "edge.version",
                "style": {
                    "content": "data(label)",
                }
            }, {
                "selector": "edge.unhighlighted",
                "style": {
                    "opacity": "0.05"
                }
            }, {
                "selector": ".highlighted",
                "style": {
                    "z-index": "999999"
                }
            }, {
                "selector": "node.highlighted",
                "style": {
                    "border-width": "6px",
                    "border-color": "#AAD8FF",
                    "border-opacity": "0.5",
                    "background-color": "#394855",
                    "text-outline-color": "#394855"
                }
            }, {
                "selector": "edge.filtered",
                "style": {
                    "opacity": "0"
                }
            }, {
                "selector": "node[type=\"Technology\"]",
                "style": {
                    "shape": "roundrectangle",
                    "background-color": "#ACB2B0",
                    "text-outline-color": "#ACB2B0"
                }
            }, {
                "selector": "node[type=\"Library\"]",
                "style": {
                    "shape": "bottomroundrectangle",
                    "background-color": "#ACB2B0",
                    "text-outline-color": "#ACB2B0"
                }
            }, {
                "selector": "node[type=\"Intent\"]",
                "style": {
                    "shape": "tag",
                    "background-color": "#BAB6AB",
                    "text-outline-color": "#BAB6AB"
                }
            }, {
                "selector": "node[type=\"Data Type\"]",
                "style": {
                    "shape": "triangle",
                    "background-color": "#BAB6AB",
                    "text-outline-color": "#BAB6AB"
                }
            }, {
                "selector": "node[type=\"Service\"]",
                "style": {
                    "shape": "tag",
                    "background-color": "#BAB6AB",
                    "text-outline-color": "#BAB6AB"
                }
            }, {
                "selector": "node[type=\"Endpoint\"]",
                "style": {
                    "shape": "ellipse",
                    "background-color": "#4682B4",
                    "text-outline-color": "#4682B4"
                }
            }, {
                "selector": "node.hidden",
                "style": {
                    "display": "none"
                }
            }, {
                "selector": "node.filtered",
                "style": {
                    "display": "none"
                }
            }, {
                "selector": "node.sized",
                "style": {
                    "width": "mapData(degree, 0, 50, 20, 50)",
                    "height": "mapData(degree, 0, 50, 20, 50)"
                }
            }];
    }
    Styles.prototype.setMaxSize = function (max) {
        var items = this.styles.filter(function (v) {
            return v.selector === "node.sized";
        });
        if (items.length == 1) {
            var found = items[0];
            var val = "mapData(degree, 0, " + max + ",20, 50)";
            found.style.width = val;
            found.style.height = val;
        }
    };
    return Styles;
}());



/***/ }),

/***/ "./src/app/summary-chart/summary-chart.component.css":
/*!***********************************************************!*\
  !*** ./src/app/summary-chart/summary-chart.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/summary-chart/summary-chart.component.html":
/*!************************************************************!*\
  !*** ./src/app/summary-chart/summary-chart.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"type\">\n  <div *ngSwitchCase=\"'pie'\">\n    <ngx-charts-pie-chart [scheme]=\"colorScheme\" [results]=\"items\" (select)=\"onSelect($event)\" [view]='view' [labels]=true></ngx-charts-pie-chart>\n  </div>\n  <div *ngSwitchCase=\"'pie_advanced'\">\n    <ngx-charts-advanced-pie-chart [scheme]=\"colorScheme\" [results]=\"items\" (select)=\"onSelect($event)\" [view]='view'></ngx-charts-advanced-pie-chart>\n  </div>\n  <div *ngSwitchCase=\"'pie_grid'\">\n    <ngx-charts-pie-grid [scheme]=\"colorScheme\" [results]=\"items\" (select)=\"onSelect($event)\" [view]='view'></ngx-charts-pie-grid>\n  </div>\n  <div *ngSwitchCase=\"'bar_v'\">\n    <ngx-charts-bar-vertical [scheme]=\"colorScheme\" [results]=\"items\" [xAxis]=\"true\" [yAxis]=\"true\" [legend]=\"false\" [showXAxisLabel]=\"false\"\n      [showYAxisLabel]=\"false\" (select)=\"onSelect($event)\" [view]='view'>\n    </ngx-charts-bar-vertical>\n  </div>\n  <div *ngSwitchCase=\"'bar_h'\">\n    <ngx-charts-bar-horizontal [scheme]=\"colorScheme\" [results]=\"items\" [xAxis]=\"'true'\" [yAxis]=\"'true'\" [legend]=\"'false'\"\n      [showXAxisLabel]=\"'false'\" [showYAxisLabel]=\"'false'\" (select)=\"onSelect($event)\" [view]='view'>\n    </ngx-charts-bar-horizontal>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/summary-chart/summary-chart.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/summary-chart/summary-chart.component.ts ***!
  \**********************************************************/
/*! exports provided: SummaryChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryChartComponent", function() { return SummaryChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SummaryChartComponent = /** @class */ (function () {
    function SummaryChartComponent() {
        this.colorScheme = {
            domain: ["#5AA454", "#A10A28", "#C7B42C", "#AAAAAA"]
        };
    }
    SummaryChartComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(SummaryChartComponent.prototype, "width", {
        set: function (w) {
            this.w = w;
            this.view = [this.w, this.h];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SummaryChartComponent.prototype, "height", {
        set: function (h) {
            this.h = h;
            this.view = [this.w, this.h];
        },
        enumerable: true,
        configurable: true
    });
    SummaryChartComponent.prototype.onSelect = function (event) {
        console.log("Selected");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SummaryChartComponent.prototype, "items", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SummaryChartComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], SummaryChartComponent.prototype, "width", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], SummaryChartComponent.prototype, "height", null);
    SummaryChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-summary-chart",
            template: __webpack_require__(/*! ./summary-chart.component.html */ "./src/app/summary-chart/summary-chart.component.html"),
            styles: [__webpack_require__(/*! ./summary-chart.component.css */ "./src/app/summary-chart/summary-chart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SummaryChartComponent);
    return SummaryChartComponent;
}());



/***/ }),

/***/ "./src/app/timeline/timeline.component.css":
/*!*************************************************!*\
  !*** ./src/app/timeline/timeline.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clickable {\r\n  cursor: pointer;\r\n}\r\n\r\n.timeline-event {\r\n  background-color: #9E9C9C\r\n}\r\n"

/***/ }),

/***/ "./src/app/timeline/timeline.component.html":
/*!**************************************************!*\
  !*** ./src/app/timeline/timeline.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4> Timeline</h4>\n<div class=\"sticky-top\">\n\n  <div class=\"btn-group btn-group-sm mb-1 mr-auto\" role=\"group\" data-toggle=\"buttons\" *ngIf=\"large\">\n    <button class=\"btn btn-info btn-sm\" *ngFor=\"let t of types\" (click)=\"toggleFilter(t.value)\" [ngClass]=\"{'active': isFiltered(t.value)}\">{{t.label}}</button>\n  </div>\n\n  <div ngbDropdown class=\"d-inline-block\" *ngIf=\"!large\">\n    <button class=\"btn btn-sm btn-info mb-1\" id=\"dropdownBasic1\" ngbDropdownToggle><i class=\"fa fa-filter\"></i> Types</button>\n    <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n      <button class=\"dropdown-item gutter\" *ngFor=\"let t of types\" (click)=\"toggleFilter(t)\"><i class=\"fa fa-check fa-fw check\" *ngIf=\"isFiltered(t)\"></i>{{t}}</button>\n    </div>\n  </div>\n\n  <div class=\"btn-group btn-group-sm mb-1\" role=\"group\" data-toggle=\"buttons\">\n    <button [disabled]=\"!selected\" class=\"btn btn-secondary btn-sm \" (click)=\"edit()\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> Edit </button>\n    <button class=\"btn btn-sm btn-secondary \" (click)=\"newItem()\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i> New Item</button>\n    <button class=\"btn btn-sm btn-secondary \" (click)=\"newEdge()\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i> New Link</button>\n  </div>\n\n</div>\n<div class=\"row\">\n  <div class=\"col-lg-9\">\n    <ngx-timeline [events]=\"events\">\n      <ng-template let-event let-index=\"rowIndex\" timelineHeader>\n        <div class=\"clickable\" id=\"{{event.id}}\" (click)=\"select(event)\">{{event.header}}</div>\n      </ng-template>\n      <ng-template let-event let-index=\"rowIndex\" timelinePoint>\n        <div class=\"clickable\" id=\"{{event.id}}\" (click)=\"select(event)\">{{event.header}}</div>\n      </ng-template>\n    </ngx-timeline>\n  </div>\n  <div class=\"col-lg-3\">\n    <div class=\" sticky-top\">\n      <app-view [item]=\"selected\"></app-view>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/timeline/timeline.component.ts":
/*!************************************************!*\
  !*** ./src/app/timeline/timeline.component.ts ***!
  \************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/dist/index.js");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular_2_local_storage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TimelineComponent = /** @class */ (function () {
    function TimelineComponent(data, elementRef, router, localStorage) {
        var _this = this;
        this.data = data;
        this.elementRef = elementRef;
        this.router = router;
        this.localStorage = localStorage;
        this.LOCAL_STORAGE_KEY = "TimelineComponent.PREFS";
        this.events = new Array();
        this.all = new Array();
        this.prefs = new Prefs();
        this.types = [];
        this.large = true;
        // Read Prefereces
        var str = this.localStorage.get(this.LOCAL_STORAGE_KEY);
        if (str) {
            this.prefs = JSON.parse(str);
        }
        var mq = window.matchMedia("(min-width: 992px)");
        this.large = mq.matches;
        mq.addListener(function (newMatch) {
            console.log("Media Query " + newMatch.matches + " IS LARGE");
            _this.large = newMatch.matches;
        });
        var newAll = [];
        this.data.cy.nodes().forEach(function (i) {
            var n = i._private;
            var t = _this.data.nodeType(n.data.type);
            if (t && t.hasDate) {
                var icon = "fa-calendar-o";
                switch (n.data.type) {
                    case "install":
                        icon = "fa-file-archive-o";
                        break;
                    case "release":
                        icon = "fa-gift";
                        break;
                    case "event":
                        icon = "fa-calendar-o";
                        break;
                }
                var date = _this.best(n.data.start_date, n.data.finish_date);
                if (date) {
                    var e = {
                        date: date,
                        header: n.data.label,
                        body: n.data.description,
                        icon: icon
                    };
                    e["id"] = n.data.id;
                    e["node"] = n;
                    newAll.push(e);
                }
            }
        });
        this.all = newAll;
        this.types = lodash__WEBPACK_IMPORTED_MODULE_4__["filter"](this.data.nodeTypes, function (i) { return i.hasDate; });
        this.update();
    }
    TimelineComponent.prototype.update = function () {
        var _this = this;
        var items = lodash__WEBPACK_IMPORTED_MODULE_4__["filter"](this.all, function (e) {
            // filter by type
            var n = e["node"];
            if (n) {
                return !_this.isFiltered(n.data.type);
            }
            return false;
        });
        var items2 = items.sort(function (a, b) {
            return a.date > b.date ? 1 : -1;
        });
        this.events = items;
    };
    TimelineComponent.prototype.isFiltered = function (l) {
        return lodash__WEBPACK_IMPORTED_MODULE_4__["includes"](this.prefs.filtered, l);
    };
    TimelineComponent.prototype.toggleFilter = function (t) {
        // Toggle the filter
        var len = this.prefs.filtered.length;
        var success = lodash__WEBPACK_IMPORTED_MODULE_4__["pull"](this.prefs.filtered, t);
        if (success.length == len) {
            this.prefs.filtered.push(t);
        }
        this.savePrefs();
        this.update();
    };
    TimelineComponent.prototype.select = function (event) {
        this.selected = event.meta;
    };
    TimelineComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.elementRef.nativeElement
            .querySelectorAll(".timeline-header")
            .forEach(function (item) {
            item.addEventListener("click", function (event) {
                _this.selected = _this.data.getItem(event.target.id);
            });
        });
    };
    TimelineComponent.prototype.best = function (d1, d2) {
        if (d1 && d2) {
            if (d1 > d2) {
                return d1;
            }
            else {
                return d2;
            }
        }
        else if (d1) {
            return d1;
        }
        else if (d2) {
            return d2;
        }
        return undefined;
    };
    TimelineComponent.prototype.ngOnInit = function () { };
    TimelineComponent.prototype.edit = function () {
        if (this.selected) {
            this.router.navigate(["/edit", this.selected.data.id]);
        }
    };
    TimelineComponent.prototype.view = function (r) {
        if (r) {
            this.router.navigate(["/view", r.item.data.id]);
        }
        if (this.selected) {
            this.router.navigate(["/view", this.selected.data.id]);
        }
    };
    TimelineComponent.prototype.newItem = function () {
        this.router.navigate(["/edit"]);
    };
    TimelineComponent.prototype.newEdge = function () {
        this.router.navigate(["/edit_edge"]);
    };
    TimelineComponent.prototype.savePrefs = function () {
        var str = JSON.stringify(this.prefs);
        this.localStorage.set(this.LOCAL_STORAGE_KEY, str);
    };
    TimelineComponent.prototype.resetPreferences = function () {
        this.prefs = new Prefs();
        this.savePrefs();
        this.update();
    };
    TimelineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-timeline",
            template: __webpack_require__(/*! ./timeline.component.html */ "./src/app/timeline/timeline.component.html"),
            styles: [__webpack_require__(/*! ./timeline.component.css */ "./src/app/timeline/timeline.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            angular_2_local_storage__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]])
    ], TimelineComponent);
    return TimelineComponent;
}());

var Prefs = /** @class */ (function () {
    function Prefs() {
        this.filtered = [""];
    }
    return Prefs;
}());


/***/ }),

/***/ "./src/app/type.pipe.ts":
/*!******************************!*\
  !*** ./src/app/type.pipe.ts ***!
  \******************************/
/*! exports provided: TypePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypePipe", function() { return TypePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TypePipe = /** @class */ (function () {
    function TypePipe(data) {
        this.data = data;
    }
    TypePipe.prototype.transform = function (value, args) {
        if (value) {
            var item = this.data.getItem(value);
            if (item) {
                return item.data.type;
            }
        }
        return null;
    };
    TypePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'type'
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], TypePipe);
    return TypePipe;
}());



/***/ }),

/***/ "./src/app/utils.ts":
/*!**************************!*\
  !*** ./src/app/utils.ts ***!
  \**************************/
/*! exports provided: Utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
var Utils = /** @class */ (function () {
    function Utils(localStorage, router, data, LOCAL_STORAGE_KEY, prefTemplate, onResetPrefs) {
        if (prefTemplate === void 0) { prefTemplate = {}; }
        this.localStorage = localStorage;
        this.router = router;
        this.data = data;
        this.LOCAL_STORAGE_KEY = LOCAL_STORAGE_KEY;
        this.prefTemplate = prefTemplate;
        this.onResetPrefs = onResetPrefs;
        this.large = false;
        this.readPrefs();
        this.watchMedia();
    }
    Utils.prototype.readPrefs = function () {
        // Read Prefereces
        var str = this.localStorage.get(this.LOCAL_STORAGE_KEY);
        if (str) {
            this.prefs = JSON.parse(str);
        }
        else {
            this.prefs = {};
            Object.assign(this.prefs, this.prefTemplate);
        }
    };
    Utils.prototype.watchMedia = function () {
        var _this = this;
        var mq = window.matchMedia("(min-width: 992px)");
        this.large = mq.matches;
        mq.addListener(function (newMatch) {
            console.log("Media Query " + newMatch.matches + " IS LARGE");
            _this.large = newMatch.matches;
        });
    };
    Utils.prototype.edit = function () {
        if (this.selected) {
            this.router.navigate(['/edit', this.selected.data.id]);
        }
    };
    Utils.prototype.view = function (r) {
        if (r) {
            this.router.navigate(['/view', r.item.data.id]);
        }
        if (this.selected) {
            this.router.navigate(['/view', this.selected.data.id]);
        }
    };
    Utils.prototype.newItem = function () {
        this.router.navigate(['/edit']);
    };
    Utils.prototype.newEdge = function () {
        this.router.navigate(['/edit_edge']);
    };
    Utils.prototype.savePrefs = function () {
        var str = JSON.stringify(this.prefs);
        this.localStorage.set(this.LOCAL_STORAGE_KEY, str);
    };
    Utils.prototype.resetPreferences = function () {
        this.prefs = {};
        Object.assign(this.prefs, this.prefTemplate);
        this.savePrefs();
        if (this.onResetPrefs) {
            this.readPrefs.apply(this);
        }
    };
    return Utils;
}());



/***/ }),

/***/ "./src/app/view/view.component.css":
/*!*****************************************!*\
  !*** ./src/app/view/view.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/view/view.component.html":
/*!******************************************!*\
  !*** ./src/app/view/view.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid sticky-top\" *ngIf=\"show\">\n  <div class=\"row justify-content-end\">\n    <button *ngIf=\"show\" class=\"btn btn-info btn-sm mr-1\" (click)=\"edit()\" type=\"button\">\n                        <i class=\"fa fa-pencil\" aria-hidden=\"true\"> Edit</i>\n                    </button>\n    <button *ngIf=\"show\" class=\"btn btn-secondary btn-sm\" (click)=\"cancel()\" type=\"button\">\n                        <i class=\"fa fa-ban\" aria-hidden=\"true\"> Cancel</i>\n                    </button>\n  </div>\n</div>\n<div class=\"container-fluid\" *ngIf=\"item && item.group == 'nodes'\">\n  <h4>{{item.data.label}}</h4>\n  <h6 class=\"text-muted mt-2 mb-2\">General Information</h6>\n  <h6>ID</h6>\n  <div class=\"mt-2 mb-2\">{{item.data.id}}</div>\n  <h6>Type</h6>\n  <div class=\"mt-2 mb-2\">{{item.data.type}}</div>\n  <h6>Version</h6>\n  <div class=\"mt-2 mb-2\"> {{item.data.version}}<span *ngIf=\"!item.data.version\" class=\"text-muted\">No Version</span></div>\n  <h6>Description</h6>\n  <div class=\"mt-2 mb-2\">{{item.data.description}}<span *ngIf=\"!item.data.description\" class=\"text-muted\">No Description</span></div>\n\n  <div *ngIf=\"isScheduled(item)\">\n    <h6 class=\"text-muted mt-3\">Scheduling</h6>\n    <h6>Status</h6>\n    <div class=\"mt-2 mb-2\">{{item.data.status}}<span *ngIf=\"!item.data.status\" class=\"text-muted\">No Scheduing Status</span></div>\n    <h6>Start Date</h6>\n    <div class=\"mt-2 mb-2\">{{item.data.start_date}}<span *ngIf=\"!item.data.start_date\" class=\"text-muted\">No Start Date</span></div>\n    <h6>Finish Date</h6>\n    <div class=\"mt-2 mb-2\">{{item.data.finish_date}}<span *ngIf=\"!item.data.finish_date\" class=\"text-muted\">No Finish Date</span></div>\n  </div>\n\n  <h6 class=\"text-muted mt-3\">Links / Edges</h6>\n  <div *ngFor=\"let link of links\" class=\"\">\n    <!-- <div class=\"btn-group btn-group-sm\" role=\"group\" data-toggle=\"buttons\">\n      <button class=\"btn btn-sm btn-light\"><i class=\"fa fa-pencil\"></i></button>\n      <button class=\"btn btn-sm btn-light\"><i class=\"fa fa-times\"></i></button>\n    </div> -->\n    <span class=\"badge badge-secondary\">{{link|type}}</span> {{link|label}}\n  </div>\n\n</div>\n<div class=\"container-fluid\" *ngIf=\"item && item.group == 'edges'\">\n  <h4>{{item.data.source|label}} <i class=\"fa fa-arrow-right\"></i> {{item.data.target|label}}</h4>\n  <h6 class=\"text-muted mt-2 mb-2\">General Information</h6>\n\n  <h6>ID</h6>\n  <div class=\"mt-2 mb-2\">{{item.data.id}}</div>\n  <h6>Type</h6>\n  <div class=\"mt-2 mb-2\">{{item.data.type}}</div>\n  <h6>Version</h6>\n  <div class=\"mt-2 mb-2\"> {{item.data.version}}<span *ngIf=\"!item.data.version\" class=\"text-muted\">No Version</span></div>\n  <h6>Source</h6>\n  <div class=\"mt-2 mb-2\">{{item.data.source|label}}</div>\n  <h6>Target</h6>\n  <div class=\"mt-2 mb-2\">{{item.data.target|label}}</div>\n\n  <!-- <h6 class=\"text-muted mt-3\">Scheduling</h6>\n  <h6>Status</h6>\n  <div class=\"mt-2 mb-2\">{{item.data.status}}<span *ngIf=\"!item.data.status\" class=\"text-muted\">No Scheduing Status</span></div>\n  <h6>Start Date</h6>\n  <div class=\"mt-2 mb-2\">{{item.data.start_date}}<span *ngIf=\"!item.data.start_date\" class=\"text-muted\">No Start Date</span></div>\n  <h6>Finish Date</h6>\n  <div class=\"mt-2 mb-2\">{{item.data.finish_date}}<span *ngIf=\"!item.data.finish_date\" class=\"text-muted\">No Finish Date</span></div> -->\n</div>\n"

/***/ }),

/***/ "./src/app/view/view.component.ts":
/*!****************************************!*\
  !*** ./src/app/view/view.component.ts ***!
  \****************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models */ "./src/app/models.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewComponent = /** @class */ (function () {
    function ViewComponent(route, db, router) {
        var _this = this;
        this.route = route;
        this.db = db;
        this.router = router;
        this.show = false;
        console.log("Created View");
        var id = this.route.snapshot.paramMap.get("id");
        this.route.paramMap.subscribe(function (p) {
            var id = p.get("id");
            if (id) {
                _this.item = _this.db.findItem(id);
                _this.show = true;
            }
        });
    }
    Object.defineProperty(ViewComponent.prototype, "item", {
        get: function () {
            return this._item;
        },
        set: function (i) {
            console.log("Setting Items " + i);
            if (i && i.data) {
                this._item = i;
                this.getLinks();
            }
        },
        enumerable: true,
        configurable: true
    });
    ViewComponent.prototype.ngOnInit = function () { };
    ViewComponent.prototype.getLinks = function () {
        var _this = this;
        if (this.item && this.item.data) {
            var edges = this.db.getEdgesWith(this.item.data.id);
            var _links_1 = [];
            edges.forEach(function (e) {
                if (e.data.target == _this.item.data.id) {
                    _links_1.push(e.data.source);
                }
                else {
                    _links_1.push(e.data.target);
                }
            });
            this.links = _links_1;
            // let groups = _.groupBy(edges, item => this.item.data.type)
            // this.links = groups
        }
    };
    ViewComponent.prototype.edit = function () {
        if (this.item) {
            this.router.navigate(["/edit", this.item.data.id]);
        }
    };
    ViewComponent.prototype.cancel = function () {
        window.history.back();
    };
    ViewComponent.prototype.isScheduled = function (item) {
        var nt = this.db.nodeType(item.data.type);
        if (nt) {
            return nt.hasDate;
        }
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models__WEBPACK_IMPORTED_MODULE_3__["GraphItem"]),
        __metadata("design:paramtypes", [_models__WEBPACK_IMPORTED_MODULE_3__["GraphItem"]])
    ], ViewComponent.prototype, "item", null);
    ViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-view",
            template: __webpack_require__(/*! ./view.component.html */ "./src/app/view/view.component.html"),
            styles: [__webpack_require__(/*! ./view.component.css */ "./src/app/view/view.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ViewComponent);
    return ViewComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\dev\projects\depends\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map