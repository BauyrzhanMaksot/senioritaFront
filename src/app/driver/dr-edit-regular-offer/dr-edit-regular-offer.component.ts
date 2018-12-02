import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {DriverService} from '../services/driver.service';
import {Offer} from '../dr-long-term-offer/offer';

@Component({
  selector: 'app-dr-edit-regular-offer',
  templateUrl: './dr-edit-regular-offer.component.html',
  styleUrls: ['./dr-edit-regular-offer.component.css']
})
export class DrEditRegularOfferComponent implements OnInit {

  driverRegularForm: FormGroup;
  id: number;
  offer: any;

  constructor(private driverService: DriverService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      console.log(this.id); // Print the parameter to the console.
      this.getOffer();
    });
  }

  getOffer() {
    this.driverService.getOffer(this.id).subscribe(data => {
      this.offer = data;
      console.log(data);
      this.setOffer();
    });
  }

  setOffer() {
    this.driverRegularForm = new FormGroup({
      'pointA': new FormControl(this.offer.pointA, Validators.required),
      'pointB': new FormControl(this.offer.pointB, Validators.required),
      'price': new FormControl(this.offer.price, Validators.required),
    });
  }

  updateOffer() {
    this.offer.pointA = this.driverRegularForm.get('pointA').value;
    this.offer.pointB = this.driverRegularForm.get('pointB').value;
    this.offer.price = this.driverRegularForm.get('price').value;
    this.driverService.updateOffer(this.offer).subscribe(data => {
      console.log(data);
    });
  }
}
