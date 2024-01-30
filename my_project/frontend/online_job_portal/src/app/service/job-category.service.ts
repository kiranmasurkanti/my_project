import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { JobCategory } from '../common/job-category';


@Injectable({
  providedIn: 'root'
})
export class JobCategoryService {


  baseUrl: string = "http://localhost:8181/myapp/category"


  constructor(private http: HttpClient) { }
  getCategories(): Observable<JobCategory[]> {
    return this.http.get<JobCategory[]>(this.baseUrl);
  }
  createCategory(category: JobCategory): Observable<JobCategory> {
    return this.http.post<JobCategory>(this.baseUrl, category);
  }
  deleteCategory(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + "/" + id);
  }
  getCategoryById(id: number): Observable<JobCategory> {
    return this.http.get<JobCategory>(this.baseUrl + "/" + id);
  }
  updateCategory(category: JobCategory): Observable<any> {
    return this.http.put(this.baseUrl, category);
  }



}
