import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  public navList = [
    { text: 'Home', location: '' },
    { text: 'Register', location: 'register' },
  ];
  public loginRedirect = "login";
  public isLoggedIn: boolean;

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    this.isLoggedIn =
      localStorage.getItem('userId') != null &&
      localStorage.getItem('userId') != undefined;
  }

  logOutClick() {
    this.authService.logOut();
    location.reload();
  }
}
