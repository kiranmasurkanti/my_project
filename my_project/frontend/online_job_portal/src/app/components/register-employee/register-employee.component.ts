import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrl: './register-employee.component.css'
})
export class RegisterEmployeeComponent {
  employeeFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private service: EmployeeService,
    private router: Router) { }

  ngOnInit() {
    this.employeeFormGroup = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-z]*$')]],
      lastName: ['', [Validators.required, Validators.pattern('^[a-zA-z]*$')]],
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      contactNo: ['', [Validators.required, Validators.pattern('^[6-9][0-9]{9}$')]],
      street: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      pincode: ['', [Validators.required, Validators.pattern('[0-9]{6}$')]],
      country: ['', [Validators.required]],
     
    });

  }
  addEmployee() {
    if (this.employeeFormGroup.valid) {
      this.service.createEmployee(this.employeeFormGroup.value)
        .subscribe((data) => {
          alert("please check your email");
          this.router.navigate(['/login']);
        })
    } else {
      alert("Please fill all the fields correctly")
    }
  }

}
