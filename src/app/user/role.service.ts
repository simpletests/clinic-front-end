import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

import { AuthService } from "app/service/auth.service";

@Injectable()
export class RoleService {

  url = 'http://localhost:8080/optionsSelect/roles';

  constructor(private authService: AuthService, private http: Http) { }

  getRoles() : Observable<Response> {
    return this.http.get(this.url, this.authService.authOptions());
  }

}
