import { Component } from '@angular/core';
import { JobApplications } from '../../common/job-applications';
import { JobApplicationsService } from '../../service/job-applications.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-jobapplications',
  templateUrl: './list-jobapplications.component.html',
  styleUrl: './list-jobapplications.component.css'
})
export class ListJobapplicationsComponent {
jobAplications:JobApplications[]=[];
constructor(private service:JobApplicationsService,private router:Router){}
ngOnInit(){
  this.displayJobApplications();
}

displayJobApplications(){
  this.service.getAllJobApplications().subscribe((data)=>{
    this.jobAplications=data;
  })
}
Logout() {
  localStorage.clear()
  this.router.navigateByUrl("/home-page")
}
}
