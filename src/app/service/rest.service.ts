import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from "app/login/auth.service";

@Injectable()
export class RestService<T>{

  url: string;
  authService;
  http;

  constructor(authService: AuthService, http: Http, path: string) {
    this.authService = authService;
    this.http = http;
    let user: string = "1";
    let serverUrl: string = 'http://localhost:8080/{idUser}/';
    this.url = serverUrl.replace("{idUser}", user) + path;
  }

  private getOptions(): RequestOptions {
    return this.authService.authOptions();
  }

  getNew(): T {
    let options = this.getOptions();
    //options.params.append("id", "-1");
    return this.http.get(this.url + "/-1", options)
      .map(response => response.json());
  }

  findAll(): Observable<any> {
    return this.http.get(this.url, this.getOptions())
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
    let options = this.getOptions();
    // options.params.append("id", id);
    return this.http.delete(this.url + "/" + id, options)
  }


}
