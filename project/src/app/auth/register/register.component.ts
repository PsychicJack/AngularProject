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
  public warning: string;

  constructor(public authService: AuthService) {}

  ngOnInit(): void {}

  register() {
    this.warning = '';
    if (this.repeatPassword != this.password) {
      this.warning = 'Passwords do not match!';
      return;
    }
    this.authService.checkIfUsernameIsTaken(this.username).subscribe((data) => {
      if (data[0] != undefined) {
        this.warning = 'Username is taken';
      } else {
        this.authService.register({
          username: this.username,
          password: this.password,
          role: 'user',
        });
      }
    });
  }
}
