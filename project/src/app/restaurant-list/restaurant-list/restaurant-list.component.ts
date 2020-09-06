import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { IRestaurant } from 'src/app/models/restaurant.model';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css'],
})
export class RestaurantListComponent implements OnInit {
  public restaurantList: IRestaurant[] = [];

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.search({query: "", location: ""});
  }

  search(value) {
    this.restaurantList = [];
    this.restaurantService.search(value.query, value.location).subscribe((data) => {
      data.forEach((el) => {
        if (this.restaurantList.filter((el2) => el2.id == el.id).length == 0)
          this.restaurantList.push(el);
      });
    });
  }
}
