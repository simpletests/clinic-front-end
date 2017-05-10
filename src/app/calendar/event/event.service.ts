import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from "app/login/auth.service";

@Injectable()
export class EventService {

  url = 'http://localhost:8080/1/event';

  constructor(private authService: AuthService, private http: Http) {}

  getEvents(start: Date, end: Date): Observable<Response> {
    let options = this.authService.authOptions();
    options.params.append("start", start.toJSON());
    options.params.append("end", end.toJSON());
    return this.http.get(this.url, options);
  }

}
