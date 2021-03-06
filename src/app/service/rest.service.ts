import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from 'app/service/auth.service';
import { PageRequest } from 'app/service/page-request';
import { SnackbarService } from 'app/commons/snackbar.service';

import * as _ from 'lodash';
import * as moment from 'moment';
import { urlBackEnd } from 'app/url-back-end';

@Injectable()
export class RestService<T>{

  snackbarService: SnackbarService;
  authService: AuthService;
  http: Http;
  path: string;

  constructor(authService: AuthService, http: Http, snackbarService: SnackbarService, path: string) {
    this.authService = authService;
    this.http = http;
    this.path = path;
    this.snackbarService = snackbarService;
  }

  private getOptions(params?, pageRequest?: PageRequest): RequestOptions {
    const options: RequestOptions = this.authService.authOptions();
    if (params) {
      for (const param of params) {
        if (param.val instanceof Date) {
          param.val = this.transformDate(param.val);
        }
        options.params.append(param.param, param.val);
      }
    }
    if (pageRequest) {
      options.params.append('page', pageRequest.number.toString());
      options.params.append('size', pageRequest.size.toString());
      options.params.append('search', pageRequest.search || ''.toString());
    }
    return options;
  }

  url(pathParams?: string): string {
    let serverUrl: string = urlBackEnd + '{idUser}/'; // FIXME
    if (pathParams) {
      serverUrl = serverUrl.concat(pathParams, '/');
    }
    const user: string = this.authService.userId();
    return serverUrl.replace('{idUser}', user) + this.path;
  }

  getNew(): Observable<T> {
    const options = this.getOptions();
    return this.http.get(this.url() + '/new', options).share()
      .map(response => response.json());
  }

  findAllPathParams(pathParams?: string, params?: { param: string, val: any }[], pageRequest?: PageRequest): Observable<any> {
    return this.http.get(this.url(pathParams), this.getOptions(params, pageRequest)).share()
      .map(response => response.json());
  }

  findAll(params?: { param: string, val: any }[], pageRequest?: PageRequest): Observable<any> {
    return this.http.get(this.url(), this.getOptions(params, pageRequest)).share()
      .map(response => response.json());
  }

  findOne(id: string): Observable<T> {
    const options = this.getOptions();
    return this.http.get(this.url() + '/' + id, options).share()
      .map(response => response.json());
    // .map(content => <T>content);
  }

  saveOrUpdate(event): Observable<Response> {
    const copyEvent = _.cloneDeep(event);
    this.transformDates(copyEvent);
    const response = this.http.post(this.url(), copyEvent, this.getOptions()).share();
    response.subscribe(e => this.snackbarService.info('Save status: ' + e.status));
    return response;
  }

  delete(id: string): Observable<Response> {
    const response = this.http.delete(this.url() + '/' + id, this.getOptions()).share();
    response.subscribe(event => this.snackbarService.info('Delete status: ' + event.status));
    return response;
  }

  transformDates(event) {
    for (const property in event) {
      if (event.hasOwnProperty(property)) {
        if (event[property] instanceof Date) {
          event[property] = this.transformDate(event[property]);
        } else if (typeof event[property] === 'object') {
          this.transformDates(event[property]);
        }
      }
    }
  }

  transformDate(date: Date): string { // FIXME
    return moment(date).format('YYYY-MM-DD[T]HH:mm:ss[Z]');
  }
}
