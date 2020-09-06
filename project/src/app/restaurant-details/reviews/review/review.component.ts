import { Component, OnInit, Input } from '@angular/core';
import { IReview } from 'src/app/models/review';
import { IUser } from 'src/app/models/user';
import { UserService } from '../../../services/user.service';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
})
export class ReviewComponent implements OnInit {
  @Input() review: IReview;
  public user: IUser;
  public role: string = 'user';

  constructor(
    private userService: UserService,
    private reviewService: ReviewService
  ) {}

  ngOnInit(): void {
    this.role = localStorage.getItem('userRole');
    this.userService.getUserById(this.review.userID).subscribe((data) => {
      this.user = data[0];
    });
  }

  deleteReview(): void {
    this.reviewService.deleteReview(this.review.id).subscribe(() => {
      window.location.reload();
    });
  }
}
