import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-calendar-weekly-view',
    templateUrl: './calendar-weekly-view.component.html',
    styleUrls: ['./calendar-weekly-view.component.scss']
})
export class CalendarWeeklyViewComponent implements OnInit {

    @Input() week;
    constructor() {}

    ngOnInit() {
    }

}
