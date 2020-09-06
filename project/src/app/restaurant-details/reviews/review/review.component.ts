import { Component, OnInit, Input } from '@angular/core';
import { IReview } from 'src/app/models/review';
import { IUser } from 'src/app/models/user';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
})
export class ReviewComponent implements OnInit {
  @Input() review: IReview;
  public user: IUser;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUserById(this.review.userID).subscribe((data) => {
      console.log(data);
      this.user = data[0];
    });
  }
}
