import { Injectable } from '@angular/core';
import { API_URL_Restaurants } from '../../config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  constructor(private http: HttpClient) {}

  getAllRestaurants() {
    return this.http.get(API_URL_Restaurants);
  }
}
