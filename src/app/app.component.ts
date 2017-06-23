import { Component, Input, ViewChild, DoCheck } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "app/service/auth.service";
import { LoginService } from "app/login/login.service";
import { MdSidenav } from "@angular/material";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck {

    title = 'app works! ';

    /** AuthorizedRoles: ['MEDICO', 'SECRETARIA', 'ADMINISTRADOR'] */
    navItems = [
        // { route: "login", name: "Login", icon: "vpn_key", authorizedRoles: ['MEDICO', 'ADMINISTRADOR'] },
        { route: "dashboard", name: "Início", icon: "home", authorizedRoles: ['MEDICO', 'ADMINISTRADOR'] },
        { route: "calendar", name: "Agenda", icon: "date_range", authorizedRoles: ['MEDICO'] },
        { route: "patient", name: "Pacientes", icon: "person", authorizedRoles: ['MEDICO'] },
        // { route: "financial", name: "Financial", icon: "attach_money", authorizedRoles: ['MEDICO'] },
        // { route: "report", name: "Report", icon: "description", authorizedRoles: ['MEDICO'] },
        { route: "user", name: "Usuários", icon: "sentiment_very_dissatisfied", authorizedRoles: ['ADMINISTRADOR'] }
    ];

    @ViewChild('sidenav') sidenav: MdSidenav;

    isLogged: boolean = false;

    constructor(private authService: AuthService, private loginService: LoginService, private router: Router) {
        this.isLogged = authService.isLogged();
    }

    ngDoCheck(): void {
        this.isLogged = this.authService.isLogged();
    }

    logout(): void {
        this.loginService.logout();
        this.router.navigate(['/']);
    }

    isLargeScreen() {
        const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (width > 720) {
            return true;
        } else {
            return false;
        }
    }
}