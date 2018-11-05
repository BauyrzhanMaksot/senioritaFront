import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class StreetService {

  constructor(private http: HttpClient) { }

  getStreets() {
    return this.http.get('/rest/getStreets');
  }
}
