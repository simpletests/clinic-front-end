import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppRoutingModule} from './app-routing.module';
import {
    MdButtonModule, MdCheckboxModule, MdToolbarModule, MdSidenavModule, MdMenuModule, MdListModule,
    MdIconModule
} from '@angular/material';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';

import {FlexLayoutModule} from '@angular/flex-layout';

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AttendanceComponent} from './attendance/attendance.component';
import {CalendarComponent} from './calendar/calendar.component';
import {PatientComponent} from './patient/patient.component';
import {FinancialComponent} from './financial/financial.component';
import {ReportComponent} from './report/report.component';
//import {WeeklyViewComponent} from './calendar/weekly-view/weekly-view.component';
//import {MonthlyViewComponent} from './calendar/monthly-view/monthly-view.component';
//import {DailyViewComponent} from './calendar/daily-view/daily-view.component';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        CalendarComponent,
        PatientComponent,
        AttendanceComponent,
        FinancialComponent,
        ReportComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        MdButtonModule,
        MdCheckboxModule,
        MdToolbarModule,
        MdSidenavModule,
        MdMenuModule,
        MdListModule,
        MdIconModule,
        FlexLayoutModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
