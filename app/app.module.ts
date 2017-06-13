import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent }   from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DepartmentListComponent }   from './department-list.component';
import { EmployeeListComponent }   from './employee-list.component';
import { routingComponents } from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule,
                 AppRoutingModule
                ],
  declarations: [ AppComponent ,routingComponents],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
