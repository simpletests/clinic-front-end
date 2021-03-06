import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent {

    user = {};

    constructor(private loginService: LoginService, private router: Router) { }

    login(): void {
        this.loginService.login(this.user, () => this.router.navigate(['/dashboard']));
    }
}
