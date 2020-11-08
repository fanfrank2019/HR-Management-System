import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from './../employee';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  submitted=false;
  updateId=0;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted=true;
    this.employeeService.updateEmployee(this.updateId, this.employee).subscribe(
      data => {
        console.log(data);
      },
      error => console.error());
  };

  getVal(updateId) {
    this.updateId=updateId;
  }


  

}
