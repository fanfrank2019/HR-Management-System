import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClick1() {
    this.router.navigate(['/admin/add']);
  }

  onClick2() {
    this.router.navigate(['/admin/update']);
  }

  onClick3() {
    this.router.navigate(['/admin/delete']);
  }

  onClick4() {
    this.router.navigate(['/admin/employees']);
  }

  onClick5() {
    this.router.navigate(['login']);
    alert("you have logged out");
  }

}
