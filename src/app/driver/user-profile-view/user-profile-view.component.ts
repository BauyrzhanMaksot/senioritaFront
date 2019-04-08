import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DriverService} from '../services/driver.service';

@Component({
  selector: 'app-user-profile-view',
  templateUrl: './user-profile-view.component.html',
  styleUrls: ['./user-profile-view.component.css']
})
export class UserProfileViewComponent implements OnInit {

  user: any;
  userForm: any;

  constructor(private driverService: DriverService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.driverService.getUser().subscribe(
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
