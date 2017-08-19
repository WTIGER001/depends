import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ProcessListComponent } from './process-list/process-list.component';
import { DependencyMatrixComponent } from './dependency-matrix/dependency-matrix.component';
import { DependencyGraphComponent } from './dependency-graph/dependency-graph.component';
import { ProcessViewComponent } from './process-view/process-view.component'

const appRoutes: Routes = [
  { path: 'home', component: ProcessListComponent },
  { path: 'process/:id', component: ProcessViewComponent },
  { path: 'matrix', component: DependencyMatrixComponent },
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
    DependencyGraphComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
