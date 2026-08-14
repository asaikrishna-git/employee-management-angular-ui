import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html'
})
export class EditEmployeeComponent implements OnInit {
  employee: Employee = {
    id: 0,
    name: '',
    location: '',
    email: '',
    mobile: ''
  };

  constructor(
    private route: ActivatedRoute,
    private service: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const found = this.service.getEmployee(id);
    if (found) {
      this.employee = { ...found };
    }
  }

  update(): void {
    this.service.updateEmployee({ ...this.employee });
    this.router.navigate(['/employees']);
  }
}
