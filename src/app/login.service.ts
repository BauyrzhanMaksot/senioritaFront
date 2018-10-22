import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {AppService} from './app.service';
import {CookieService} from 'angular2-cookie/core';

@Injectable()
export class LoginService {

  token = '';

  constructor(private http: HttpClient,
              private router: Router,
              private appService: AppService,
              private cookie: CookieService) { }


  prepare(obj): any {
    const searchParams: URLSearchParams = new URLSearchParams();
    for (const key in obj) {
        searchParams.set(key, obj[key]);
    }
    return searchParams;
  }

  login(login, password) {
    let request = {
      grant_type: 'password',
      username: login,
      password: password
    };
    const encoded = btoa(`client:secret`);
    request = this.prepare(request);
    const headers = new HttpHeaders({
      'Authorization': `Basic ` + encoded,
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      'noToken': 'true'
    });
    return this.http.post<any>(`/rest/oauth/token`, request.toString(), {headers: headers});
  }

  logout() {
    localStorage.clear();
  }
}
