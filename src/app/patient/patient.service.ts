import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { AuthService } from "app/service/auth.service";
import { RestService } from "app/service/rest.service";
import { PageContent } from "app/service/page-content";
import { PageRequest } from "app/service/page-request";

@Injectable()
export class PatientService extends RestService<any> {

    constructor(authService: AuthService, http: Http) {
        super(authService, http, 'patient');
    }

    getPatientsPage(pageRequest: PageRequest): Observable<PageContent> {
        return this.findAll([], pageRequest);
    };

}
