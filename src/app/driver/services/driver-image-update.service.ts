import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest} from '@angular/common/http';

@Injectable()
export class DriverImageUpdateService {

  constructor(private http: HttpClient) { }

  save(file: File) {
    const formdata: FormData = new FormData();
    formdata.append('file', file);
    const req = new HttpRequest('POST', '/rest/uploadUserImage', formdata);
    return this.http.request(req);
  }
}
