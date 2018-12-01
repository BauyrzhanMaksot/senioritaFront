import { Component, OnInit } from '@angular/core';
import {DriverService} from '../../driver/services/driver.service';
import {ActivatedRoute} from '@angular/router';
import {ClientService} from '../services/client.service';

@Component({
  selector: 'app-driver-info',
  templateUrl: './driver-info.component.html',
  styleUrls: ['./driver-info.component.css']
})
export class DriverInfoComponent implements OnInit {

  id: number;
  driver: any;
  constructor(private clientService: ClientService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.id = +params['id'];
      console.log(this.id); // Print the parameter to the console.
    });
  }

  ngOnInit() {
    this.clientService.getDriverInfo(this.id).subscribe( data => {
      console.log(data);
      this.driver = data;
    });
  }

}
