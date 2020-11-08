import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Observable } from 'rxjs';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Observable<Employee[]>;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.employees = this.employeeService.getEmployeeList();
  }

  

}
