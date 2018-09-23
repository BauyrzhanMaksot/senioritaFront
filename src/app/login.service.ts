import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient,
              private router: Router) { }


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
    return this.http.post(`/rest/oauth/token`, request.toString(), {headers: headers}).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/zhandos']);
      }
    );
  }
}
