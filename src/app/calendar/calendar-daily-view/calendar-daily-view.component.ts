import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CalendarHourFilterPipe } from './../calendar-hour-filter.pipe'
@Component({
    selector: 'app-calendar-daily-view',
    templateUrl: './calendar-daily-view.component.html',
    styleUrls: ['./calendar-daily-view.component.scss']
})
export class CalendarDailyViewComponent implements OnInit, OnChanges {

    @Output() eventClick = new EventEmitter<any>();
    hours: any[];


    @Input() day: any[];
    constructor() {
        const minHours = 8;
        const maxHours = 18;
        this.hours = [];
        for (let i = minHours; i < maxHours; i++) {
            this.hours.push(i);
        }
    }

    ngOnInit() {
    }

    ngOnChanges() {
    }

    private findEventsByHour(events: any[], hour: number): any[] {
        const response: any[] = [];
        for (const event of events) {
            if (event.start.getHours() === hour) {
                response.push(event);
            }
        }
        return response;
    }

    onclick() {

    }

}
