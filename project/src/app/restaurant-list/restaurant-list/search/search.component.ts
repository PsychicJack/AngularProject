import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @Output() public searchEvent = new EventEmitter();
  public locations: string[] = undefined;
  public selectedLocation: string;
  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.locations = [];
    this.restaurantService.getDistinctLocations().subscribe((data) => {
      this.locations = [...new Set(data.map((el) => el.location))];
    });
  }
  search(value: string) {
    this.searchEvent.emit(value);
  }
}
