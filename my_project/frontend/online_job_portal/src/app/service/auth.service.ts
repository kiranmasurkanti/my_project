import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private loginUrl = "http://localhost:8181/myapp/login"
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<string> {
    const credentials = { email, password };
    return this.http.post<string>(this.loginUrl, credentials);
  }
}
