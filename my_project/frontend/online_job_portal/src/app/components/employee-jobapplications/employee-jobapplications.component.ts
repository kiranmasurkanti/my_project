import { Component } from '@angular/core';
import { JobApplications } from '../../common/job-applications';
import { JobService } from '../../service/job.service';
import { JobApplicationsService } from '../../service/job-applications.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-jobapplications',
  templateUrl: './employee-jobapplications.component.html',
  styleUrl: './employee-jobapplications.component.css'
})
export class EmployeeJobapplicationsComponent {
  storage: Storage = localStorage
  jobApplications: JobApplications[] = [];
  //const  currentEmployeeId:string=this.storage.getItem('currentEmployee')
  currentEmployeeEmail: string | null = null;
  constructor(private service: JobApplicationsService, private route: ActivatedRoute, private router: Router) {
    this.currentEmployeeEmail = this.storage.getItem('currentEmployee')
    this.currentEmployeeEmail = JSON.parse(this.currentEmployeeEmail ? this.currentEmployeeEmail : "");
    var token = this.currentEmployeeEmail



  }
  ngOnInit() {

    this.route.paramMap.subscribe(() => {
      this.displayEmployeeJobApplications();
    })
  }

  displayEmployeeJobApplications() {
    this.service.getEmployeeJob(this.currentEmployeeEmail).subscribe((data) => {
      this.jobApplications = data
    })
  }
  Logout() {
    localStorage.clear()
    this.router.navigateByUrl('/home-page')
  }
}
