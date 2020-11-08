import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { LoginComponent } from './login-page/login.component';
import { EmployeePageComponent } from './employee-page/employee-page.component'; 
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminPageComponent},
  {path: 'employee', component: EmployeePageComponent},
  {path: 'admin/add', component: AddEmployeeComponent},
  {path: 'admin/update', component: UpdateEmployeeComponent},
  {path: 'admin/delete', component: DeleteEmployeeComponent},
  {path: 'admin/employees', component: EmployeeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
