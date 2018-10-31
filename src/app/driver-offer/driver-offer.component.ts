import { Component, OnInit } from '@angular/core';
import {ClientRequestService} from '../client-request.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DriverOfferService} from '../driver-offer.service';
import {DriverService} from '../driver.service';

@Component({
  selector: 'app-driver-offer',
  templateUrl: './driver-offer.component.html',
  styleUrls: ['./driver-offer.component.css']
})
export class DriverOfferComponent implements OnInit {

  driverForm: FormGroup;
  clientRequests: any;
  offer: any;
  constructor(private driverService: DriverOfferService,
              private driverOnlineService: DriverService,
              private clientService: ClientRequestService) {
  }

  ngOnInit() {
    this.driverForm = new FormGroup({
      'pointA': new FormControl('', Validators.required),
      'pointB': new FormControl('', Validators.required),
      'price': new FormControl('', Validators.required)
    });
    this.getRequests();
    this.getOnlineClients();
  }

  getOnlineClients() {
    this.driverOnlineService.getOnlineClients().subscribe(data => {
      console.log(data);
    });
  }

  getRequests() {
    this.clientService.getRequests().subscribe( data => {
      this.clientRequests = data;
    });
  }

  onSearch() {
    
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

