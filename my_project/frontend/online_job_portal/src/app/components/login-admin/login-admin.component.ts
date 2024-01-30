import { Component } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Admin } from '../../common/admin';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrl: './login-admin.component.css'
})
export class LoginAdminComponent {
  storage : Storage=localStorage
  constructor(private service: AdminService, private router: Router) { }
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    password: new FormControl('', [Validators.required, Validators.maxLength(30)]),
   adminId: new FormControl('', [Validators.required, Validators.maxLength(30)]),
  });
  login(insert: any) {
    console.log(this.loginForm);
  }
  get adminId() {
    return this.loginForm.get('adminId');

  }

  get emailId() {
    return this.loginForm.get('email');

  }
  get password() {
    return this.loginForm.get('password')
  }
  submit() {
    if (this.adminId?.value?.length === 0||this.emailId?.value?.length === 0 || this.password?.value?.length == 0 || this.adminId?.invalid ||this.emailId?.invalid || this.password?.invalid) {
      alert("enter valid details")
    }
    else {
      alert(JSON.stringify(this.loginForm.value))
      let admin: Admin = new Admin()
      admin.adminId=this.loginForm.value.adminId
      admin.emailId = this.loginForm.value.email
      admin.password = this.loginForm.value.password
      //admin.adminId=this.loginForm.value.adminId

      this.service.getAdminUser(admin).subscribe(
        data => {
          console.log(data)
          this.service.getAdminUser(admin).subscribe()
          this.storage.setItem('currentAdminUser', JSON.stringify( this.adminId?.value ));
          alert("loged in")
          this.router.navigate(['/admin-page'])
        },
        error => {
          alert("invalid credentials")
        }

      )
    }
  }

}
