import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AttendanceComponent} from './attendance/attendance.component';
import {CalendarComponent} from './calendar/calendar.component';
import {PatientComponent} from './patient/patient.component';
import {FinancialComponent} from './financial/financial.component';
import {ReportComponent} from './report/report.component';

const routes: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'attendance', component: AttendanceComponent},
    {path: 'calendar', component: CalendarComponent},
    {path: 'patient', component: PatientComponent},
    {path: 'financial', component: FinancialComponent},
    {path: 'report', component: ReportComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
