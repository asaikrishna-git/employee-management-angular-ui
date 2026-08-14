
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

const routes:Routes=[
{path:'',component:MainComponent},
{path:'employees',component:EmployeesListComponent},
{path:'addemployee',component:AddEmployeeComponent},
{path:'editemployee/:id',component:EditEmployeeComponent},
{path:'employee/:id',component:EmployeeDetailsComponent}
];

@NgModule({
declarations:[
AppComponent,
MainComponent,
EmployeesListComponent,
AddEmployeeComponent,
EditEmployeeComponent,
EmployeeDetailsComponent
],
imports:[BrowserModule,FormsModule,RouterModule.forRoot(routes)],
bootstrap:[AppComponent]
})
export class AppModule{}
