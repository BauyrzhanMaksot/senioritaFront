import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DriverService} from '../services/driver.service';
import {DriverOfferService} from '../services/driver-offer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  driverForm: FormGroup;
  offer: any;

  constructor(private driverService: DriverOfferService) { }

  ngOnInit() {
    this.driverForm = new FormGroup({
      'pointA': new FormControl('', Validators.required),
      'pointB': new FormControl('', Validators.required),
      'price': new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    this.offer = new Object();
    this.offer.pointA = this.driverForm.get('pointA').value;
    this.offer.pointB = this.driverForm.get('pointB').value;
    this.offer.price = this.driverForm.get('price').value;
    if (this.offer.pointA == '' || this.offer.pointB == '') {
      return null;
    }
    this.driverService.putOffer(this.offer).subscribe(data => {
      console.log(data);
    });
  }
}
