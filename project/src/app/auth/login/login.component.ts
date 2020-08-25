import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { IUser } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public username: string;
  public password: string;

  public warning: string;

  constructor(private authService: AuthService) {}

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
        const user : any = data;
        if (user.id == undefined) this.warning = 'user not found';
        else this.warning = 'user found ' + user.id;
      });
    }
  }
}
