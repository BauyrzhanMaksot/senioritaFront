import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ClientRequestService} from '../services/client-request.service';

@Component({
  selector: 'app-cl-long-term-request',
  templateUrl: './cl-long-term-request.component.html',
  styleUrls: ['./cl-long-term-request.component.css']
})
export class ClLongTermRequestComponent implements OnInit {

  clientLongForm: FormGroup;
  request: any;

  constructor(private clientService: ClientRequestService) { }

  ngOnInit() {
    this.clientLongForm = new FormGroup({
      'pointA': new FormControl('', Validators.required),
      'pointB': new FormControl('', Validators.required),
      'price': new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    this.request = new Object();
    this.request.pointA = this.clientLongForm.get('pointA').value;
    this.request.pointB = this.clientLongForm.get('pointB').value;
    this.request.price = this.clientLongForm.get('price').value;
    if (this.request.pointA == '' || this.request.pointB == '') {
      return null;
    }
    this.clientService.putRequest(this.request).subscribe(data => {
      console.log(data);
    });
  }
}
