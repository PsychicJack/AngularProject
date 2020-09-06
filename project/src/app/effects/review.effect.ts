import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  LoadReview,
  REVIEW_TYPES,
  LoadReviewSuccess,
  LoadReviewFailure,
  AddReview,
  AddReviewFailure,
  RemoveReview,
  RemoveReviewFailure,
} from '../actions/review.actions';
import { ReviewService } from '../services/review.service';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ReviewEffects {

  @Effect() loadReviews$ = this.actions$.pipe(
    ofType<LoadReview>(REVIEW_TYPES.LOAD_REVIEWS),
    mergeMap((data) =>
      this.reviewService.getReviewsForARestaurant(1).pipe(
        map((data) => new LoadReviewSuccess(data)),
        catchError((error) => of(new LoadReviewFailure(error)))
      )
    )
  );

  @Effect() addReview$ = this.actions$.pipe(
    ofType<AddReview>(REVIEW_TYPES.ADD_REVIEW),
    mergeMap((data) =>
      this.reviewService.reviewRestaurant(data.payload).pipe(
        map(() => new AddReview(data.payload)),
        catchError((error) => of(new AddReviewFailure(error)))
      )
    )
  );

  @Effect() removeReview$ = this.actions$.pipe(
    ofType<RemoveReview>(REVIEW_TYPES.REMOVE_REVIEW),
    mergeMap((data) =>
      this.reviewService.deleteReview(data.payload).pipe(
        map(() => new RemoveReview(data.payload)),
        catchError((error) => of(new RemoveReviewFailure(error)))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private reviewService: ReviewService
  ) {}
}
