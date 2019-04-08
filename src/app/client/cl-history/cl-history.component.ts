import { Component, OnInit } from '@angular/core';
import {ClientRequestService} from '../services/client-request.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cl-history',
  templateUrl: './cl-history.component.html',
  styleUrls: ['./cl-history.component.css']
})
export class ClHistoryComponent implements OnInit {

  history: any;

  constructor(private clientService: ClientRequestService,
              private route: Router) { }

  ngOnInit() {
    this.getHistory();
  }

  onDriver(id) {
    this.route.navigate(['client/driver-info', id]);
  }

  getHistory() {
    this.clientService.getHistory().subscribe( data => {
      console.log(data);
      this.history = data;
    });
  }
}
