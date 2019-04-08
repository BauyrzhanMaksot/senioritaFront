import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../driver/services/order.service';
import {ClientRequestService} from '../services/client-request.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cl-table-list',
  templateUrl: './cl-table-list.component.html',
  styleUrls: ['./cl-table-list.component.css']
})
export class ClTableListComponent implements OnInit {

  driverOffers: any = null;

  constructor(private clientService: ClientRequestService,
              private orderService: OrderService,
              private route: Router) { }

  ngOnInit() {
    this.getRequests();
  }

  getRequests() {
    this.clientService.getOffers().subscribe( data => {
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

  onDriver(id) {
    this.route.navigate(['client/driver-info', id]);
  }
}
