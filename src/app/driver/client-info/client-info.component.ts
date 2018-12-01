import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ClientService} from '../../client/services/client.service';
import {DriverService} from '../services/driver.service';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css']
})
export class ClientInfoComponent implements OnInit {

  id: number;
  client: any;

  constructor(private driverService: DriverService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.id = +params['id'];
      console.log(this.id); // Print the parameter to the console.
    });
  }

  ngOnInit() {
    this.driverService.getClientInfo(this.id).subscribe( data => {
      console.log(data);
      this.client = data;
    });
  }

}
