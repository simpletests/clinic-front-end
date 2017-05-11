import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { AuthService } from "app/login/auth.service";

@Injectable()
export class PatientService {

    url = 'http://localhost:8080/1/patient';
    path = "patient";

    constructor(private authService: AuthService, private http: Http) { }

    getPatients(page?: number, size?: number, search?: string): Observable<any> {
        let options = this.authService.authOptions();
        // this.restService.getUrl
        options.params.append("page", (page || 0).toString());
        options.params.append("size", (size || 5).toString());
        options.params.append("search", search || "");
        return this.http.get(this.url, options).map(response => response.json());
    };


    addPatient(): void {
        // return this.http.post(this.url, {},options);
    }
}
