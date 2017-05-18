import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

import { AuthService } from "app/service/auth.service";
import { RestService } from "app/service/rest.service";

@Injectable()
export class UserService extends RestService<any> {

  constructor(authService: AuthService, http: Http) {
    super(authService, http, "user");
  }

  getUsers(page?, size?, search?): Observable<any> {
    return super.findAll([
      {param: "page", val: (page || 0)},
      {param: "size", val: (size || 20)},
      {param: "search", val: (search || "")}
    ]);
  }

  saveUser(user): Observable<any> {
    return super.saveOrUpdate(user);
  }

  deleteUser(id): Observable<any> {
    return super.delete(id);
  }
}
