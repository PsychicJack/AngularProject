import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';

@NgModule({
  declarations: [RestaurantDetailsComponent],
  imports: [CommonModule],
  exports: [RestaurantDetailsComponent],
})
export class RestaurantDetailsModule {}
