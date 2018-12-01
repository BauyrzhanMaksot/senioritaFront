import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {CurrentUser} from '../model/current-user';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private currentUser: CurrentUser,
              private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (JSON.parse(this.currentUser.getCurrentUser()) == null) {
      return true;
    }
    if (JSON.parse(this.currentUser.getCurrentUser()).role.name == 'driver') {
      console.log('redirecting... Driver');
      this.router.navigate(['driver']);
      return false;
    }
    if (JSON.parse(this.currentUser.getCurrentUser()).role.name == 'client') {
      console.log('redirecting... Client');
      this.router.navigate(['client']);
      return false;
    }
    console.log(this.currentUser);
    this.currentUser.deleteCurrentUser();
    return true;
  }
}
