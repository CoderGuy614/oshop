import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { map, switchMap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private userService: UserService) { }

  canActivate(): Observable<boolean> {
    // this.auth.user$.pipe(map(user => {
    //   this.userService.get(user.uid)
    // }) )

    return this.auth.user$
    .switchMap(user => this.userService.get(user.uid))

  }

}
