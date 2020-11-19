import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import firebase from 'firebase/app'

@Injectable()

export class AuthService {
  user$: Observable<firebase.User>;
  constructor(private afAuth: AngularFireAuth) {
    this.user$ = afAuth.authState;
  }
  login() {
    this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
  }

  logout() {
    this.afAuth.signOut()
  }


}
