import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { Subject, Observable } from 'rxjs';

import { AuthService } from "app/service/auth.service";
import { UserService } from "app/user/user.service";
import { urlBackEnd } from "app/url-back-end";

@Injectable()
export class LoginService {

    // urlAuth = 'http://localhost:8080/oauth/token'; 
    // urlUser = 'http://localhost:8080/oauth/user';
    urlAuth = urlBackEnd + "oauth/token'; //FIXME
    urlUser = urlBackEnd + "oauth/user';

    constructor(private http: Http, private authService: AuthService, private userService: UserService) { }

    login(usuario, callback): void {
        let headers = new Headers();
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', 'Basic ' + btoa('foo:bar'));

        let params = new URLSearchParams();
        params.set('username', usuario.username);
        params.set('password', usuario.password);
        params.set('grant_type', 'password');
        params.set('scope', 'read');

        let options = new RequestOptions({ headers: headers, search: params });

        this.http.post(this.urlAuth, {}, options).subscribe(response => {
            if (response.ok) {
                this.authService.saveCredentials(JSON.stringify(response.json()));
                this.saveDetails(usuario.username, usuario.password, callback);
            } else {
                // TODO comunicar falha no login
            }
        });
    }

    logout(): void {
        this.authService.removeCredentials();
        this.authService.removeDetails();
        this.authService.emitUserLoggedOut();
    }

    private saveDetails(username, password, callback): void {
        let options = this.authService.authOptions();
        options.params.append("username", username);
        options.params.append("password", password);
        this.http.get(this.urlUser, options).subscribe(response => {
            if (response.ok) {
                this.authService.saveDetails(JSON.stringify(response.json()));
                this.authService.emitUserLoggedIn();

                callback();
            } else {
                // TODO comunicar falha no login
            }
        });
    }
}
