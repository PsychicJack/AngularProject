import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { ActivatedRoute } from '@angular/router';
import { IRestaurant } from 'src/app/models/restaurant';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css'],
})
export class RestaurantDetailsComponent implements OnInit {
  public restaurnat: IRestaurant;

  constructor(
    private service: RestaurantService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id: number = parseInt(this.route.snapshot.paramMap.get('id'));
    this.service.getRestaurantById(id).subscribe((data) => {
      this.restaurnat = data;
    });
  }
}
