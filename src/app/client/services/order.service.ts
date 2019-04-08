import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class OrderService {

  constructor(private http: HttpClient) { }

  acceptOffer(offer_id: any) {
    return this.http.get('/rest/acceptOffer/' + offer_id);
  }

  acceptRequest(request_id: any) {
    return this.http.get('/rest/acceptRequest/' + request_id);
  }

  finishRequest(id) {
    return this.http.get('/rest/finishRequest/' + id);
  }

  finishOffer(id) {
    return this.http.get('/rest/finishOffer/' + id);
  }
}
