import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DriverService} from '../services/driver.service';
import {DriverOfferService} from '../services/driver-offer.service';
import {StreetService} from '../../services/street.service';
import {NgSelectModule} from '@ng-select/ng-select';
import {ToastsManager} from 'ng2-toastr';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  driverForm: FormGroup;
  offer: any;
  streets: any;
  constructor(private driverService: DriverOfferService,
              private streetService: StreetService,
              public toastr: ToastsManager,
              vcr: ViewContainerRef) {
            this.toastr.setRootViewContainerRef(vcr); }

  ngOnInit() {
    this.driverForm = new FormGroup({
      'pointA': new FormControl('', Validators.required),
      'pointB': new FormControl('', Validators.required),
      'price': new FormControl('', Validators.required)
    });
    this.getStreets();
  }

  getStreets() {
    this.streetService.getStreets().subscribe(data => {
      this.streets = data;
    });
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
      this.showSuccess();
    });
  }

  showSuccess() {
    this.toastr.success('Success');
  }
}
