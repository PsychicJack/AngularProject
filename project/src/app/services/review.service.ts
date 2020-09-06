import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL_Reviews } from 'src/config';
import { IReview } from '../models/review';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  constructor(private http: HttpClient) {}

  getReviewsForARestaurant(id: number) {
    return this.http.get<IReview[]>(`${API_URL_Reviews}?restaurantID=${id}`);
  }
  reviewRestaurant(review: IReview) {
    return this.http.post(API_URL_Reviews, JSON.stringify(review), {
      headers: new HttpHeaders().append('Content-Type', 'application/json'),
    });
  }
}
