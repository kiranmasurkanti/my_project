import { Component } from '@angular/core';
import { Job } from '../../common/job';
import { JobService } from '../../service/job.service';
import { Router } from '@angular/router';
import { JobCategory } from '../../common/job-category';
import { Employer } from '../../common/employer';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css'
})
export class JobListComponent {
  jobs: Job[] = [];
  jobCategories: JobCategory[] = [];
  employers:Employer[]=[];

  constructor(private service: JobService, private router: Router) { }
  ngOnInit() {
    this.displayJobs();

  }

  displayJobs() {
    this.service.getJobs().subscribe((data) => {
      console.log(data);
      this.jobs = data;
    })
  }
  removeJob(id: number) {
    if (confirm("Are you sure to delete the job?")) {
      this.service.deleteJob(id).subscribe((data) => {
        alert("deleted")
        this.displayJobs();
      })
    }

  }
  showEdit(id: number) {
    this.router.navigate(['Job-edit', id]);
  }
  Logout() {
    localStorage.clear()
    this.router.navigateByUrl("/home-page" )
  }
}