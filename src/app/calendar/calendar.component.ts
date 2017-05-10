import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CalendarPeriodView } from './calendar-period-view.enum'
import { Calendar } from './calendar';
import { FormControl } from '@angular/forms';
import { EventService } from './event/event.service'

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
    patients = ["Brasil", "Argentina", "Bolivia"];
    filteredOptions: Observable<string[]>;

    constructor(private eventService: EventService) { 
        this.filteredOptions = this.myControl.valueChanges.startWith(null).map(
            val => val ? this.filter(val) : this.patients.slice());
        this.periodView = CalendarPeriodView.MONTHLY;
        this.pagination = {
            first: false, last: false
        }
        this.calendar = new Calendar(this.eventService);
    }

    ngOnInit() {
        
    }

    filter(val: string): string[] {
        return this.patients.filter(p => new RegExp(`^${val}`, 'gi').test(p));
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
