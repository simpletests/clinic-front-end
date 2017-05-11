import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CalendarPeriodView } from './calendar-period-view.enum'
import { Calendar } from './calendar';
import { FormControl } from '@angular/forms';
import { EventService } from './event/event.service'
import { PatientService } from "app/patient/patient.service";
import { MdDialog, MdDialogRef } from "@angular/material";
import { EventDialogComponent } from './event/event-dialog/event-dialog.component';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

    calendar: Calendar;
    pagination;
    periodView: CalendarPeriodView;
    selectedEvent;

    constructor(private eventService: EventService, private patientService: PatientService, public dialog: MdDialog) {
        this.periodView = CalendarPeriodView.MONTHLY;
        this.pagination = {
            first: false, last: false
        }
        this.calendar = new Calendar(this.eventService);
    }

    ngOnInit() {

    }

    eventClick(event) {
        this.openDialog(event);
    }

    changeDate(i) {
        this.calendar.changeDate(i, this.periodView);
    }

    openDialog(event) {
        let d = this.dialog.open(EventDialogComponent, {
            width: '250px'
        });
        event = event || { start: new Date(), end: new Date(), patient: undefined };
        d.componentInstance.event = event;
        d.afterClosed().subscribe(result => {
            this.selectedEvent = result;
        });
    }
}

