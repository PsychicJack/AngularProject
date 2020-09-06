import { Component, OnInit, Input } from '@angular/core';
import { Review, IReview } from '../../../models/review.model';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-submit-review',
  templateUrl: './submit-review.component.html',
  styleUrls: ['./submit-review.component.css'],
})
export class SubmitReviewComponent implements OnInit {
  @Input() restaurantID: number;
  public review: IReview = new Review();
  public reviewExists: boolean = false;
  constructor(public reviewService: ReviewService) {}

  ngOnInit(): void {
    this.reviewService
      .checkIfReviewExists(+localStorage.getItem('userID'), this.restaurantID)
      .subscribe((data) => {
        this.reviewExists = !(data[0] == undefined);
        if (this.reviewExists) this.review = data[0];
      });
  }

  submitClick() {
    this.review.restaurantID = this.restaurantID;
    this.review.userID = +localStorage.getItem('userID');
    this.reviewService.reviewRestaurant(this.review).subscribe(() => {
      window.location.reload();
    });
  }
  editClick() {
    this.reviewService.editReview(this.review).subscribe(() => {
      window.location.reload();
    });
  }
  deleteClick() {
    this.reviewService.deleteReview(this.review.id).subscribe(() => {
      console.log('deleted', this.review.id);
      window.location.reload();
    });
  }
}
