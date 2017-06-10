import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from "app/service/auth.service";
import { RestService } from "app/service/rest.service";
import { SnackbarService } from "app/commons/snackbar.service";

@Injectable()
export class EventService extends RestService<any> {

  constructor(authService: AuthService, http: Http, snackbarService: SnackbarService) {
    super(authService, http, snackbarService, 'event');
  }

  getEvents(start: Date, end: Date): Observable<any[]> {
    return super.findAll([
      { param: "start", val: start },
      { param: "end", val: end },
    ]);
  }
}
