import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL_Users } from 'src/config';
import { IUser } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string) {
    return this.http.get<IUser[]>(
      `${API_URL_Users}?username=${username}&password=${password}`
    );
  }

  logOut() {
    localStorage.removeItem('userID');
    this.router.navigate(['']);
  }

  register(user: any) {
    this.http
      .post(API_URL_Users, JSON.stringify(user), {
        headers: new HttpHeaders().append('Content-Type', 'application/json'),
      })
      .subscribe((response) => {
        this.router.navigate(['login']);
      });
  }

  checkIfUsernameIsTaken(username: string) {
    return this.http.get<IUser>(`${API_URL_Users}?username=${username}`);
  }

  isLoggedIn() {
    return (
      localStorage.getItem('userID') != null &&
      localStorage.getItem('userID') != undefined
    );
  }
}
