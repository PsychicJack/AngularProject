import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { IRestaurant, Restaurant } from 'src/app/models/restaurant';
import { NGB_DATEPICKER_DATE_ADAPTER_FACTORY } from '@ng-bootstrap/ng-bootstrap/datepicker/adapters/ngb-date-adapter';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css'],
})
export class RestaurantListComponent implements OnInit {
  public restaurantList: IRestaurant[] = [];

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.search('');
  }

  search(value) {
    this.restaurantList = [];
    this.restaurantService.search(value).subscribe((data) => {
      data.forEach((el) => {
        console.log(el);
        if (this.restaurantList.filter((el2) => el2.id == el.id).length == 0)
          this.restaurantList.push(el);
      });
    });
  }
}
