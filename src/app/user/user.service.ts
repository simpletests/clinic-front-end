import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

import { AuthService } from "app/login/auth.service";

@Injectable()
export class UserService {

  url = 'http://localhost:8080/1/user';

  constructor(private authService: AuthService, private http: Http) { }

  getUsers(page?, size?, search?): Observable<Response> {
    let options = this.authService.authOptions();
    // this.restService.getUrl
    options.params.append("page", (page || 0).toString());
    options.params.append("size", (size || 20).toString());
    options.params.append("search", search || "");
    return this.http.get(this.url, options);
  }

  saveUser(user): Observable<Response> {
    return this.http.post(this.url, {user}, this.authService.authOptions());
  }

}
