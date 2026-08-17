
import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'employees', component: EmployeesListComponent },
  { path: 'addemployee', component: AddEmployeeComponent },
  { path: 'editemployee/:id', component: EditEmployeeComponent },
  { path: 'employee/:id', component: EmployeeDetailsComponent }
];
