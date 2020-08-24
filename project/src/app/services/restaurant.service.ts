import { Injectable } from '@angular/core';
import { API_URL_Restaurants } from '../../config';
import { HttpClient } from '@angular/common/http';
import { IRestaurant } from '../models/restaurant';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  constructor(private http: HttpClient) {}

  getAllRestaurants() {
    return this.http.get<IRestaurant[]>(API_URL_Restaurants);
  }

  getRestaurantById(id: number) {
    return this.http.get<IRestaurant>(`${API_URL_Restaurants}/${id}`);
  }
}
