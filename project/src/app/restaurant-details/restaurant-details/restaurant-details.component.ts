import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { ActivatedRoute } from '@angular/router';
import { IRestaurant, Restaurant } from 'src/app/models/restaurant';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css'],
})
export class RestaurantDetailsComponent implements OnInit {
  public restaurant: Restaurant;

  constructor(
    private restaurantService: RestaurantService,
    private reviewService: ReviewService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.restaurant = new Restaurant();
    const id: number = parseInt(this.route.snapshot.paramMap.get('id'));
    this.restaurantService.getRestaurantById(id).subscribe((data) => {
      Restaurant.copy(this.restaurant, data);
    });
    this.reviewService.getReviewsForARestaurant(id).subscribe((data) => {
      this.restaurant.numberOfReviews = data.length;
      this.restaurant.averageReview =
        data.map((el) => el.rating).reduce((sum, number) => sum + number) /
        data.length;
    });
  }
}
