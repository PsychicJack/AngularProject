import { Injectable } from '@angular/core';
import { API_URL_Restaurants } from '../../config';
import { HttpClient } from '@angular/common/http';
import { IRestaurant } from '../models/restaurant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  constructor(private http: HttpClient) {}

  getAllRestaurants() {
  /*  return new Observable((ob) => {
      ob.next([{ name: 'hello' }]);
    });*/
    return this.http.get<IRestaurant[]>(API_URL_Restaurants);
  }
}
