import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class AuthService {

  keyCredential: string = 'USER_CREDENTIALS';
  keyDetails: string = 'USER_DETAILS';

  constructor() { }

  saveCredentials(credentials: string): void {
    sessionStorage.setItem(this.keyCredential, credentials);
    console.log(credentials);
  }

  getCredentials(): string {
    return sessionStorage.getItem(this.keyCredential);
  }

  removeCredentials(): void {
    sessionStorage.removeItem(this.keyCredential);
  }

  saveDetails(details: string): void {
    sessionStorage.setItem(this.keyDetails, details);
    console.log(details);
  }

  getDetails(): string {
    return sessionStorage.getItem(this.keyDetails);
  }

  removeDetails(): void {
    sessionStorage.removeItem(this.keyDetails);
  }

  isLogged(): boolean {
    return this.getCredentials() && this.getDetails() ? true : false;
  }

  authOptions(): RequestOptions {
    let credentials = JSON.parse(this.getCredentials());

    let headers = new Headers();
    if (credentials) {
      headers.append('Authorization', credentials.token_type + ' ' + credentials.access_token);
    }

    let options = new RequestOptions({ headers: headers, params: new URLSearchParams() });

    return options;
  }

  userId(): string {
    let details = JSON.parse(this.getDetails());
    if (details) {
      return details.id;
    } else {
      return '-1';
    }
  }
}
