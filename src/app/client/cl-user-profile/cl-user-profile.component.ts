import { Component, OnInit } from '@angular/core';
import {ClientService} from '../services/client.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-cl-user-profile',
  templateUrl: './cl-user-profile.component.html',
  styleUrls: ['./cl-user-profile.component.css']
})
export class ClUserProfileComponent implements OnInit {

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

  onSubmit() {
    this.user.firstName = this.userForm.get('first_name').value;
    this.user.lastName = this.userForm.get('last_name').value;
    this.user.address = this.userForm.get('address').value;
    this.clientService.updateUser(this.user).subscribe(data => {
      console.log(data);
    });
  }
}
