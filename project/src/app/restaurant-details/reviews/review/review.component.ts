import { Component, OnInit, Input } from '@angular/core';
import { IReview } from 'src/app/models/review';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
})
export class ReviewComponent implements OnInit {
  @Input() review: IReview;

  constructor() {}

  ngOnInit(): void {}
}
