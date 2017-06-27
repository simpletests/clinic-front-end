import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'app-calendar-weekly-view',
    templateUrl: './calendar-weekly-view.component.html',
    styleUrls: ['./calendar-weekly-view.component.scss']
})
export class CalendarWeeklyViewComponent implements OnInit {

    @Output() eventClick = new EventEmitter<any>();
    hoursTier: any[];
    @Input() week: any[];
    constructor() {

    }

    ngOnInit() {
        this.hoursTier = [];
        const minHours = 8;
        const maxHours = 18;
        for (let i = minHours; i < maxHours; i++) {
            this.hoursTier.push(i);
        }
    }

}
