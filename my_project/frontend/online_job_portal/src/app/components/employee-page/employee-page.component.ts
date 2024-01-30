import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrl: './employee-page.component.css'
})
export class EmployeePageComponent {
  constructor(private router: Router) { }
  Logout() {
    localStorage.clear()
    this.router.navigateByUrl("/home-page")
  }

}
