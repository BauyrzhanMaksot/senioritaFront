import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AppService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get("/rest/bake/user");
  }

  getData2() {
    return this.http.get("/rest/user");
  }

  getData3() {
    return this.http.get("/rest/getUser");
  }
}
