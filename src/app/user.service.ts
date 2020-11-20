import { Observable } from 'rxjs';
import {AppUser} from './models/app-user'
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase/app'
import { flatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFirestore) { }

  save(user: firebase.User) {
    this.db.collection('users').doc(user.uid).set({
      name: user.displayName,
      email: user.email
    }).then(() => console.log("USER SUCCESSFULLY CREATED IN FIRESTORE")).catch(() => console.log("FIRESTORE COULDN'T SAVE THE USER"))
  }

  get(uid: string) {
    return this.db.collection('users', ref => ref.where('uid', '==', uid).limit(1)).valueChanges().pipe(flatMap(users => users))

  }

}
