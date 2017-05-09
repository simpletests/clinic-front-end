import {Component, OnInit, Input, Output} from '@angular/core';

@Component({
    selector: 'app-calendar-monthly-view',
    templateUrl: './calendar-monthly-view.component.html',
    styleUrls: ['./calendar-monthly-view.component.scss']
})
export class CalendarMonthlyViewComponent implements OnInit {

    @Input() @Output() weeks: string[];
    constructor() {}

    ngOnInit() {
        setTimeout(() => this.weeks = this.weeks.slice(1), 1000);
    }

}
