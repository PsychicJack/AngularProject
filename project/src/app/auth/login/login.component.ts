import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { IUser } from 'src/app/models/user';
import { wrapReference } from '@angular/compiler/src/render3/util';
import { isNumber } from '@ng-bootstrap/ng-bootstrap/util/util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public username: string;
  public password: string;

  public warning: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    this.warning = '';
    if (
      this.username == undefined ||
      this.password == undefined ||
      this.username == '' ||
      this.password == ''
    )
      this.warning = 'Please fill out both fields';
    else {
      this.authService.login(this.username, this.password).subscribe((data) => {
        let foundUser: IUser = undefined;
        data.forEach((user: IUser) => {
          if (user.username == this.username && user.password == this.password)
            foundUser = user;
        });
        if (foundUser == undefined) this.warning = 'User not found';
        else {
          localStorage.setItem('userId', foundUser.id.toString());
          this.router.navigate(['']);
        }
      });
    }
  }
}
