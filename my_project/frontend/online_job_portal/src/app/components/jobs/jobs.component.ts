import { Component } from '@angular/core';
import { Job } from '../../common/job';
import { JobService } from '../../service/job.service';
import { ActivatedRoute, Router } from '@angular/router';
import { JobApplications } from '../../common/job-applications';
import { JobApplicationsService } from '../../service/job-applications.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent {
  jobs: Job[] = [];


  constructor(
    private service: JobService,
    private route: ActivatedRoute,
    private jaService: JobApplicationsService,
    private router: Router

  ) { }
  ngOnInit() {
    this.displayJobs();

  }

  displayJobs() {
    this.service.getJobs().subscribe((data) => {
      console.log(data);
      this.jobs = data;
    })
  }
  applyJob(ja: JobApplications) {
    // alert("You have applied for the job");

  }
  Logout() {
    localStorage.clear()
    this.router.navigateByUrl("/home-page")
  }

}
