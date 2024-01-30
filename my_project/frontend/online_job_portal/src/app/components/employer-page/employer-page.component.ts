import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-employer-page',
  templateUrl: './employer-page.component.html',
  styleUrl: './employer-page.component.css'
})
export class EmployerPageComponent {
  constructor(private router: Router) { }
  Logout() {
    localStorage.clear()
    this.router.navigateByUrl("/home-page")
  }

}
