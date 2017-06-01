import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "app/service/auth.service";
import { LoginService } from "app/login/login.service";
import { MdSidenav } from "@angular/material";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'app works! ';

    /** AuthorizedRoles: ['MEDICO', 'SECRETARIA', 'ADMINISTRADOR'] */
    navItems = [
        { route: "login", name: "Login", icon: "vpn_key", authorizedRoles: ['MEDICO', 'ADMINISTRADOR'] },
        { route: "dashboard", name: "Dashboard", icon: "home", authorizedRoles: ['MEDICO', 'ADMINISTRADOR'] },
        { route: "calendar", name: "Calendar", icon: "date_range", authorizedRoles: ['MEDICO'] },
        { route: "patient", name: "Patient", icon: "person", authorizedRoles: ['MEDICO'] },
        // { route: "financial", name: "Financial", icon: "attach_money", authorizedRoles: ['MEDICO'] },
        // { route: "report", name: "Report", icon: "description", authorizedRoles: ['MEDICO'] },
        { route: "user", name: "User", icon: "sentiment_very_dissatisfied", authorizedRoles: ['ADMINISTRADOR'] }
    ];

    @ViewChild('sidenav') sidenav: MdSidenav;

    userLogged = false;

    constructor(private authService: AuthService, private loginService: LoginService, private router: Router) { }

    ngOnInit() {
        this.authService.emitterUserLogged.subscribe(
            bool => this.userLogged = bool
        );
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