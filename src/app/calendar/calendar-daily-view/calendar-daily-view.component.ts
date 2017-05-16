import { Component, OnInit, Input, Output, OnChanges } from '@angular/core';
import { Observable } from "rxjs/Observable";

@Component({
    selector: 'app-calendar-daily-view',
    templateUrl: './calendar-daily-view.component.html',
    styleUrls: ['./calendar-daily-view.component.scss']
})
export class CalendarDailyViewComponent implements OnInit, OnChanges {

    hoursTier: any[];

    @Input() day;
    constructor() {
    }

    ngOnInit() {
        this.fillHoursTier();
    }

    ngOnChanges() {
        this.fillHoursTier();
    }

    private fillHoursTier() {
        if (this.day && this.day.events) {
            let minHours = 8;
            let maxHours = 18;
            this.hoursTier = [];
            for (let i = minHours; i < maxHours; i++) {
                this.hoursTier.push({
                    label: i <= 12 ? i + ':00 am' : i - 12 + ':00 pm',
                    events: this.findEventsByHour(this.day.events, i)
                });
            }
        }
    }

    private findEventsByHour(events: any[], hour: number): any[] {
        let response: any[] = [];
        for (let event of events) {
            if (event.start.getHours() == hour) {
                response.push(event);
            }
        }
        return response;
    }

    onclick() {

    }

}
