import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {CurrentUser} from './current-user';

@Injectable()
export class DriverGuard implements CanActivate {

  constructor(private currentUser: CurrentUser,
              private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!(JSON.parse(this.currentUser.getCurrentUser()).role.name == 'driver')) {
      this.router.navigate(['forbidden']);
    }
    return true;
  }
}
