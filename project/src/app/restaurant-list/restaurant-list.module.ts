import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantComponent } from './restaurant-list/restaurant/restaurant.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './restaurant-list/search/search.component';

@NgModule({
  declarations: [RestaurantListComponent, RestaurantComponent, SearchComponent],
  imports: [CommonModule, FormsModule],
  exports: [RestaurantListComponent],
})
export class RestaurantListModule {}
