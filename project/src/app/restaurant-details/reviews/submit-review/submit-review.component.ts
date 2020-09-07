import { Component, OnInit, Input } from '@angular/core';
import { Review, IReview } from '../../../models/review.model';
import { ReviewService } from 'src/app/services/review.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { AddReview, RemoveReview } from 'src/app/actions/review.actions';

@Component({
  selector: 'app-submit-review',
  templateUrl: './submit-review.component.html',
  styleUrls: ['./submit-review.component.css'],
})
export class SubmitReviewComponent implements OnInit {
  @Input() restaurantID: number;
  public review: IReview = new Review();
  public reviewExists: boolean = false;
  constructor(
    public reviewService: ReviewService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.store.select('review');
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
    //this.store.dispatch(new AddReview(this.review));
   // this.reviewExists = true;
     this.reviewService.reviewRestaurant(this.review).subscribe(() => {
     // this.reviewExists = true;
      window.location.reload();
    });
  }
  editClick() {
    this.reviewService.editReview(this.review).subscribe(() => {
      window.location.reload();
    });
  }
  deleteClick() {
   // this.store.dispatch(new RemoveReview(this.review.id));
     this.reviewService.deleteReview(this.review.id).subscribe(() => {
      console.log('deleted', this.review.id);
      window.location.reload();
    });
  }
}
