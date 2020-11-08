import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import {Employee} from 'src/app/employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  submitted=false;

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.submitted=false;
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }

  save() {
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Employee();
  }

  onSubmit() {
    this.submitted=true;
    this.save();
  }

}
