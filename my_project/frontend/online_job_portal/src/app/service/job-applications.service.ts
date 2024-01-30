import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobApplications } from '../common/job-applications';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class JobApplicationsService {
baseUrl="http://localhost:8181/myapp/jobApplication"
jobsUrl="http://localhost:8181/myapp"
  constructor(private http:HttpClient) { }

  getAllJobApplications():Observable<JobApplications[]>{
    return this.http.get<JobApplications[]>(`${this.baseUrl}`);
  }
  getEmployeeJob(theEmployeeId:Number|String|null):Observable<JobApplications[]>{
    const employeeJobUrl=`${this.jobsUrl}/jaes/${theEmployeeId}`
    return this.http.get<JobApplications[]>(employeeJobUrl);
  }
  // getEmployeeJob(data:any){
  //   const employeeJobUrl=`${this.jobsUrl}/jae`
  //   return this.http.post(employeeJobUrl,data);
  // }
  getEmployeeJobs(theEmployeeEmail:Number|String|null):Observable<JobApplications[]>{
    const employeeJobUrl=`${this.jobsUrl}/jae/${theEmployeeEmail}`
    return this.http.get<JobApplications[]>(employeeJobUrl);
  }
  addNewJobApplications(jobApplication:JobApplications):Observable<JobApplications>{
    return this.http.post<JobApplications>(this.baseUrl,jobApplication)
  }
  getJobApplicationsJobId(theJobId:number|string|null):Observable<JobApplications[]>{
    const jobIdUrl=`${this.jobsUrl}/jai/${theJobId}`
    return this.http.get<JobApplications[]>(jobIdUrl);
  }

}
