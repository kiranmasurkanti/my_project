import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../common/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl: string = "http://localhost:8181/myapp/admin"

  constructor(private http: HttpClient) { }

  getAdmin(): Observable<Admin[]> {
    return this.http.get<Admin[]>(this.baseUrl);
  }
  createAdmin(admin: Admin): Observable<Admin> {
    return this.http.post<Admin>(this.baseUrl, admin);
  }
  deleteAdmin(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + '/' + id);
  }
  //  getAdmin(id:number):Observable<Admin>{
  //   return this.http.get<Admin>(this.baseUrl+"/"+id);
  //  }
  updateAdmin(admin: Admin): Observable<any> {
    return this.http.put(this.baseUrl, admin);
  }
  getAdminUser(data: Admin): Observable<any> {
    return this.http.post(this.baseUrl + '/valid', data)
  }
}
