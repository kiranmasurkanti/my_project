import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employer } from '../common/employer';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {
  baseUrl: string = "http://localhost:8181/myapp/employer"


  constructor(private http: HttpClient) { }

  getEmployers(): Observable<Employer[]> {
    return this.http.get<Employer[]>(this.baseUrl);
  }
  createEmployer(employer: Employer): Observable<Employer> {
    return this.http.post<Employer>(this.baseUrl, employer);

  }
  deleteEmployer(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + '/' + id);
  }
  getEmployer(id: number): Observable<Employer> {
    return this.http.get<Employer>(this.baseUrl + '/' + id);
  }
  updateEmployer(employer: Employer): Observable<any> {
    return this.http.put(this.baseUrl, employer);
  }
  getEmployerUser(data: Employer): Observable<any> {
    return this.http.post(this.baseUrl + '/valid', data);
  }
}
