import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserDto} from '../userDto';
import {ClientRequestService} from '../client-request.service';

@Component({
  selector: 'app-client-request',
  templateUrl: './client-request.component.html',
  styleUrls: ['./client-request.component.css']
})
export class ClientRequestComponent implements OnInit {

  clientForm: FormGroup;
  clientRequests: any;
  request: any;
  constructor(private clientService: ClientRequestService) {
  }

  ngOnInit() {
    this.clientForm = new FormGroup({
      'pointA': new FormControl('', Validators.required),
      'pointB': new FormControl('', Validators.required),
      'price': new FormControl('', Validators.required)
    });
    this.getRequests();
  }

  getRequests() {
    this.clientService.getRequests().subscribe( data => {
      this.clientRequests = data;
    });
  }

  onSubmit() {
    this.request = new Object();
    this.request.pointA = this.clientForm.get('pointA').value;
    this.request.pointB = this.clientForm.get('pointB').value;
    this.request.price = this.clientForm.get('price').value;
    if (this.request.pointA == '' || this.request.pointB == '') {
      return null;
    }
    this.clientService.putRequest(this.request).subscribe(data => {
      console.log(data);
    });
  }
}
