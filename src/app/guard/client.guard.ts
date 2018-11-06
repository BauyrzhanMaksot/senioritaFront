import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {CurrentUser} from '../model/current-user';

@Injectable()
export class ClientGuard implements CanActivate {

  constructor(private currentUser: CurrentUser,
              private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if ((JSON.parse(this.currentUser.getCurrentUser()) != null)  && !(JSON.parse(this.currentUser.getCurrentUser()).role.name == 'client')) {
      this.router.navigate(['forbidden']);
      return false;
    }
    if (JSON.parse(this.currentUser.getCurrentUser()) == null) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
