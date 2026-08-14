
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({providedIn:'root'})
export class EmployeeService{

employees:Employee[]=[
{id:1,name:'Ram',location:'Bangalore',email:'ram@mail.com',mobile:'9867512345'},
{id:2,name:'Raj',location:'Chennai',email:'raj@mail.com',mobile:'7867534521'},
{id:3,name:'Vinay',location:'Pune',email:'vinay@mail.com',mobile:'9975287450'}
];

getEmployees(){return this.employees.sort((a,b)=>a.id-b.id);}
getEmployee(id:number){return this.employees.find(e=>e.id==id);}
addEmployee(emp:Employee){emp.id=this.employees.length+1;this.employees.push(emp);}
updateEmployee(emp:Employee){
const i=this.employees.findIndex(e=>e.id==emp.id);
this.employees[i]=emp;
}
deleteEmployee(id:number){
this.employees=this.employees.filter(e=>e.id!==id);
}
}
