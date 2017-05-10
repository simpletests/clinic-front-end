import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class AuthService {

  key: string = 'USER';

  constructor() { }

  saveCredentials(user: string): void {
    console.log(user);
    sessionStorage.setItem(this.key, user);
  }

  getCredentials(): string {
    return sessionStorage.getItem(this.key);
  }

  removeCredentials(): void {
    sessionStorage.removeItem(this.key);
  }

  isLogged(): boolean {
    return this.getCredentials() ? true : false;
  }

  authOptions(): RequestOptions {
    let user = JSON.parse(this.getCredentials());

    let headers = new Headers();
    if (user) {
      headers.append('Authorization', user.token_type + ' ' + user.access_token);
    }

    let options = new RequestOptions({ headers: headers, params: new URLSearchParams() });

    return options;
  }
}
