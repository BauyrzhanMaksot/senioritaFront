import { Component, OnInit } from '@angular/core';
import {CookieService} from 'angular2-cookie/core';
import {AppService} from '../app.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: any;
  constructor(private appService: AppService,
              private cookie: CookieService,
              private router: Router) { }

  ngOnInit() {
    console.log('zhandos');
    console.log(this.cookie.get('token'));
    this.isAuthorized();
    this.getData();
  }

  isAuthorized() {
    if (this.cookie.get('token') == null || this.cookie.get('token') == undefined) {
      this.router.navigate(['login']);
    }
  }

  getData() {
    this.appService.getData().subscribe( data => {
      console.log(data);
    });
    this.appService.getData2().subscribe(data => {
      console.log(data);
    });
    this.appService.getData3().subscribe(data => {
      console.log(data);
      this.user = data;
    });
  }

  logout() {
    console.log('logout');
    this.cookie.removeAll();
    this.router.navigate(['login']);
  }

}
