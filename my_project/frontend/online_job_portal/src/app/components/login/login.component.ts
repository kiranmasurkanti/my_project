import { Component, OnInit } from '@angular/core';

import { AuthServiceService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { EmployeeService } from '../../service/employee.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../../common/employee';
import { Employer } from '../../common/employer';
import { EmployerService } from '../../service/employer.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  storage: Storage = localStorage

  constructor(private employeeService: EmployeeService, private router: Router) { }

  players: any;
  loginForm = new FormGroup({
    employeeId:new FormControl('', [Validators.required, Validators.maxLength(30)]),
    email: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    password: new FormControl('', [Validators.required, Validators.maxLength(30)]),

  });
  login(insert: any) {
    console.log(this.loginForm);
  }
  get employeeId(){
    return this.loginForm.get("employeeId");
  }
  get emailId() {
    return this.loginForm.get('email');

  }
  get password() {
    return this.loginForm.get('password')
  }
  submit() {
    if (this.employeeId?.value?.length === 0||this.emailId?.value?.length === 0 || this.password?.value?.length == 0 || this.employeeId?.invalid || this.emailId?.invalid || this.password?.invalid) {
      alert("enter valid details")
    }
    else {
      alert(JSON.stringify(this.loginForm.value))
      let employee: Employee = new Employee()
      
      employee.employeeId=this.loginForm.value.employeeId
      employee.emailId = this.loginForm.value.email
      employee.password = this.loginForm.value.password



      this.employeeService.getEmployeeUser(employee).subscribe
        (
          data => {
            console.log(data)
            this.employeeService.getEmployeeUser(employee).subscribe()
            this.storage.setItem('currentEmployee', JSON.stringify(this.employeeId?.value));
            alert("loged in")
            this.router.navigate(['/employee-page'])
          },
          error => {
            alert("invalid credentials")
          }

        )

    }
  }


  submit1() {
    localStorage.setItem('currentUser', JSON.stringify(this.employeeId?.value ));
    this.router.navigate(['/forgotpassword']);
  }





}
