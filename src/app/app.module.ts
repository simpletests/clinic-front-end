import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { MaterialComponentsModule } from './material-components/material-components.module'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { CalendarComponent } from './calendar/calendar.component';
import { PatientComponent } from './patient/patient.component';
import { FinancialComponent } from './financial/financial.component';
import { ReportComponent } from './report/report.component';
import { LoginComponent } from './login/login.component';
import { CalendarMonthlyViewComponent } from './calendar/calendar-monthly-view/calendar-monthly-view.component';
import { CalendarWeeklyViewComponent } from './calendar/calendar-weekly-view/calendar-weekly-view.component';
import { CalendarDailyViewComponent } from './calendar/calendar-daily-view/calendar-daily-view.component';
import { EventDialogComponent } from './calendar/event/event-dialog/event-dialog.component';
import { UserComponent } from './user/user.component';

import { PatientService } from './patient/patient.service';
import { LoginService } from './login/login.service';
import { EventService } from "./calendar/event/event.service";
import { AuthService } from './service/auth.service';
import { UserService } from 'app/user/user.service';
import { RoleService } from "app/user/role.service";
import { HandbookService } from "app/attendance/handbook.service";

import { AuthGuard } from "./guard/auth.guard";
import { CalendarHourFilterPipe } from './calendar/calendar-hour-filter.pipe';
import { ConfirmComponent } from './commons/components/dialogs/confirm/confirm.component';

import { AuthorizedRoleDirective } from "app/directive/authorized-role.directive";
import { MdSnackBar } from "@angular/material";

import { ColumnComponent, ColMd } from './commons/components/grid/column/column.component';
import { RowComponent } from './commons/components/grid/row/row.component';
import { SnackbarService } from "app/commons/snackbar.service";
import { PatientDialogComponent } from './patient/patient-dialog/patient-dialog.component';
import { UserDialogComponent } from './user/user-dialog/user-dialog.component';
import { ContainerComponent } from './commons/components/grid/container/container.component';
<<<<<<< HEAD
import { InputComponent } from './commons/components/input/input.component';
=======
import { ButtonComponent } from './commons/components/button/button.component';
>>>>>>> ba57a0edaae7a7de3f1f132150dd29951a6583e5

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
        CalendarDailyViewComponent,
        EventDialogComponent,
        CalendarHourFilterPipe,
        UserComponent,
        ConfirmComponent,
        AuthorizedRoleDirective,
        ColumnComponent,
        ColMd,
        PatientDialogComponent,
        UserDialogComponent,
        RowComponent,
        ContainerComponent,
<<<<<<< HEAD
        InputComponent
=======
        ButtonComponent
>>>>>>> ba57a0edaae7a7de3f1f132150dd29951a6583e5
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
        AuthGuard,
        PatientService,
        LoginService,
        EventService,
        AuthService,
        UserService,
        RoleService,
        HandbookService,
        MdSnackBar,
        SnackbarService,
    ],
    entryComponents: [
        EventDialogComponent, ConfirmComponent, PatientDialogComponent, UserDialogComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
