import { Component } from '@angular/core';
import { Job } from '../../common/job';
import { JobService } from '../../service/job.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from '../../service/auth.service';
import { Observable } from 'rxjs';
import { JobApplications } from '../../common/job-applications';

@Component({
  selector: 'app-employer-jobs',
  templateUrl: './employer-jobs.component.html',
  styleUrl: './employer-jobs.component.css'
})
export class EmployerJobsComponent {
  storage: Storage = localStorage
  jobs: Job[] = [];
  jobApplications:JobApplications[]=[];

  currentEmployerEmail: string | null = null;
  constructor(private service: JobService, private route: ActivatedRoute, private router: Router) {
    this.currentEmployerEmail = this.storage.getItem('currentEmployer');
    this.currentEmployerEmail = JSON.parse(this.currentEmployerEmail ? this.currentEmployerEmail : "");
    var token = this.currentEmployerEmail
      
   // alert(this.currentEmployerEmail)

  }

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.displayEmployerJobs();
    })
  }
  displayEmployerJobs() {
   
    this.service.getEmployerJob(this.currentEmployerEmail).subscribe((data) => {
      this.jobs = data
    })

   
  }
  Logout() {
    localStorage.clear()
    this.router.navigateByUrl("/home-page")
  }


}
