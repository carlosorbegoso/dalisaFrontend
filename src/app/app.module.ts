import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeListComponent } from './employee/list/employe-list.component';
import { EmployeSaveComponent } from './employee/save/employe-save.component';
import { EmployeUpdateComponent } from './employee/update/employe-update.component';
import { EmployeeComponent } from './models/employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeListComponent,
    EmployeSaveComponent,
    EmployeUpdateComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
