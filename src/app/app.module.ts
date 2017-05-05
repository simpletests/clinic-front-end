import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppRoutingModule} from './app-routing.module';
import {MaterialComponentsModule} from './material-components/material-components.module'

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';

import {FlexLayoutModule} from '@angular/flex-layout';

import {FormControl, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AttendanceComponent} from './attendance/attendance.component';
import {CalendarComponent} from './calendar/calendar.component';
import {PatientComponent} from './patient/patient.component';
import {FinancialComponent} from './financial/financial.component';
import {ReportComponent} from './report/report.component';
import {LoginComponent} from './login/login.component';

import {PatientService} from './patient/patient.service';
import {LoginService} from './login/login.service';
import {CalendarMonthlyViewComponent} from './calendar/calendar-monthly-view/calendar-monthly-view.component';
import {CalendarWeeklyViewComponent} from './calendar/calendar-weekly-view/calendar-weekly-view.component';
import {CalendarDailyViewComponent} from './calendar/calendar-daily-view/calendar-daily-view.component';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        CalendarComponent,
        PatientComponent,
        AttendanceComponent,
        FinancialComponent,
        ReportComponent,
        LoginComponent,
        CalendarMonthlyViewComponent,
        CalendarWeeklyViewComponent,
        CalendarDailyViewComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        MaterialComponentsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        BrowserAnimationsModule
    ],
    providers: [
        PatientService,
        LoginService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
