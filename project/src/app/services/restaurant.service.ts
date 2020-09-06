import { Injectable } from '@angular/core';
import { API_URL_Restaurants } from '../../config';
import { HttpClient } from '@angular/common/http';
import { IRestaurant, Restaurant } from '../models/restaurant.model';
import { merge } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  constructor(private http: HttpClient) {}

  getAllRestaurants() {
    return this.http.get<IRestaurant[]>(API_URL_Restaurants);
  }

  getRestaurantById(id: number) {
    return this.http.get<Restaurant>(`${API_URL_Restaurants}/${id}`);
  }

  search(query: string, location) {
    let params1 = '',
      params2 = '';
    if (query != '' && query != undefined && query != null) {
      params1 += `name_like=${query}&`;
      params2 += `address_like=${query}&`;
    }
    if (location != '' && location != undefined && location != null) {
      params1 += `location=${location}`;
      params2 += `location=${location}`;
    }

    return merge(
      this.http.get<IRestaurant[]>(`${API_URL_Restaurants}?${params1}`),
      this.http.get<IRestaurant[]>(`${API_URL_Restaurants}?${params2}`)
    );
  }

  getDistinctLocations() {
    return this.http.get<IRestaurant[]>(API_URL_Restaurants);
  }
}
