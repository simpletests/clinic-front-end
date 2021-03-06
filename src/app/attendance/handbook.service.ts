import { Injectable } from '@angular/core';
import { RestService } from 'app/service/rest.service';
import { AuthService } from 'app/service/auth.service';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { PageRequest } from 'app/service/page-request';
import { PageContent } from 'app/service/page-content';
import { SnackbarService } from 'app/commons/snackbar.service';

@Injectable()
export class HandbookService extends RestService<any> {

  constructor(authService: AuthService, http: Http, snackbarService: SnackbarService) {
    super(authService, http, snackbarService, 'handbook');
  }

  findAllPageable(patient, pageRequest: PageRequest): Observable<PageContent> {
    return super.findAllPathParams(patient.id.toString(), [], pageRequest);
  }
}
