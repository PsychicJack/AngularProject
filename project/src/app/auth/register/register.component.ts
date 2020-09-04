import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public username: string;
  public password: string;
  public repeatPassword: string;

  constructor(public authService: AuthService) {}

  ngOnInit(): void {}

  register() {
    this.repeatPassword += 'a';
    this.authService.register({
      username: this.username,
      password: this.password,
      role: 'user',
    });
  }
}
