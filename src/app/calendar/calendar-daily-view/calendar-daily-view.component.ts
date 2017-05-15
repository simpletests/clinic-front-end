import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
    selector: 'app-calendar-daily-view',
    templateUrl: './calendar-daily-view.component.html',
    styleUrls: ['./calendar-daily-view.component.scss']
})
export class CalendarDailyViewComponent implements OnInit {

    hoursTier: any[];

    @Input() day;
    constructor() { }

    ngOnInit() {
        this.hoursTier = [];
        for (let i = 0; i < 24; i++) {
            this.hoursTier[i] = {
                label: i <= 12 ? i + ' am' : i - 11 + ' pm',
                events: this.findEventsByHour(this.day.events, i)
            };
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
