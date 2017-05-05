import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {CalendarPeriodView} from './calendar-period-view.enum'
import {Calendar} from './calendar';
import {FormControl} from '@angular/forms';

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


    constructor() {}

    ngOnInit() {
        this.filteredOptions = this.myControl.valueChanges.startWith(null).map(
            val => val ? this.filter(val) : this.patients.slice());
        this.periodView = CalendarPeriodView.MONTHLY;
        this.pagination = {
            first: false, last: false
        }
        this.calendar = new Calendar();
    }

    filter(val: string): string[] {
        return this.patients.filter(p => new RegExp(`^${val}`, 'gi').test(p));
    }

    changeDate(i) {

    }

    openDialog() {

    }
}
