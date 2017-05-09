import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class AuthService {

  userString: string = 'USER';

  constructor() { }

  saveUser(user: string): void {
    sessionStorage.setItem(this.userString, user);
  }

  getUser(): string {
    return sessionStorage.getItem(this.userString);
  }

  removeUser(): void {
    sessionStorage.removeItem(this.userString);
  }

  authOptions(): RequestOptions {
    let user = JSON.parse(this.getUser());

    let headers = new Headers();
    if (user) {
      headers.append('Authorization', user.token_type + ' ' + user.access_token);
    }

    let options = new RequestOptions({ headers: headers });

    return options;
  }
}
