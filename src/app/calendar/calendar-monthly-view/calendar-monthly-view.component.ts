import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-calendar-monthly-view',
    templateUrl: './calendar-monthly-view.component.html',
    styleUrls: ['./calendar-monthly-view.component.scss']
})
export class CalendarMonthlyViewComponent implements OnInit {

    @Output() eventClick = new EventEmitter<any>();

    @Input() weeks: string[];
    constructor() { }

    ngOnInit() {
    }

}
