import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL_Users } from 'src/config';
import { IUser } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string) {
    return this.http
      .get<IUser>(`${API_URL_Users}?userName=${username}&password=${password}`)
      .subscribe((data) => {
        if (data != null && data != undefined) {
          localStorage.setItem('userId', data.id.toString());
          this.router.navigate(['']);
        } else return -1;
      });
  }
}
