import { Component, OnInit } from '@angular/core';
import {DriverService} from '../services/driver.service';
import {ActivatedRoute} from '@angular/router';
import {Offer} from '../dr-long-term-offer/offer';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {StreetService} from '../../services/street.service';

@Component({
  selector: 'app-dr-edit-long-offer',
  templateUrl: './dr-edit-long-offer.component.html',
  styleUrls: ['./dr-edit-long-offer.component.css']
})
export class DrEditLongOfferComponent implements OnInit {

  driverLongForm: FormGroup;
  id: number;
  offer: any;
  days = [{days: 1, name: 'Monday'}, {days: 2, name: 'Tuesday'}, {days: 3, name: 'Wednesday'},
    {days: 4, name: 'Thursday'}, {days: 5, name: 'Friday'}, {days: 6, name: 'Saturday'},
    {days: 7, name: 'Sunday'}];
  streets;
  constructor(private driverService: DriverService,
              private route: ActivatedRoute,
              private streetService: StreetService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      console.log(this.id); // Print the parameter to the console.
      this.getOffer();
    });
  }

  getStreets() {
    this.streetService.getStreets().subscribe(data => {
      this.streets = data;
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
    this.driverLongForm = new FormGroup({
      'pointA': new FormControl(this.offer.pointA, Validators.required),
      'pointB': new FormControl(this.offer.pointB, Validators.required),
      'available_seats': new FormControl(this.offer.seats, Validators.required),
      'price': new FormControl(this.offer.price, Validators.required),
      'time': new FormControl(this.offer.time, Validators.required),
      'days_of_the_week': new FormControl('', Validators.required)
    });
    const arr = [];
    for (let i = 0; i < this.offer.days.length; i++) {
      arr[i] = this.offer.days[i].days;
    }
    this.driverLongForm.controls['days_of_the_week'].setValue(arr);
  }

  updateOffer() {
    this.offer.pointA = this.driverLongForm.get('pointA').value;
    this.offer.pointB = this.driverLongForm.get('pointB').value;
    this.offer.price = this.driverLongForm.get('price').value;
    this.offer.longTerm = true;
    this.offer.seats = this.driverLongForm.get('available_seats').value;
    this.offer.time = this.driverLongForm.get('time').value;
    for (let i = 0; i < this.driverLongForm.get('days_of_the_week').value.length; i++) {
      this.offer.days[i] = {days: this.driverLongForm.get('days_of_the_week').value[i]};
    }
    this.driverService.updateOffer(this.offer).subscribe(data => {
      console.log(data);
    });
  }
}
