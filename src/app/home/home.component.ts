import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {Router} from '@angular/router';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: any;
  constructor(private appService: AppService,
              private router: Router,
              private loginService: LoginService) { }

  ngOnInit() {
    this.isAuthorized();
    this.getData();
  }

  isAuthorized() {
    if (localStorage.getItem('token') == null || localStorage.getItem('token') == undefined) {
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
    this.loginService.logout();
    this.router.navigate(['login']);
  }

}
