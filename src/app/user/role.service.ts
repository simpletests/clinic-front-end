import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

import { AuthService } from "app/service/auth.service";
import { urlBackEnd } from "app/url-back-end";

@Injectable()
export class RoleService {

  // url = 'http://localhost:8080/optionsSelect/roles';
  url = urlBackEnd + 'optionsSelect/roles'; //FIXME  

  constructor(private authService: AuthService, private http: Http) { }

  getRoles(): Observable<Response> {
    return this.http.get(this.url, this.authService.authOptions());
  }

}
