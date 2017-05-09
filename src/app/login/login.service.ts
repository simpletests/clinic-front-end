import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { Subject, Observable } from 'rxjs';

import { AuthService } from "app/login/auth.service";

@Injectable()
export class LoginService {

    constructor(private http: Http, private authService: AuthService) { }

    login(usuario): void {
        let url = 'http://localhost:8080/oauth/token';

        let headers = new Headers();
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', 'Basic ' + btoa('foo:bar'));

        let params = new URLSearchParams();
        params.set('username', usuario.username);
        params.set('password', usuario.password);
        params.set('grant_type', 'password');
        params.set('scope', 'read');

        let options = new RequestOptions({ headers: headers, search: params });

        this.http
            .post(url, {}, options)
            .subscribe(response => {
                if (response.ok) {
                    this.authService.saveCredentials(JSON.stringify(response.json()));
                }
            });
    }

    logout(): void {
        this.authService.removeCredentials();
    }
}
