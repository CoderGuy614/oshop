import { AngularFireAuth} from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/app'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private afAuth: AngularFireAuth) {

   }

  login() {
    this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
  }

}
