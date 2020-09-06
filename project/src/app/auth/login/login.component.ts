import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { IUser } from 'src/app/models/user.model';
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
        console.log(data);
        if (data[0] == undefined) this.warning = 'User not found';
        else {
          localStorage.setItem('userID', data[0].id.toString());
          localStorage.setItem('userRole', data[0].role);
          //this.router.navigate(['']);
          window.location.href = 'http://localhost:4200/';
        }
      });
    }
  }
}
