import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../common/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl: string = "http://localhost:8181/myapp/employee"

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl);
  }
  createEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.baseUrl, employee);

  }
  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + '/' + id);
  }
  getEmployee(data: any): Observable<Employee> {
    return this.http.get<Employee>(this.baseUrl + '/' + data);
  }
  updateEmployee(employee: Employee): Observable<any> {
    return this.http.put(this.baseUrl, employee);
  }
  getEmployeeUser(data: Employee): Observable<any> {
    return this.http.post(this.baseUrl + '/valid', data);
  }
}
