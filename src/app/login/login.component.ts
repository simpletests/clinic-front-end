import { Component } from '@angular/core';
import { Router } from "@angular/router";

import { LoginService } from './login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent {

    user = {
        username: 'wesley',
        password: '123'
    };

    constructor(private loginService: LoginService, private router: Router) { }

    login(): void {
        this.loginService.login(this.user, () => this.router.navigate(['/dashboard']));
    }
}
