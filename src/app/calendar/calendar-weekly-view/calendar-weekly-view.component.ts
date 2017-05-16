import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-calendar-weekly-view',
    templateUrl: './calendar-weekly-view.component.html',
    styleUrls: ['./calendar-weekly-view.component.scss']
})
export class CalendarWeeklyViewComponent implements OnInit, OnChanges {

    @Output() eventClick = new EventEmitter<any>();
    hoursDaysTier;
    @Input() week = [];
    constructor() { }

    ngOnInit() {
    }
    ngOnChanges() {
        this.fillHoursTier();
    }

    private fillHoursTier() {
        if (this.week) {
            this.hoursDaysTier = [];
            let minHours = 8;
            let maxHours = 18;
            for (let i = minHours; i < maxHours; i++) {
                this.hoursDaysTier[i] = [];
                for (let day of this.week) {
                    this.hoursDaysTier[i][day.date.getDay()] = {
                        label: i <= 12 ? i + ':00 am' : i - 12 + ':00 pm',
                        events: this.findEventsByHour(day.events, i)
                    };
                }
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

}
