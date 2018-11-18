import { Component, OnInit } from '@angular/core';
import {DriverOfferService} from '../services/driver-offer.service';

@Component({
  selector: 'app-dr-current-offers',
  templateUrl: './dr-current-offers.component.html',
  styleUrls: ['./dr-current-offers.component.css']
})
export class DrCurrentOffersComponent implements OnInit {

  offers: any;

  constructor(private driverOffer: DriverOfferService) { }

  ngOnInit() {
    this.getMyOffer();
  }

  getMyOffer() {
    this.driverOffer.getMyOffer().subscribe( data => {
      console.log(data);
      this.offers = data;
    });
  }
}
