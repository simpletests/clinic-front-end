import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-calendar-monthly-view',
    templateUrl: './calendar-monthly-view.component.html',
    styleUrls: ['./calendar-monthly-view.component.scss']
})
export class CalendarMonthlyViewComponent implements OnInit {

    @Input() weeks;
    constructor() {}

    ngOnInit() {
    }

}
