import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
     ROUTES = [
      { path: '/driver/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
      { path: '/driver/user-profile', title: 'User Profile',  icon: 'person', class: '' },
      { path: '/driver/table-list', title: 'Requests',  icon: 'content_paste', class: '' },
      { path: '/driver/history', title: 'History',  icon: 'library_books', class: '' },
    ];
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }
}
