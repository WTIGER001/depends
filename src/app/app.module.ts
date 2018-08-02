import 'hammerjs';

import { isDevMode, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { LocalStorageModule } from 'angular-2-local-storage';
import { CalendarModule } from 'angular-calendar';
import { SplitPaneModule } from 'ng2-split-pane/lib/ng2-split-pane';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { TagInputModule } from 'ngx-chips';
import { NgxTimelineModule } from 'ngx-timeline';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DataManagerComponent } from './data-manager/data-manager.component';
import { DataService } from './data.service';
import { DependencyGraphComponent } from './dependency-graph/dependency-graph.component';
import { DependencyMatrixComponent } from './dependency-matrix/dependency-matrix.component';
import { DependencyTableComponent } from './dependency-table/dependency-table.component';
import { EdgelabelPipe } from './edgelabel.pipe';
import { EditorEdgeComponent } from './editor-edge/editor-edge.component';
import { EditorComponent } from './editor/editor.component';
import { GanttComponent } from './gantt/gantt.component';
import { LabelPipe } from './label.pipe';
import { MenuComponent } from './menu/menu.component';
import { NodetypelabelPipe } from './nodetypelabel.pipe';
import { ProcessListComponent } from './process-list/process-list.component';
import { ReportComponent } from './report/report.component';
import { SettingsComponent } from './settings/settings.component';
import { StashService } from './stash.service';
import { SummaryChartComponent } from './summary-chart/summary-chart.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TypePipe } from './type.pipe';
import { ViewComponent } from './view/view.component';

const appRoutes: Routes = [
  { path: "home", component: ProcessListComponent },
  { path: "edit", component: EditorComponent },
  { path: "edit_edge", component: EditorEdgeComponent },
  { path: "edit/:id", component: EditorComponent },
  { path: "edit_edge/:id", component: EditorEdgeComponent },
  { path: "view/:id", component: ViewComponent },
  { path: "matrix", component: DependencyMatrixComponent },
  { path: "graph", component: DependencyGraphComponent },
  { path: "report", component: ReportComponent },
  { path: "calendar", component: CalendarComponent },
  { path: "timeline", component: TimelineComponent },
  { path: "gantt", component: GanttComponent },
  { path: "database", component: DataManagerComponent },
  { path: "settings", component: SettingsComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", redirectTo: "/home" }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProcessListComponent,
    DependencyMatrixComponent,
    DependencyGraphComponent,
    DataManagerComponent,
    SettingsComponent,
    ReportComponent,
    DependencyTableComponent,
    EditorComponent,
    ViewComponent,
    LabelPipe,
    TypePipe,
    EditorEdgeComponent,
    CalendarComponent,
    TimelineComponent,
    GanttComponent,
    EdgelabelPipe,
    NodetypelabelPipe,
    SummaryChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    LocalStorageModule.withConfig({
      prefix: "depends",
      storageType: "localStorage"
    }),
    SplitPaneModule,
    Ng2TableModule,
    TagInputModule,
    CalendarModule.forRoot(),
    NgxTimelineModule,
    NgxChartsModule
  ],
  providers: [DataService, StashService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {

  }
}
