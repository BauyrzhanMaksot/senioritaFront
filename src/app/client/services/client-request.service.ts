import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ClientRequestService {

  constructor(private http: HttpClient) { }

  putRequest(request: any) {
    return this.http.post('/rest/putRequest', request);
  }

  getRequests() {
    return this.http.get('/rest/getRequests');
  }

  getHistory() {
    return this.http.get('/rest/getHistoryClient');
  }

  searchRequests(param: any) {
    return this.http.post('/rest/searchRequests', param);
  }

  getAcceptedHistoryClient() {
    return this.http.get('/rest/getAcceptedHistoryClient');
  }

  getOffers() {
    return this.http.get('/rest/getOffers');
  }
}
