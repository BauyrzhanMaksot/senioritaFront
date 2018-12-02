import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ClientRequestService} from '../services/client-request.service';
import {StreetService} from '../../services/street.service';

@Component({
  selector: 'app-cl-dashboard',
  templateUrl: './cl-dashboard.component.html',
  styleUrls: ['./cl-dashboard.component.css']
})
export class ClDashboardComponent implements OnInit {

  clientForm: FormGroup;
  request: any;
  streets: any;
  constructor(private clientService: ClientRequestService,
              private streetService: StreetService) { }

  ngOnInit() {
    this.clientForm = new FormGroup({
      'pointA': new FormControl('', Validators.required),
      'pointB': new FormControl('', Validators.required),
      'price': new FormControl('', Validators.required)
    });
    this.getStreets();
  }

  getStreets() {
    this.streetService.getStreets().subscribe(data => {
      this.streets = data;
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
