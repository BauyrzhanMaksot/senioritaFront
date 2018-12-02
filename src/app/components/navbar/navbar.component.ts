import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from '../../services/login.service';
import {CurrentUser} from '../../model/current-user';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: any;
  role: any = '';
  private serverUrl = 'http://localhost:8080/bake/socket';
  private stompClient;

  constructor(private loginService: LoginService,
              private router: Router,
              private currentUser: CurrentUser) {
  }

  ngOnInit() {
    this.user = JSON.parse(this.currentUser.getCurrentUser());
    this.role = this.user.role.name;
    if (this.role == 'client') {
      this.initWebSocketConnectionClient();
    } else if (this.role == 'driver') {
      this.initWebSocketConnectionDriver();
    }
  }

  initWebSocketConnectionClient() {
    const ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(ws);
    const that = this;
    this.stompClient.connect({}, function(frame) {
      that.stompClient.subscribe('/bake/client', (message) => {
        if (message.body) {
          that.playAudio();
          $('#drm').append('<a class="dropdown-item"  style="cursor:pointer" href="http://localhost:4200/client/table-list">' + message.body + '</a>');
          const x: number = +$('#notification-length').text();
          $('#notification-length').text( x + 1);
          console.log(message.body, x);
        }
      });
    });
  }

  initWebSocketConnectionDriver() {
    const ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(ws);
    const that = this;
    this.stompClient.connect({}, function(frame) {
      that.stompClient.subscribe('/bake/driver', (message) => {
        if (message.body) {
          that.playAudio();
          $('#drm').append('<a class="dropdown-item"   style="cursor:pointer" href="http://localhost:4200/driver/table-list">' + message.body + '</a>');
          const x: number = +$('#notification-length').text();
          $('#notification-length').text( x + 1);
          console.log(message.body, x);
        }
      });
    });
  }

  onDriver() {
    this.router.navigate(['driver/table-list']);
  }

  onClient() {
    this.router.navigate(['client/table-list']);
  }

  playAudio() {
    let audio = new Audio();
    audio.src = '../assets/audio/Christmas-tone.mp3';
    audio.load();
    audio.play();
  }

  logout() {
    console.log('logout');
    this.loginService.logout();
    this.router.navigate(['login']);
  }
}
