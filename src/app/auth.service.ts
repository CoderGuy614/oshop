import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import firebase from 'firebase/app'
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()

export class AuthService {
  user$: Observable<firebase.User>;
  constructor(private afAuth: AngularFireAuth,  private route: ActivatedRoute, private router: Router) {
    this.user$ = afAuth.authState;
  }
  login() {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || "/";
    localStorage.setItem('returnUrl', returnUrl)
    this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  }

  logout() {
    this.afAuth.signOut()
  }


}
