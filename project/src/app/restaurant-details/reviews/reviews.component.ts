import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../../services/review.service';
import { IReview } from 'src/app/models/review';
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

  constructor(
    private reviewService: ReviewService,
    private route: ActivatedRoute,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.reviewService
      .getReviewsForARestaurant(this.route.snapshot.params.id)
      .subscribe((data) => {
        this.reviewList = data;
      });
  }
}
