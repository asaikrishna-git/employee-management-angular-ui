
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employees-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './employees-list.component.html'
})
export class EmployeesListComponent implements OnInit {

employees:any[]=[];
filterText='';
filterType='name';
filterOptions=[
  {value:'name',label:'Name'},
  {value:'location',label:'Location'},
  {value:'all',label:'All Fields'}
];

constructor(private service:EmployeeService){}

ngOnInit(){this.load();}

load(){this.employees=this.service.getEmployees();}

delete(id:number){this.service.deleteEmployee(id);this.load();}

get filtered(){
if(!this.filterText)return this.employees;
const searchTerm=this.filterText.toLowerCase();

switch(this.filterType){
case 'name':
return this.employees.filter(e=>e.name.toLowerCase().startsWith(searchTerm));
case 'location':
return this.employees.filter(e=>e.location.toLowerCase().startsWith(searchTerm));
case 'all':
return this.employees.filter(e=>
e.name.toLowerCase().includes(searchTerm)||
e.location.toLowerCase().includes(searchTerm)||
e.email.toLowerCase().includes(searchTerm)||
e.mobile.includes(searchTerm)
);
default:
return this.employees;
}
}
}
