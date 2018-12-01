import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DriverOfferService} from '../services/driver-offer.service';

@Component({
  selector: 'app-dr-long-term-offer',
  templateUrl: './dr-long-term-offer.component.html',
  styleUrls: ['./dr-long-term-offer.component.css']
})
export class DrLongTermOfferComponent implements OnInit {

  driverLongForm: FormGroup;
  offer: any;

  days = [{days: 1, name: 'Monday'}, {days: 2, name: 'Tuesday'}, {days: 3, name: 'Wednesday'},
          {days: 4, name: 'Thursday'}, {days: 5, name: 'Friday'}, {days: 6, name: 'Saturday'},
          {days: 7, name: 'Sunday'}];

  constructor(private driverService: DriverOfferService) { }

  ngOnInit() {
    this.driverLongForm = new FormGroup({
      'pointA': new FormControl('', Validators.required),
      'pointB': new FormControl('', Validators.required),
      'available_seats': new FormControl('', Validators.required),
      'price': new FormControl('', Validators.required),
      'time': new FormControl('', Validators.required),
      'days_of_the_week': new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    console.log(this.driverLongForm);
    this.offer = new Object();
    this.offer.pointA = this.driverLongForm.get('pointA').value;
    this.offer.pointB = this.driverLongForm.get('pointB').value;
    this.offer.price = this.driverLongForm.get('price').value;
    this.offer.days = this.driverLongForm.get('days_of_the_week').value;
    console.log(this.offer);
    if (this.offer.pointA == '' || this.offer.pointB == '') {
      return null;
    }
    this.driverService.putOffer(this.offer).subscribe(data => {
      console.log(data);
    });
  }
}
