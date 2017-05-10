import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import { AuthService } from "app/login/auth.service";

@Injectable()
export class PatientService {

    url = 'http://localhost:8080/1/patient?page=0&size=20&search=0';

    constructor(private authService: AuthService, private http: Http) {}

    getPatients(): Observable<Response> {
        return this.http.get(this.url, this.authService.authOptions());
    };
    
    addPatient(): void {
        
    }
}
