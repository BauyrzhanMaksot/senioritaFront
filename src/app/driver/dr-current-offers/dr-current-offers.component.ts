import { Component, OnInit } from '@angular/core';
import {DriverOfferService} from '../services/driver-offer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dr-current-offers',
  templateUrl: './dr-current-offers.component.html',
  styleUrls: ['./dr-current-offers.component.css']
})
export class DrCurrentOffersComponent implements OnInit {

  offers: any;

  constructor(private driverOffer: DriverOfferService,
              private router: Router) { }

  ngOnInit() {
    this.getMyOffer();
  }

  getMyOffer() {
    this.driverOffer.getMyOffer().subscribe( data => {
      console.log(data);
      this.offers = data;
    });
  }

  onEdit(offer) {
    if (offer.longTerm) {
      this.router.navigate(['driver/edit-long-offer', offer.id]);
    } else {
      this.router.navigate(['driver/edit-regular-offer', offer.id]);
    }
  }
}
