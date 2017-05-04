import {Component, OnInit} from '@angular/core';

import {LoginService} from './login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    
    usuario = {};

    constructor(private loginService: LoginService) {}

    ngOnInit() {
    }
    
    login(): void {
        this.loginService.login(this.usuario)
            .subscribe(data => console.log(data));
    }
}
