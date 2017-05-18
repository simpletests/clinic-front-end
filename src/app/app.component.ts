import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'app works! ';

    navItems = [
        {route: "login", name: "Login", icon: "vpn_key"},
        {route: "dashboard", name: "Dashboard", icon: "home"},
        {route: "attendance", name: "Attendance", icon: "perm_contact_calendar"},
        {route: "calendar", name: "Calendar", icon: "date_range"},
        {route: "patient", name: "Patient", icon: "person"},
        {route: "financial", name: "Financial", icon: "attach_money"},
        {route: "report", name: "Report", icon: "description"},
        {route: "user", name: "User", icon: "sentiment_very_dissatisfied"}
    ];
}