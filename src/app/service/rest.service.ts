import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from "app/service/auth.service";
import { PageRequest } from "app/service/page-request";
import { SnackbarService } from "app/commons/snackbar.service";

import * as _ from 'lodash';
import * as moment from 'moment';
import { urlBackEnd } from "app/url-back-end";

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
    let options: RequestOptions = this.authService.authOptions();
    if (params) {
      for (let param of params) {
        if (param.val instanceof Date) {
          param.val = this.transformDate(param.val);
        }
        options.params.append(param.param, param.val);
      }
    }
    if (pageRequest) {
      options.params.append("page", pageRequest.number.toString());
      options.params.append("size", pageRequest.size.toString());
      options.params.append("search", pageRequest.search || "".toString());
    }
    return options;
  }

  url(pathParams?: string): string {
    let serverUrl: string = urlBackEnd + "{idUser}/"; //FIXME
    if (pathParams) {
      serverUrl = serverUrl.concat(pathParams, "/");
    }
    let user: string = this.authService.userId();
    return serverUrl.replace("{idUser}", user) + this.path;
  }

  getNew(): Observable<T> {
    let options = this.getOptions();
    return this.http.get(this.url() + "/new", options)
      .map(response => response.json());
  }

  findAllPathParams(pathParams?: string, params?: { param: string, val: any }[], pageRequest?: PageRequest): Observable<any> {
    return this.http.get(this.url(pathParams), this.getOptions(params, pageRequest))
      .map(response => response.json());
  }

  findAll(params?: { param: string, val: any }[], pageRequest?: PageRequest): Observable<any> {
    return this.http.get(this.url(), this.getOptions(params, pageRequest))
      .map(response => response.json());
  }

  findOne(id: string): Observable<T> {
    let options = this.getOptions();
    return this.http.get(this.url() + "/" + id, options)
      .map(response => response.json());
    //.map(content => <T>content);
  }

  saveOrUpdate(event): Observable<Response> {
    let copyEvent = _.cloneDeep(event);
    this.transformDates(copyEvent);
    let response = this.http.post(this.url(), copyEvent, this.getOptions());
    response.subscribe(event => this.snackbarService.info("Save status: " + event.status));
    return response;
  }

  delete(id: string): Observable<Response> {
    let response = this.http.delete(this.url() + "/" + id, this.getOptions());
    response.subscribe(event => this.snackbarService.info("Delete status: " + event.status));
    return response;
  }

  transformDates(event) {
    for (var property in event) {
      if (event.hasOwnProperty(property)) {
        if (event[property] instanceof Date) {
          event[property] = this.transformDate(event[property]);
        } else if (typeof event[property] === 'object') {
          this.transformDates(event[property]);
        }
      }
    }
  }

  transformDate(date: Date): string { //FIXME
    return moment(date).format("YYYY-MM-DD[T]HH:mm:ss[Z]");
  }
}
