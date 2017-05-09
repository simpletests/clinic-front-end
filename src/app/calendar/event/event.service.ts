import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EventService {

  url = 'http://localhost:8080/1/event';

  constructor(private http: Http) { }

  getEvents(start: Date, end: Date): Observable<Response> {
    let headers = new Headers({ 'Authorization': 'Bearer f50be128-e481-449a-96ba-9999ba11e01a' });
    let options = new RequestOptions({ headers: headers });
    options.params.append("start", start.toJSON());
    options.params.append("end", end.toJSON());
    return this.http.get(this.url, options);
  }

}
