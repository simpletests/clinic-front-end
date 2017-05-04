import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoginService {
    
    url = 'http://localhost:8080/oauth/token';

    constructor(private http: Http) {}

    login(usuario): Observable<Response> {
        let headers = new Headers();
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', window.btoa('foo:bar'));
        let options = new RequestOptions({headers: headers});
        
        usuario.grant_type = 'password';
        usuario.scope = 'read';
        return this.http.post(this.url, usuario, options);
    }
}
