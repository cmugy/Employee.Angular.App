import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import {EmployeeListComponent} from './employees/employee-list.component';
import {EmployeeService} from './employees/providers/EmployeeService';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent, EmployeeListComponent]
})
export class AppModule { }
