import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { AuthService } from 'app/service/auth.service';
import { urlBackEnd } from 'app/url-back-end';

@Injectable()
export class OptionsService {
  url = urlBackEnd + 'optionsSelect/'; // FIXME

  constructor(public authService: AuthService, public http: Http, public path: string) { }

  fillOptions(arr: any[]) {
    arr.length = 0;
    this.getOptions()
      .map(response => response.json())
      .subscribe(data => Array.prototype.push.apply(arr, data));
  }

  getOptions(): Observable<Response> {
    return this.http.get(this.url + this.path, this.authService.authOptions()).share();
  }
}
