import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css'],
})
export class RestaurantComponent implements OnInit {
  @Input() public restaurant;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClick(id) {
    this.router.navigate(["/restaurants", id]);
  }
}
