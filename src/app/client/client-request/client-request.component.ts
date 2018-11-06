import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ClientRequestService} from '../services/client-request.service';
import {DriverOfferService} from '../../driver/services/driver-offer.service';
import {OrderService} from '../../services/order.service';

@Component({
  selector: 'app-client-request',
  templateUrl: './client-request.component.html',
  styleUrls: ['./client-request.component.css']
})
export class ClientRequestComponent implements OnInit {

  clientForm: FormGroup;
  driverOffers: any;
  request: any;
  histories: any;

  constructor(private clientService: ClientRequestService,
              private driverService: DriverOfferService,
              private orderService: OrderService) {
  }

  ngOnInit() {
    this.clientForm = new FormGroup({
      'pointA': new FormControl('', Validators.required),
      'pointB': new FormControl('', Validators.required),
      'price': new FormControl('', Validators.required)
    });
    this.getOffers();
    this.getHistory();
  }

  getHistory() {
    this.clientService.getHistoryClient().subscribe( data => {
      console.log(data);
      this.histories = data;
    });
  }

  getOffers() {
    this.driverService.getOffers().subscribe( data => {
      this.driverOffers = data;
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
    });
  }

  acceptOffer(offer_id: number) {
    console.log("accepted");
    this.orderService.acceptOffer(offer_id).subscribe(data => {
      console.log(data);
      this.getOffers();
      this.getHistory();
    });
  }
}
