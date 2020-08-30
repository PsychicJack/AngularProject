import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ReviewComponent } from './reviews/review/review.component';
import { SubmitReviewComponent } from './reviews/submit-review/submit-review.component';

@NgModule({
  declarations: [RestaurantDetailsComponent, ReviewsComponent, ReviewComponent, SubmitReviewComponent],
  imports: [CommonModule],
  exports: [RestaurantDetailsComponent],
})
export class RestaurantDetailsModule {}
