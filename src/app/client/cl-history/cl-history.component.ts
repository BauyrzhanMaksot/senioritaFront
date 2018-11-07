import { Component, OnInit } from '@angular/core';
import {ClientRequestService} from '../services/client-request.service';

@Component({
  selector: 'app-cl-history',
  templateUrl: './cl-history.component.html',
  styleUrls: ['./cl-history.component.css']
})
export class ClHistoryComponent implements OnInit {

  history: any;

  constructor(private clientService: ClientRequestService) { }

  ngOnInit() {
    this.getHistory();
  }

  getHistory() {
    this.clientService.getHistory().subscribe( data => {
      console.log(data);
      this.history = data;
    });
  }
}
