import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../../services/review.service';
import { IReview } from 'src/app/models/review.model';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { Observable } from 'rxjs';
import { LoadReview } from 'src/app/actions/review.actions';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
})
export class ReviewsComponent implements OnInit {
  public reviewList: IReview[];
  public isLoggedIn: boolean;
  public restaurantID: number;

  public reviewList$: Observable<Array<IReview>>;
  public loading$: Observable<Boolean>;
  public error$: Observable<Error>;

  constructor(
    private reviewService: ReviewService,
    private route: ActivatedRoute,
    public authService: AuthService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.reviewList$ = this.store.select((store) => store.review.list);
    this.loading$ = this.store.select((store) => store.review.loading);
    this.error$ = this.store.select((store) => store.review.error);
    
    this.restaurantID = this.route.snapshot.params.id;
    console.log("ovo je restID", this.restaurantID)
    this.store.dispatch(new LoadReview(this.restaurantID));

    this.isLoggedIn = this.authService.isLoggedIn();
    this.reviewService
      .getReviewsForARestaurant(this.restaurantID)
      .subscribe((data) => {
        this.reviewList = data;
      });
  }
}
