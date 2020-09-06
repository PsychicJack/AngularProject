import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../../services/review.service';
import { IReview } from 'src/app/models/review.model';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
})
export class ReviewsComponent implements OnInit {
  public reviewList: IReview[];
  public isLoggedIn: boolean;
  public restaurantID: number;

  constructor(
    private reviewService: ReviewService,
    private route: ActivatedRoute,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.restaurantID = this.route.snapshot.params.id;
    this.isLoggedIn = this.authService.isLoggedIn();
    this.reviewService
      .getReviewsForARestaurant(this.restaurantID)
      .subscribe((data) => {
        this.reviewList = data;
      });
  }
}
