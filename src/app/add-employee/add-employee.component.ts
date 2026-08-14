import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html'
})
export class AddEmployeeComponent {
  employee: Employee = {
    id: 0,
    name: '',
    location: '',
    email: '',
    mobile: ''
  };

  constructor(private service: EmployeeService, private router: Router) {}

  save(): void {
    this.service.addEmployee({ ...this.employee });
    this.router.navigate(['/employees']);
  }
}
