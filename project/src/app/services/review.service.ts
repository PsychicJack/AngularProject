import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL_Reviews } from 'src/config';
import { IReview } from "../models/review";

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  constructor(private http: HttpClient) {}

  getReviewsForARestaurant(id: number) {
    return this.http.get<IReview[]>(`${API_URL_Reviews}?restaurantID=${id}`);
  }
}
