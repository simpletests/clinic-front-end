import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { CalendarComponent } from './calendar/calendar.component';
import { PatientComponent } from './patient/patient.component';
import { FinancialComponent } from './financial/financial.component';
import { ReportComponent } from './report/report.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from "./login/auth.guard";

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
    { path: 'attendance', component: AttendanceComponent, canActivate: [AuthGuard] },
    { path: 'calendar', component: CalendarComponent, canActivate: [AuthGuard] },
    { path: 'patient', component: PatientComponent, canActivate: [AuthGuard] },
    { path: 'financial', component: FinancialComponent, canActivate: [AuthGuard] },
    { path: 'report', component: ReportComponent, canActivate: [AuthGuard] }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
