import { CalendarPeriodView } from './calendar-period-view.enum'
import { EventService } from './event/event.service'
export class Calendar {

    now: Date;

    year: number;
    month: number;
    day: number;
    weeks: any[];
    weekStartsOn: number;
    startDateOfMonth: number;
    noOfDays: number;


    currentDayOfWeek: number;
    currentWeekOfMonth: number;
    start: Date;
    eventService: EventService;

    constructor(eventService: EventService) {
        this.eventService = eventService;
        this.now = new Date();
        this.year = this.now.getFullYear();
        this.month = this.now.getMonth();
        this.day = this.now.getDate();
        this.weeks = [];
        this.weekStartsOn = this.setWeekStartsOn();
        this.startDateOfMonth = this.setStartDateOfMonth();
        this.noOfDays = this.setNoOfDays();
        this.init(this.year, this.month, this.day);
    }

    setWeekStartsOn(i?: string): number {
        var d: number = parseInt(i || "0", 10);
        if (!isNaN(d) && d >= 0 && d <= 6) {
            this.weekStartsOn = d;
        } else {
            this.weekStartsOn = 0;
        }
        return this.weekStartsOn;
    };

    setStartDateOfMonth(i?: string): number {
        var d = parseInt(i || "1", 10);
        if (!isNaN(d) && d >= 1 && d <= 31) {
            this.startDateOfMonth = d;
        } else {
            this.startDateOfMonth = 1;
        }
        return this.startDateOfMonth;
    };
    setNoOfDays(i?: string): number {
        var d = parseInt(i || "0", 10);
        if (!isNaN(d) && d > 0) {
            this.noOfDays = d;
        } else {
            this.noOfDays = 0;
        }
        return this.noOfDays;
    };


    centerOnNow() {
        var currentDate = new Date();
        if (this.month != currentDate.getMonth()) {
            this.init(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDay());
        }
        for (var i = 0; i < this.weeks.length; i++) {
            if (this.weeks[i][0].date.getDate() <= currentDate.getDate() &&
                this.weeks[i][this.weeks[i].length - 1].date.getDate() >= currentDate.getDate()) {
                this.currentWeekOfMonth = i;
                break;
            }
        }
        this.currentDayOfWeek = currentDate.getDay();
    }
    getStartDate(): Date {
        return this.weeks[0][0].date;
    }
    getEndDate(): Date {
        return this.weeks[this.weeks.length - 1][this.weeks[this.weeks.length - 1].length - 1].date;
    }
    changeDate(i: number, periodView: CalendarPeriodView) {
        switch (periodView) {
            case CalendarPeriodView.MONTHLY:
                if (i > 0) {
                    this.nextMonth();
                } else {
                    this.prevMonth();
                }
                break;
            case CalendarPeriodView.WEEKLY:
                if (i > 0) {
                    this.nextWeek();
                } else {
                    this.prevWeek();
                }
                break;
            case CalendarPeriodView.DAILY:
                if (i > 0) {
                    this.nextDay();
                } else {
                    this.prevDay();
                }
                break;
        }
    }

    nextMonth() {
        if (this.month < 11) {
            this.init(this.start.getFullYear(), this.start.getMonth() + 1, 1);
        } else {
            this.init(this.start.getFullYear() + 1, 0, 1);
        }
    };
    prevMonth() {
        if (this.month) {
            this.init(this.start.getFullYear(), this.start.getMonth() - 1, 1);
        } else {
            this.init(this.start.getFullYear() - 1, 11, 1);
        }
    };
    nextWeek() {
        this.currentWeekOfMonth += 1;
        if (this.currentWeekOfMonth >= this.weeks.length) {
            this.nextMonth();
            this.currentWeekOfMonth = 1;
        }
    };
    prevWeek() {
        this.currentWeekOfMonth -= 1;
        if (this.currentWeekOfMonth < 0) {
            this.prevMonth();
            this.currentWeekOfMonth = this.weeks.length - 2;
        }
    };
    nextDay() {
        this.currentDayOfWeek += 1;
        if (this.currentDayOfWeek >= this.weeks[this.currentWeekOfMonth].length) {
            this.nextWeek();
            this.currentDayOfWeek = 0;
        }
    };
    prevDay() {
        this.currentDayOfWeek -= 1;
        if (this.currentDayOfWeek < 0) {
            this.prevWeek();
            this.currentDayOfWeek = this.weeks[this.currentWeekOfMonth].length - 1;
        }
    };
    getCurrentWeek() {
        return this.weeks[this.currentWeekOfMonth];
    }
    getCurrentDay() {
        return this.getCurrentWeek()[this.currentDayOfWeek];
    }
    // Month should be the javascript indexed month, 0 is January, etc.
    init(year, month, day) {
        var now = new Date();
        this.year = year ? year : now.getFullYear();
        this.month = month ? month : now.getMonth();
        this.day = day ? day : now.getDate();
        this.currentDayOfWeek = 0;
        this.currentWeekOfMonth = 0;
        var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        var monthLength = daysInMonth[this.month];
        // Figure out if is a leap year.
        if (this.month === 1) {
            if ((this.year % 4 === 0 && this.year % 100 !== 0) || this.year % 400 === 0) {
                monthLength = 29;
            }
        }

        // First day of calendar month.

        this.start = new Date(this.year, this.month, 1);

        var date = new Date(this.start.getTime())
        if (date.getDate() === 1) {
            while (date.getDay() !== this.weekStartsOn) {
                date.setDate(date.getDate() - 1);
                monthLength++;
            }
        }

        if (this.noOfDays !== 0) {
            while (this.noOfDays % 7 !== 0) {
                this.noOfDays++;
            }
            monthLength = this.noOfDays;
        } else {
            // Last day of calendar month.
            while (monthLength % 7 !== 0) {
                monthLength++;
            }
        }

        // Last day of calendar month.
        while (monthLength % 7 !== 0) {
            monthLength++;
        }

        this.weeks = [];
        for (var i = 0; i < monthLength; ++i) {
            // Let's start a new week.
            if (i % 7 === 0) {
                this.weeks.push([]);
            }

            // Add copy of the date. If not a copy,
            // it will get updated shortly.
            this.weeks[this.weeks.length - 1].push({ date: new Date(date.getTime()), events: [] });
            if (date == new Date()) {
                this.currentDayOfWeek = this.weeks[this.weeks.length - 1].length - 1;
                this.currentWeekOfMonth = this.weeks.length - 1;
            }
            // Increment it.
            date.setDate(date.getDate() + 1);
        }
        this.refreshEvents();
    };

    refreshEvents() {
        var start = this.weeks[0][0].date;
        var end = this.weeks[this.weeks.length - 1]
        [this.weeks[this.weeks.length - 1].length - 1].date;
        this.fillEvents();
    }

    fillEvents() {
        this.eventService.getEvents(this.getStartDate(), this.getEndDate())
            .map(response => response.json())
            .subscribe(events => {
                this.clearEvents();
                for (var i = 0; i < events.length; i++) {
                    var start = new Date(events[i].start);
                    var end = new Date(events[i].end);
                    var date = this.findDate(start);
                    date.events.push(events[i]);
                }
            });
    };

    findDate(date) {
        for (var i = 0; i < this.weeks.length; i++) {
            for (var j = 0; j < this.weeks[i].length; j++) {
                if (this.weeks[i][j].date.getDate() == date.getDate()) {
                    return this.weeks[i][j];
                }
            }
        }
    }

    clearEvents() {
        for (var i = 0; i < this.weeks.length; i++) {
            for (var j = 0; j < this.weeks[i].length; j++) {
                this.weeks[i][j].events = [];
            }
        }
    }

}