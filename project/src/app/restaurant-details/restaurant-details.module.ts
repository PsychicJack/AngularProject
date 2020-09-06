import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ReviewComponent } from './reviews/review/review.component';
import { SubmitReviewComponent } from './reviews/submit-review/submit-review.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { ReviewReducer } from '../reducers/review.reducer';

@NgModule({
  declarations: [
    RestaurantDetailsComponent,
    ReviewsComponent,
    ReviewComponent,
    SubmitReviewComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    StoreModule.forRoot({
      review: ReviewReducer,
    }),
  ],
  exports: [RestaurantDetailsComponent],
})
export class RestaurantDetailsModule {}
