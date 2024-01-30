import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrl: './register-admin.component.css'
})
export class RegisterAdminComponent {
  adminFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private servie: AdminService,
    private router: Router) { }

  ngOnInit() {
    this.adminFormGroup = this.formBuilder.group({
      adminName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }
  addAdmin() {
    if (this.adminFormGroup.valid) {
      this.servie.createAdmin(this.adminFormGroup.value)
        .subscribe((data) => {
          alert("Admin added Successfully");
          console.log(data);
        })
    } else {
      alert("Please fill all fields correctly");
    }
  }
  Logout() {
    localStorage.clear()
    this.router.navigateByUrl("/home-page")
  }
}
