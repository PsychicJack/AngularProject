import { Component, OnInit, Input } from '@angular/core';
import { Review, IReview } from '../../../models/review';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-submit-review',
  templateUrl: './submit-review.component.html',
  styleUrls: ['./submit-review.component.css'],
})
export class SubmitReviewComponent implements OnInit {
  @Input() restaurantID: number;
  public review: IReview = new Review();
  constructor(public reviewService: ReviewService) {}

  ngOnInit(): void {}

  submitClick() {
    this.review.restaurantID = +this.restaurantID;
    this.review.userID = +localStorage.getItem('userID');
    this.reviewService.giveAReviewToARestaurant(this.review);
  }
}
