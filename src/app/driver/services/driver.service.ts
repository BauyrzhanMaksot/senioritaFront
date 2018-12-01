import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DriverService {

  constructor(private http: HttpClient) { }

  getOnlineClients() {
    return this.http.get('/rest/onlineClients');
  }

  getRequests() {
    return this.http.get('/rest/getRequests');
  }

  getHistoryDriver() {
    return this.http.get('/rest/getHistoryDriver');
  }

  getAcceptedHistoryDriver() {
    return this.http.get('/rest/getAcceptedHistoryDriver');
  }

  getClientInfo(id) {
    return this.http.get('/rest/getClient/' + id);
  }
}
