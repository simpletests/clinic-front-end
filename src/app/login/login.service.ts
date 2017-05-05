import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class LoginService {

    subject: Subject<boolean> = new Subject();

    constructor(private http: Http) { }

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
                    console.log(response);
                    this.subject.next(true);
                }
            });
    }

    logout(): void {
        this.subject.next(false);
    }
}
