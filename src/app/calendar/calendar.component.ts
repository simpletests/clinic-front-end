import {Component, OnInit} from '@angular/core';
import {CalendarPeriodView} from './calendar-period-view.enum'
import {Calendar} from './calendar';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

    calendar: Calendar;
    pagination;
    periodView: CalendarPeriodView;


    constructor() {}

    ngOnInit() {
        this.periodView = CalendarPeriodView.MONTHLY;
        this.pagination = {
            first: false, last: false
        }
        this.calendar = new Calendar();
    }

    changeDate(i) {

    }

    openDialog() {

    }
}
