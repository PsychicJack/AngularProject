import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { API_URL_Users } from 'src/config';
import { IUser } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    const params = new HttpParams()
      .set('username', username)
      .set('password', password);
    return this.http
      .get(`${API_URL_Users}?password=helloworld123`, { headers: headers})
     /* .subscribe((data) => {
        if (data.id != null && data.id != undefined) {
          localStorage.setItem('userId', data.id.toString());
          this.router.navigate(['/']);
        } else localStorage.setItem('userId', 'not found');
      });*/
  }
}
