import { Component, OnInit } from '@angular/core';
import {CurrentUser} from '../../model/current-user';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export let ROUTES: RouteInfo[];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  user: any;
  role: any = '';

  constructor(private currentUser: CurrentUser) { }

  ngOnInit() {
    this.user = JSON.parse(this.currentUser.getCurrentUser());
    this.role = this.user.role.name;
    if (this.role == 'client') {
      ROUTES = [
        { path: '/' + this.role + '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
        { path: '/' + this.role + '/user-profile', title: 'Client Profile',  icon: 'person', class: '' },
        { path: '/' + this.role + '/table-list', title: 'Offers',  icon: 'content_paste', class: '' },
        { path: '/' + this.role + '/history', title: 'History',  icon: 'library_books', class: '' },
        { path: '/' + this.role + '/long-term-request', title: 'Long Term Request', icon: '', class: ''}
      ];
    } else if (this.role == 'driver') {
      ROUTES = [
        { path: '/' + this.role + '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
        { path: '/' + this.role + '/user-profile', title: 'Driver Profile',  icon: 'person', class: '' },
        { path: '/' + this.role + '/table-list', title: 'Requests',  icon: 'content_paste', class: '' },
        { path: '/' + this.role + '/history', title: 'History',  icon: 'library_books', class: '' },
        { path: '/' + this.role + '/long-term-offer', title: 'Long Term Offer',  icon: '', class: '' },
        { path: '/' + this.role + '/current-offers', title: 'My Offers',  icon: '', class: '' },
        { path: '/' + this.role + '/current-requests', title: 'Accepted Requests', icon: '', class: ''}
      ];
    }
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }
}
