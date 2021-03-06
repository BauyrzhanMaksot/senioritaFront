import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {DriverService} from '../services/driver.service';
import {OrderService} from '../services/order.service';
import {ToastsManager} from 'ng2-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dr-current-requests',
  templateUrl: './dr-current-requests.component.html',
  styleUrls: ['./dr-current-requests.component.css']
})
export class DrCurrentRequestsComponent implements OnInit {

  history: any;

  constructor(private driverService: DriverService,
              private orderService: OrderService,
              public toastr: ToastsManager,
              private route: Router,
              vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr); }

  ngOnInit() {
    this.getHistory();
  }

  getHistory() {
    this.driverService.getAcceptedHistoryDriver().subscribe( data => {
      console.log(data);
      this.history = data;
    });
  }

  finish(id) {
    this.orderService.finishRequest(id).subscribe( data => {
      console.log(data);
      this.showSuccess();
      this.getHistory();
    });
  }

  onClient(id) {
    this.route.navigate(['driver/client-info', id]);
  }

  showSuccess() {
    this.toastr.success('Success');
  }
}
