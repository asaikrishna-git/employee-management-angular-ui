
import { Component,OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
selector:'app-employees-list',
templateUrl:'./employees-list.component.html'
})
export class EmployeesListComponent implements OnInit{

employees:any[]=[];
filterText='';

constructor(private service:EmployeeService){}

ngOnInit(){this.load();}

load(){this.employees=this.service.getEmployees();}

delete(id:number){this.service.deleteEmployee(id);this.load();}

get filtered(){
if(!this.filterText)return this.employees;
return this.employees.filter(e=>e.name.toLowerCase().startsWith(this.filterText.toLowerCase()));
}
}
