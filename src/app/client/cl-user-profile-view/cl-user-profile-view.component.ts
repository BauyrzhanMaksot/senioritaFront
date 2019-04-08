import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ClientService} from '../services/client.service';

@Component({
  selector: 'app-cl-user-profile-view',
  templateUrl: './cl-user-profile-view.component.html',
  styleUrls: ['./cl-user-profile-view.component.css']
})
export class ClUserProfileViewComponent implements OnInit {
  user: any;
  userForm: any;
  request: any;

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.clientService.getUser().subscribe(
      data => {
        this.user = data;
        console.log(this.user);
        this.setUser();
      }
    );
  }

  setUser() {
    this.userForm = new FormGroup({
      'first_name': new FormControl(this.user.firstName, Validators.required),
      'last_name': new FormControl(this.user.lastName, Validators.required),
      'address': new FormControl(this.user.address, Validators.required)
    });
  }

}
