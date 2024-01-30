import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from '../common/job';
import { JobCategory } from '../common/job-category';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  baseUrl = "http://localhost:8181/myapp/job"
  jobsUrl = "http://localhost:8181/myapp"
  categoryUrl = "http://localhost:8181/myapp/category"

  constructor(private http: HttpClient) { }
  getJobList(theCategoryId: number | string | null): Observable<Job[]> {
    const searchUrl = `${this.baseUrl}/search/findByCategoryId=${theCategoryId}`
    return this.http.get<Job[]>(searchUrl);
  }
  searchJobs(theKeyword: string | null): Observable<Job[]> {
    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`
    return this.http.get<Job[]>(searchUrl);

  }
  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(`${this.baseUrl}`);
  }
  getJob(theJobId: number | string | null): Observable<Job> {
    const oneJobUrl = `${this.baseUrl}/${theJobId}`
    return this.http.get<Job>(oneJobUrl)
  }

  createJob(job: Job): Observable<Job> {
    return this.http.post<Job>(`${this.baseUrl}`, job);
  }
  deleteJob(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + '/' + id);
  }

  updateJob(job: Job): Observable<any> {
    return this.http.put(this.baseUrl, job)
  }
  getEmployerJob(theEmployerId: number | string | null): Observable<Job[]> {
    const employerJobUrl = `${this.jobsUrl}/jobsByEmployer/${theEmployerId}`
    return this.http.get<Job[]>(employerJobUrl);
  }
  getEmployerJobs(theEmployerEmail: string | null): Observable<Job[]> {
    const employerJobUrl = `${this.jobsUrl}/jobsByEmployers/${(theEmployerEmail)}`;
    return this.http.get<Job[]>(employerJobUrl);
  }
}
