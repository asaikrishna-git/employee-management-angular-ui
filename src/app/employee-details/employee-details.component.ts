import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './employee-details.component.html'
})
export class EmployeeDetailsComponent implements OnInit {
  employee?: Employee;

  constructor(private route: ActivatedRoute, private service: EmployeeService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.employee = this.service.getEmployee(id);
  }
}
