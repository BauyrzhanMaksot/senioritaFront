import { Component, OnInit } from '@angular/core';
import {DriverService} from '../services/driver.service';
import {OrderService} from '../services/order.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  clientRequests: any;

  constructor(private driverService: DriverService,
              private orderService: OrderService) { }

  ngOnInit() {
    this.getRequests();
  }

  getRequests() {
    this.driverService.getRequests().subscribe( data => {
      this.clientRequests = data;
      console.log(data);
    });
  }

  acceptRequest(offer_id: any) {
    console.log('accepted');
    this.orderService.acceptOffer(offer_id).subscribe(data => {
      console.log(data);
    });
  }
}
