import {Component, OnInit, Input, Output} from '@angular/core';

@Component({
    selector: 'app-calendar-daily-view',
    templateUrl: './calendar-daily-view.component.html',
    styleUrls: ['./calendar-daily-view.component.scss']
})
export class CalendarDailyViewComponent implements OnInit {

    @Input() day;
    constructor() {}

    ngOnInit() {
    }

    onclick() {

    }

}
