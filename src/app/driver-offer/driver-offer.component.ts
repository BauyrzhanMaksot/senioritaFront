import { Component, OnInit } from '@angular/core';
import {ClientRequestService} from '../services/client-request.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {DriverOfferService} from '../services/driver-offer.service';
import {DriverService} from '../services/driver.service';
import {ClientRequestForm} from './client-request-form';
import {StreetService} from '../services/street.service';

@Component({
  selector: 'app-driver-offer',
  templateUrl: './driver-offer.component.html',
  styleUrls: ['./driver-offer.component.css']
})
export class DriverOfferComponent implements OnInit {

  driverForm: FormGroup;
  searchForm: FormGroup;
  clientRequests: any;
  offer: any;
  streets: any;
  stateForm: FormGroup;
  showDropDown = false;
  streetNames: any = ['bauka', 'zhazi', 'nurlan', 'saule', 'gulya'];

  constructor(private driverService: DriverOfferService,
              private driverOnlineService: DriverService,
              private clientService: ClientRequestService,
              private streetService: StreetService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.driverForm = new FormGroup({
      'pointA': new FormControl('', Validators.required),
      'pointB': new FormControl('', Validators.required),
      'price': new FormControl('', Validators.required)
    });
    this.searchForm = new FormGroup( {
      'departure': new FormControl('', Validators.required),
      'arrival': new FormControl('', Validators.required)
    });
    this.getRequests();
    this.getOnlineClients();
    this.getStreets();
    this.initForm();
  }

  initForm(): FormGroup {
    return this.stateForm = this.fb.group({
      search: [null]
    });
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

  getStreets() {
    this.streetService.getStreets().subscribe( data => {
      this.streets = data;
      console.log(this.streets);
    });
  }

  onSearch() {
    console.log(this.searchForm);
    const param = new ClientRequestForm();
    param.arrival = this.searchForm.get('arrival').value;
    param.departure = this.searchForm.get('departure').value;
    this.clientService.searchRequests(param).subscribe( data => {
      console.log(data);
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
    });
  }

  selectValue(value) {
    this.stateForm.patchValue({"search": value});
    this.showDropDown = false;
  }
  closeDropDown() {
    this.showDropDown = !this.showDropDown;
  }

  openDropDown() {
    this.showDropDown = false;
  }

  getSearchValue() {
    return this.stateForm.value.search;
  }
}

