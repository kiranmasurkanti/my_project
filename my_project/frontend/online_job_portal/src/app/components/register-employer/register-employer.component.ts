import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployerService } from '../../service/employer.service';

@Component({
  selector: 'app-register-employer',
  templateUrl: './register-employer.component.html',
  styleUrl: './register-employer.component.css'
})
export class RegisterEmployerComponent {
  employerFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private service: EmployerService,
    private router: Router) { }

  ngOnInit() {
    this.employerFormGroup = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-z]*$')]],
      lastName: ['', [Validators.required, Validators.pattern('^[a-zA-z]*$')]],
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      contactNo: ['', [Validators.required, Validators.pattern('^[6-9][0-9]{9}$')]],
      street: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      pincode: ['', [Validators.required, Validators.pattern('[0-9]{6}$')]],
      country: ['', [Validators.required]]

    });

  }
  addEmployer() {
    if (this.employerFormGroup.valid) {
      this.service.createEmployer(this.employerFormGroup.value)
        .subscribe((data) => {
          alert("Registration Successful");
          this.router.navigate(['/login-employer']);


        })
    } else {
      alert("Please fill all the fields correctly")
    }
  }
}
