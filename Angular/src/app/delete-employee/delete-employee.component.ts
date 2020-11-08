import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  submitted=false;
  id=0;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  getVal(deleteId) {
    this.id = deleteId;
  }



  onSubmit() {
    this.submitted=true;
    this.employeeService.deleteEmployee(this.id).subscribe(
      data => {
        console.log(data);
      },
      error => console.log(error));
};
  

  



  
    
  

  

}
