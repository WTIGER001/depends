import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LocalStorageModule } from 'angular-2-local-storage';
import { SplitPaneModule } from 'ng2-split-pane/lib/ng2-split-pane';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { TagInputModule } from 'ngx-chips';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ProcessListComponent } from './process-list/process-list.component';
import { DependencyMatrixComponent } from './dependency-matrix/dependency-matrix.component';
import { DependencyGraphComponent } from './dependency-graph/dependency-graph.component';
import { ProcessViewComponent } from './process-view/process-view.component';
import { DataManagerComponent } from './data-manager/data-manager.component';
import { SettingsComponent } from './settings/settings.component';
import { ReportComponent } from './report/report.component';

import { DataService } from './data.service';
import { DependencyTableComponent } from './dependency-table/dependency-table.component';
import { EditorComponent } from './editor/editor.component';
import { ViewComponent } from './view/view.component';
import 'hammerjs';

const appRoutes: Routes = [
  { path: 'home', component: ProcessListComponent },
  { path: 'edit', component: EditorComponent },
  { path: 'edit/:id', component: EditorComponent },
  { path: 'view/:id', component: ViewComponent },
  { path: 'matrix', component: DependencyMatrixComponent },
  { path: 'graph', component: DependencyGraphComponent },
  { path: 'report', component: ReportComponent },
  { path: 'database', component: DataManagerComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProcessListComponent,
    ProcessViewComponent,
    DependencyMatrixComponent,
    DependencyGraphComponent,
    DataManagerComponent,
    SettingsComponent,
    ReportComponent,
    DependencyTableComponent,
    EditorComponent,
    ViewComponent
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
      prefix: 'depends',
      storageType: 'localStorage'
    }),
    SplitPaneModule,
    Ng2TableModule,
    TagInputModule
  ],
  providers: [
    DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
