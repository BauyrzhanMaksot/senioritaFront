import { Component, OnInit } from '@angular/core';
import {DriverService} from '../services/driver.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  history: any;

  constructor(private driverService: DriverService,
              private route: Router) { }

  ngOnInit() {
    this.getHistory();
  }

  onClient(id) {
    this.route.navigate(['driver/client-info', id]);
  }

  getHistory() {
    this.driverService.getHistoryDriver().subscribe( data => {
      console.log(data);
      this.history = data;
    });
  }
}
