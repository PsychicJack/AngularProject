import { Injectable } from '@angular/core';
import { IUser } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { API_URL_Users } from 'src/config';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUserById(id: number) {
    return this.http.get<IUser>(`${API_URL_Users}?id=${id}`);
  }
}
