import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../driver/services/order.service';
import {DriverService} from '../../driver/services/driver.service';
import {ClientRequestService} from '../services/client-request.service';

@Component({
  selector: 'app-cl-table-list',
  templateUrl: './cl-table-list.component.html',
  styleUrls: ['./cl-table-list.component.css']
})
export class ClTableListComponent implements OnInit {

  driverOffers: any;

  constructor(private clientService: ClientRequestService,
              private orderService: OrderService) { }

  ngOnInit() {
    this.getRequests();
  }

  getRequests() {
    this.clientService.getRequests().subscribe( data => {
      this.driverOffers = data;
      console.log(data);
    });
  }

  acceptOffer(offer_id: any) {
    console.log('accepted');
    this.orderService.acceptOffer(offer_id).subscribe(data => {
      console.log(data);
    });
  }
}
