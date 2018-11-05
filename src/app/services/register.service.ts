import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class RegisterService {

  constructor(private http: HttpClient) { }

  register(userDto: any) {
    return this.http.post('/rest/bake/register', userDto);
  }
}
