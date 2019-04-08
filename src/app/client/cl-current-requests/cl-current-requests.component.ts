import { Component, OnInit } from '@angular/core';
import {DriverOfferService} from '../../driver/services/driver-offer.service';
import {Router} from '@angular/router';
import {ClientRequestService} from '../services/client-request.service';

@Component({
  selector: 'app-cl-current-requests',
  templateUrl: './cl-current-requests.component.html',
  styleUrls: ['./cl-current-requests.component.css']
})
export class ClCurrentRequestsComponent implements OnInit {

  requests: any;

  constructor(private clientRequestService: ClientRequestService,
              private router: Router) { }

  ngOnInit() {
    this.getMyRequest();
  }

  getMyRequest() {
    this.clientRequestService.getRequests().subscribe( data => {
      console.log(data);
      this.requests = data;
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
