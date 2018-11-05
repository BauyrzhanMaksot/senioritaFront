import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DriverOfferService {

  constructor(private http: HttpClient) { }

  putOffer(request: any) {
    return this.http.post('/rest/putOffer', request);
  }

  getOffers() {
    return this.http.get('/rest/getOffers');
  }
}
