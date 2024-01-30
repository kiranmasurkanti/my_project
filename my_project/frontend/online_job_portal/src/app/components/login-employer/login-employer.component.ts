import { Component } from '@angular/core';
import { EmployerService } from '../../service/employer.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employer } from '../../common/employer';

@Component({
  selector: 'app-login-employer',
  templateUrl: './login-employer.component.html',
  styleUrl: './login-employer.component.css'
})
export class LoginEmployerComponent {
  storage: Storage = localStorage
  constructor(private service: EmployerService, private router: Router) { }

  loginForm = new FormGroup({
    employerId: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    email: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    password: new FormControl('', [Validators.required, Validators.maxLength(30)]),

  });

  login(insert: any) {
    console.log(this.loginForm);
  }
  get employerId() {
    return this.loginForm.get("employerId");

  }
  get emailId() {

    return this.loginForm.get('email');

  }
  get password() {
    return this.loginForm.get('password')

  }
  submit() {
    if (this.employerId?.value?.length === 0 || this.emailId?.value?.length === 0 || this.password?.value?.length == 0 || this.employerId?.invalid || this.emailId?.invalid || this.password?.invalid) {
      alert("enter valid details")
    }
    else {
      alert(JSON.stringify(this.loginForm.value))
      let employer: Employer = new Employer()
      employer.employerId = this.loginForm.value.employerId
      employer.emailId = this.loginForm.value.email
      employer.password = this.loginForm.value.password


      this.service.getEmployerUser(employer).subscribe
        (
          data => {
            console.log(data)
            this.service.getEmployerUser(employer).subscribe()
            this.storage.setItem('currentEmployer', JSON.stringify(this.employerId?.value));
            alert("loged in")
            this.router.navigate(['/employer-page'])
          },
          error => {
            alert("invalid credentials")
          }

        )

    }
  }
}
