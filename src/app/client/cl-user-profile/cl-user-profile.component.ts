import { Component, OnInit } from '@angular/core';
import {ClientService} from '../services/client.service';

@Component({
  selector: 'app-cl-user-profile',
  templateUrl: './cl-user-profile.component.html',
  styleUrls: ['./cl-user-profile.component.css']
})
export class ClUserProfileComponent implements OnInit {

  user: any;

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.clientService.getUser().subscribe(
      data => {
        this.user = data;
      }
    );
  }
}
