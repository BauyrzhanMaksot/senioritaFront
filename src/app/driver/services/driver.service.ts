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

  getOffer(id) {
    return this.http.get('/rest/getOffer/' + id);
  }

  updateOffer(offer) {
    return this.http.post('/rest/updateOffer', offer);
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

  getUser() {
    return this.http.get('/rest/getUser');
  }

  updateUser(user) {
    return this.http.post('/rest/updateUser', user);
  }
}
