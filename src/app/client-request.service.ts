import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ClientRequestService {

  constructor(private http: HttpClient) { }

  putRequest(request: any) {
    return this.http.post('/rest/clientRequest', request);
  }

  getRequests() {
    return this.http.get('/rest/getRequests');
  }
}
