import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ToastsManager} from 'ng2-toastr';
import {OrderService} from '../../driver/services/order.service';
import {DriverService} from '../../driver/services/driver.service';
import {ClientRequestService} from '../services/client-request.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cl-current-offers',
  templateUrl: './cl-current-offers.component.html',
  styleUrls: ['./cl-current-offers.component.css']
})
export class ClCurrentOffersComponent implements OnInit {

  history: any;

  constructor(private clientService: ClientRequestService,
              private orderService: OrderService,
              public toastr: ToastsManager,
              private route: Router,
              vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr); }

  ngOnInit() {
    this.getHistory();
  }

  getHistory() {
    this.clientService.getAcceptedHistoryClient().subscribe( data => {
      console.log(data);
      this.history = data;
    });
  }

  finish(id) {
    this.orderService.finishOffer(id).subscribe( data => {
      console.log(data);
      this.showSuccess();
      this.getHistory();
    });
  }

  onDriver(id) {
    this.route.navigate(['client/driver-info', id]);
  }

  showSuccess() {
    this.toastr.success('Success');
  }

}
