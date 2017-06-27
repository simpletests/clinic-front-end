import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { AuthService } from 'app/service/auth.service';
import { urlBackEnd } from 'app/url-back-end';
import { OptionsService } from 'app/commons/options.service';

@Injectable()
export class RoleService extends OptionsService {

  constructor(authService: AuthService, http: Http) {
    super(authService, http, 'roles');
  }

}
