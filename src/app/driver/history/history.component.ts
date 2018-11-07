import { Component, OnInit } from '@angular/core';
import {DriverService} from '../services/driver.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  history: any;

  constructor(private driverService: DriverService) { }

  ngOnInit() {
    this.getHistory();
  }

  getHistory() {
    this.driverService.getHistoryDriver().subscribe( data => {
      console.log(data);
      this.history = data;
    });
  }
}
