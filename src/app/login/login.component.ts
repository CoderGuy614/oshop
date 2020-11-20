import { UserService } from './../user.service';
import { AuthService } from './../auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private auth: AuthService, private userService: UserService ) {

   }

  login() {
    this.auth.login()
  }

  getUser() {
    return this.userService.getUser('5NAeTaryyxbBLfZr4p4cO3Yyrs72')
  }

}
