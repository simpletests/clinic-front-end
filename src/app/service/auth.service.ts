import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class AuthService {

  keyCredential: string = 'USER_CREDENTIALS';
  keyDetails: string = 'USER_DETAILS';

  constructor() { }

  saveCredentials(user: string): void {
    console.log(user);
    sessionStorage.setItem(this.keyCredential, user);
  }

  getCredentials(): string {
    return sessionStorage.getItem(this.keyCredential);
  }

  removeCredentials(): void {
    sessionStorage.removeItem(this.keyCredential);
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
