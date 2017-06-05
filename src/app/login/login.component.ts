import { Component } from '@angular/core';
import { Router } from "@angular/router";

import { LoginService } from './login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    user = {};

    constructor(private loginService: LoginService, private router: Router) { }

    login(): void {
        this.loginService.login(this.user);
        this.router.navigate(['/dashboard']);
    }

    enterClick() {
        console.log("Enter click");
    }
}
