import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from "app/service/auth.service";
import { PageRequest } from "app/service/page-request";

@Injectable()
export class RestService<T>{

  url: string;
  authService: AuthService;
  http: Http;

  constructor(authService: AuthService, http: Http, path: string) {
    this.authService = authService;
    this.http = http;
    let user: string = authService.userId();
    let serverUrl: string = 'http://localhost:8080/{idUser}/';
    this.url = serverUrl.replace("{idUser}", user) + path;
  }

  private getOptions(params?, pageRequest?: PageRequest): RequestOptions {
    let options: RequestOptions = this.authService.authOptions();
    if (params) {
      for (let param of params) {
        options.params.append(param.param, param.val);
      }
    }
    if (pageRequest) {
      options.params.append("page", pageRequest.number.toString());
      options.params.append("size", pageRequest.size.toString());
      options.params.append("search", pageRequest.search.toString());
    }
    return options;
  }

  getNew(): Observable<T> {
    let options = this.getOptions();
    return this.http.get(this.url + "/-1", options)
      .map(response => response.json());
  }

  findAll(params?: { param: string, val: any }[], pageRequest?: PageRequest): Observable<any> {
    return this.http.get(this.url, this.getOptions(params, pageRequest))
      .map(response => response.json());
  }

  findOne(id: string): Observable<T> {
    let options = this.getOptions();
    options.params.append("id", id);
    return this.http.get(this.url, options)
      .map(response => response.json()).map(content => <T>content);
  }

  saveOrUpdate(event): Observable<Response> {
    return this.http.post(this.url, event, this.getOptions());
  }

  delete(id: string): Observable<Response> {
    return this.http.delete(this.url + "/" + id, this.getOptions());
  }


}
