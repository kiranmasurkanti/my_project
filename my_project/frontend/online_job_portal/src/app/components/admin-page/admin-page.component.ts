import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent {
  constructor(private router: Router) { }
  Logout() {
    localStorage.clear()
    this.router.navigateByUrl("/home-page")
  }


}
