import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

import { AuthService } from "app/service/auth.service";
import { RestService } from "app/service/rest.service";
import { SnackbarService } from "app/commons/snackbar.service";

@Injectable()
export class UserService extends RestService<any> {

  constructor(authService: AuthService, http: Http, snackbarService: SnackbarService) {
    super(authService, http, snackbarService, "user");
  }

  getList(page?, size?, search?): Observable<any> {
    return super.findAll([
      { param: "page", val: (page || 0) },
      { param: "size", val: (size || 20) },
      { param: "search", val: (search || "") }
    ]);
  }
}
