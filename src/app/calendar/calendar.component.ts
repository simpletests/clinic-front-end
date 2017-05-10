import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CalendarPeriodView } from './calendar-period-view.enum'
import { Calendar } from './calendar';
import { FormControl } from '@angular/forms';
import { EventService } from './event/event.service'
import { PatientService } from "app/patient/patient.service";

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

    myControl = new FormControl();
    calendar: Calendar;
    pagination;
    periodView: CalendarPeriodView;
    patientsOptions: Observable<any[]>;

    constructor(private eventService: EventService,private patientService:PatientService) { 
        this.patientService.getPatients().map(content=>content.json())
        .subscribe(patients=>this.patientsOptions=patients.content);
        this.periodView = CalendarPeriodView.MONTHLY;
        this.pagination = {
            first: false, last: false
        }
        this.calendar = new Calendar(this.eventService);
    }

    ngOnInit() {
        
    }

    eventClick(event) {
        console.log("Event click on calendar");
    }

    changeDate(i) {
        this.calendar.changeDate(i, this.periodView);
    }

    openDialog() {

    }
}
