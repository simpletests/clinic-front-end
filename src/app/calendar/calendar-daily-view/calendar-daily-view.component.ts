import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { Observable } from "rxjs/Observable";

@Component({
    selector: 'app-calendar-daily-view',
    templateUrl: './calendar-daily-view.component.html',
    styleUrls: ['./calendar-daily-view.component.scss']
})
export class CalendarDailyViewComponent implements OnInit, OnChanges {

    @Output() eventClick = new EventEmitter<any>();
    hoursTier: any[];

    dayObservable: Observable<any>;

    @Input() day;
    constructor() {
        this.dayObservable = new Observable(this.day, day => {
            console.log("day changed!");
            if (day && day.events) {
                let minHours = 8;
                let maxHours = 18;
                this.hoursTier = [];
                for (let i = minHours; i < maxHours; i++) {
                    this.hoursTier.push({
                        label: i <= 12 ? i + ':00 am' : i - 12 + ':00 pm',
                        events: this.findEventsByHour(day.events, i)
                    });
                }
            }
        });
    }

    ngOnInit() {
    }

    ngOnChanges() {
    }

    private fillHoursTier() {


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
