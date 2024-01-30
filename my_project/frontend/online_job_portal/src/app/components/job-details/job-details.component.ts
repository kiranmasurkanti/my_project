import { Component } from '@angular/core';
import { Job } from '../../common/job';
import { JobService } from '../../service/job.service';
import { ActivatedRoute, Router } from '@angular/router';
import { JobApplicationsService } from '../../service/job-applications.service';
import { JobApplications } from '../../common/job-applications';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css'
})
export class JobDetailsComponent {
  job:Job=new Job();
  jobFormGroup: FormGroup;
  storage: Storage = localStorage
  employeeId:null|string=null;
  
  currentEmployeeId: string | null = null;
  constructor(
    private jobservice:JobService,private route:ActivatedRoute,private jobApplicationService:JobApplicationsService,private router:Router
  ){
    this.currentEmployeeId = this.storage.getItem('currentEmployee')
    this.currentEmployeeId = JSON.parse(this.currentEmployeeId ? this.currentEmployeeId : "");
    var token = this.currentEmployeeId
   
  }
  ngOnInit() {
    this.route.paramMap.subscribe(()=>{
      this.theProductDetails();
      this.jobFormGroup = new FormGroup({
        employee:new FormGroup({
         employeeId:new FormControl([''])
        }),
        job:new FormGroup({
          jobId:new FormControl([''])
        })
      })
    })
    

    
  }

  theProductDetails(){
    const theJobId:string|number|null=this.route.snapshot.paramMap.get("id");
    this.jobservice.getJob(theJobId).subscribe((data)=>{
      this.job=data;
    })
  }
apply(){
  if(this.jobFormGroup.valid){
    const jobApplication=this.jobFormGroup.value;
    this.jobApplicationService.addNewJobApplications(jobApplication).subscribe(
      (data)=>{
        alert("you  have successfully applied for the job")
        console.log(status)
      }
    )
    
  }
}
Logout() {
  localStorage.clear()
  this.router.navigateByUrl('/home-page')
}

}
