import { Injectable, EventEmitter } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class AuthService {

  keyCredential = 'USER_CREDENTIALS';
  keyDetails = 'USER_DETAILS';

  emitterUserLogged = new EventEmitter<boolean>();

  constructor() { }

  saveCredentials(credentials: string): void {
    sessionStorage.setItem(this.keyCredential, credentials);
  }

  getCredentials(): string {
    return sessionStorage.getItem(this.keyCredential);
  }

  removeCredentials(): void {
    sessionStorage.removeItem(this.keyCredential);
  }

  saveDetails(details: string): void {
    sessionStorage.setItem(this.keyDetails, details);
  }

  getDetails(): string {
    return sessionStorage.getItem(this.keyDetails);
  }

  removeDetails(): void {
    sessionStorage.removeItem(this.keyDetails);
  }

  isLogged(): boolean {
    // console.log('Getting IsLogged: ' + this.getCredentials() && this.getDetails());
    return this.getCredentials() && this.getDetails() ? true : false;
  }

  //FIXME Problemas com usuário ao recarregar a tela podem ter haver com esse emitter, verificar
  emitUserLoggedIn() {
    this.emitterUserLogged.emit(true);
  }

  emitUserLoggedOut() {
    this.emitterUserLogged.emit(false);
  }

  authOptions(): RequestOptions {
    // console.log('Getting UserCredentials: ' + this.getCredentials());
    let credentials = JSON.parse(this.getCredentials());
    let headers = new Headers();
    if (credentials) {
      headers.append('Authorization', credentials.token_type + ' ' + credentials.access_token);
    }
    let options = new RequestOptions({ headers: headers, params: new URLSearchParams() });
    return options;
  }

  userId(): string {
    // console.log('Getting UserDetails: ' + this.getDetails());
    let details = JSON.parse(this.getDetails());
    if (details) {
      return details.id;
    } else {
      return '-1';
    }
  }
}
