import { Component } from '@angular/core';
import { EmployeeService } from '../../service/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../common/employee';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrl: './employee-profile.component.css'
})
export class EmployeeProfileComponent {
  employee: Employee = new Employee()
  storage: Storage = localStorage
  currentEmployeeId: string | null = null;
  constructor(private service: EmployeeService, private router: ActivatedRoute, private route: Router) {
    this.currentEmployeeId = this.storage.getItem('currentEmployee')
    this.currentEmployeeId = JSON.parse(this.currentEmployeeId ? this.currentEmployeeId : "");
    var token = this.currentEmployeeId
  }
  ngOnInit() {
    this.displayEmployeeProfile();
  }
  displayEmployeeProfile() {
    this.service.getEmployee(this.currentEmployeeId).subscribe((data) => {
      this.employee = data;

    })
  }
  Logout() {
    localStorage.clear()
    this.route.navigateByUrl("/home-page")
  }

}


