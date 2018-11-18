import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import {LoginService} from './services/login.service';
import {Injectable} from '@angular/core';
import {catchError} from 'rxjs/operators';

@Injectable()
export class AuthorizeInterceptor implements HttpInterceptor {

  constructor(private loginService: LoginService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    if (req.headers.get('noToken') === 'true' || localStorage.getItem('token') === null) {
      return next.handle(req);
    }
    const newRequest = req.clone({
      headers: req.headers.set(
        'Authorization', 'Bearer ' + localStorage.getItem('token')
      )
    });

    console.log(newRequest + " Bauka " + localStorage.getItem('token'));

    return next.handle(newRequest).pipe( catchError(error => {
      if (error.status == '401') {
        this.loginService.logout();
      }
      throw new Error('error');
    }));
  }
}
