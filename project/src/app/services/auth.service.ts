import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL_Users } from 'src/config';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.get<IUser>(
      `${API_URL_Users}?userName=${username}&password=${password}`
    );
  }
}
