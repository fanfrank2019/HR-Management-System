import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';
import {EmployeeService} from 'src/app/employee.service'
import { Employee } from '../employee';
//import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  submitted = false;
  employee: Observable<Employee>;
  username="jfan14"
  password="12345";
  passwordEntered:string;
  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    
  }

  /*validation(): boolean {
    this.employee = this.employeeService.getEmployeePass("sliu122");
    if(this.employee.password)
  }*/

  getPass(password) {
    this.passwordEntered=password;
  }

  onSubmit() {
    if(this.password == this.passwordEntered) {
      this.router.navigate(['/admin']);
    }else{
      this.submitted=true;
    }
    
  }

}
