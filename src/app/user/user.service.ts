import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

import { AuthService } from "app/login/auth.service";

@Injectable()
export class UserService {

  url = 'http://localhost:8080/1/user?page=0&size=20&search=';

  constructor(private authService: AuthService, private http: Http) { }

  getUsers() : Observable<Response> {
    return this.http.get(this.url, this.authService.authOptions());
  }

  saveUser(user) : Observable<Response> {
    return this.http.post(this.url, user, this.authService.authOptions());
  }

}
