import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DriverOfferService} from '../services/driver-offer.service';
import {Offer} from './offer';
import {CurrentUser} from '../../model/current-user';
import {StreetService} from '../../services/street.service';
import {ToastsManager} from 'ng2-toastr';

@Component({
  selector: 'app-dr-long-term-offer',
  templateUrl: './dr-long-term-offer.component.html',
  styleUrls: ['./dr-long-term-offer.component.css']
})
export class DrLongTermOfferComponent implements OnInit {

  driverLongForm: FormGroup;
  offer: any;
  streets: any;
  days = [{days: 1, name: 'Monday'}, {days: 2, name: 'Tuesday'}, {days: 3, name: 'Wednesday'},
          {days: 4, name: 'Thursday'}, {days: 5, name: 'Friday'}, {days: 6, name: 'Saturday'},
          {days: 7, name: 'Sunday'}];

  constructor(private driverService: DriverOfferService,
              private currentUser: CurrentUser,
              private streetService: StreetService,
              public toastr: ToastsManager,
              vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr); }

  ngOnInit() {
    this.driverLongForm = new FormGroup({
      'pointA': new FormControl('', Validators.required),
      'pointB': new FormControl('', Validators.required),
      'available_seats': new FormControl('', Validators.required),
      'price': new FormControl('', Validators.required),
      'time': new FormControl('', Validators.required),
      'days_of_the_week': new FormControl('', Validators.required)
    });
    this.getStreets();
  }

  getStreets() {
    this.streetService.getStreets().subscribe(data=>{
      this.streets = data;
    });
  }
  onSubmit() {
    console.log(this.driverLongForm);
    this.offer = new Offer();
    this.offer.pointA = this.driverLongForm.get('pointA').value;
    this.offer.pointB = this.driverLongForm.get('pointB').value;
    this.offer.price = this.driverLongForm.get('price').value;
    this.offer.longTerm = true;
    this.offer.seats = this.driverLongForm.get('available_seats').value;
    this.offer.time = this.driverLongForm.get('time').value;
    for (let i = 0; i < this.driverLongForm.get('days_of_the_week').value.length; i++) {
      this.offer.days[i] = {days: this.driverLongForm.get('days_of_the_week').value[i]};
    }
    console.log(this.offer);
    if (this.offer.pointA == '' || this.offer.pointB == '') {
      return null;
    }
    this.driverService.putOffer(this.offer).subscribe(data => {
      this.showSuccess();
      console.log(data);
    });
  }

  showSuccess() {
    this.toastr.success('Success');
  }
}
