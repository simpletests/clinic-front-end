import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { AttendanceComponent } from 'app/attendance/attendance.component';
import { CalendarComponent } from 'app/calendar/calendar.component';
import { PatientComponent } from 'app/patient/patient.component';
import { FinancialComponent } from 'app/financial/financial.component';
import { ReportComponent } from 'app/report/report.component';
import { LoginComponent } from 'app/login/login.component';
import { UserComponent } from "app/user/user.component";

import { AuthGuard } from "app/guard/auth.guard";
import { TestsComponent } from "app/tests/tests.component";

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'attendance/:eventId', component: AttendanceComponent, canActivate: [AuthGuard] },
    { path: 'calendar', component: CalendarComponent, canActivate: [AuthGuard] },
    { path: 'patient', component: PatientComponent, canActivate: [AuthGuard] },
    { path: 'financial', component: FinancialComponent, canActivate: [AuthGuard] },
    { path: 'report', component: ReportComponent, canActivate: [AuthGuard] },
    { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
    { path: 'test', component: TestsComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
