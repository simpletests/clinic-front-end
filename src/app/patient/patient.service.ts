import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { AuthService } from "app/service/auth.service";
import { RestService } from "app/service/rest.service";
import { PageContent } from "app/service/page-content";
import { PageRequest } from "app/service/page-request";
import { SnackbarService } from "app/commons/snackbar.service";

@Injectable()
export class PatientService extends RestService<any> {

    constructor(authService: AuthService, http: Http, snackbarService: SnackbarService) {
        super(authService, http, snackbarService, 'patient');
    }

    getPatientsPage(pageRequest: PageRequest): Observable<PageContent> {
        return this.findAll([], pageRequest);
    };

}
