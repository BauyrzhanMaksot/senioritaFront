import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {LoginService} from './login.service';
import {Injectable} from '@angular/core';
import {CookieService} from 'angular2-cookie/core';

@Injectable()
export class AuthorizeInterceptor implements HttpInterceptor {

  constructor(private loginService: LoginService,
              private cookie: CookieService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (req.headers.get('noToken') === 'true' || this.cookie.get('token') === null)
      return next.handle(req);
    const newRequest = req.clone({
      headers: req.headers.set(
        'Authorization', 'Bearer ' + this.cookie.get('token')
      )
    });
    console.log(newRequest);
    return next.handle(newRequest);
  }
}
