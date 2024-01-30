import { Component } from '@angular/core';
import { JobApplicationsService } from '../../service/job-applications.service';
import { ActivatedRoute, Router } from '@angular/router';
import { JobApplications } from '../../common/job-applications';

@Component({
  selector: 'app-job-applications-by-jobid',
  templateUrl: './job-applications-by-jobid.component.html',
  styleUrl: './job-applications-by-jobid.component.css'
})
export class JobApplicationsByJobidComponent {

  jobapplications: JobApplications[] = [];
  constructor(private service: JobApplicationsService, private route: ActivatedRoute, private router: Router) {

  }
  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.displayJobApplications();
    })
  }
  displayJobApplications() {
    const theJobId: string | number | null = this.route.snapshot.paramMap.get("id");

    this.service.getJobApplicationsJobId(theJobId).subscribe((data) => {
      this.jobapplications = data;
    })
  }
  Logout() {
    localStorage.clear()
    this.router.navigateByUrl("/home-page")
  }
}
