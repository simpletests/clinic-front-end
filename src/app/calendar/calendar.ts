export class Calendar {

    weeks: any[];

    now: Date;

    weekStartsOn: number;

    constructor() {
        this.weeks = [];
        this.now = new Date();
        var count = 0;
        for (var i = 0; i < 4; i++) {
            this.weeks[i] = [];
            for (var j = 0; j < 7; j++) {
                this.weeks[i][j] = count;
                count++;
            }
        };
    }


    //    setWeekStartsOn(i: string) {
    //        i = i || "0";
    //        var d: number = parseInt(i, 10);
    //        if (!isNaN(d) && d >= 0 && d <= 6) {
    //            this.weekStartsOn = d;
    //        } else {
    //            this.weekStartsOn = 0;
    //        }
    //        return this.weekStartsOn;
    //    };
    //this.setStartDateOfMonth = function (i) {
    //    var d = parseInt(i || 1, 10);
    //    if (!isNaN(d) && d >= 1 && d <= 31) {
    //        this.startDateOfMonth = d;
    //    } else {
    //        this.startDateOfMonth = 1;
    //    }
    //    return this.startDateOfMonth;
    //};
    //this.setNoOfDays = function (i) {
    //    var d = parseInt(i || 0, 10);
    //    if (!isNaN(d) && d > 0) {
    //        this.noOfDays = d;
    //    } else {
    //        this.noOfDays = 0;
    //    }
    //    return this.noOfDays;
    //};
    //this.options = angular.isObject(options) ? options : {};
    //this.year = now.getFullYear();
    //this.month = now.getMonth();
    //this.day = now.getDate();
    //this.weeks = [];
    //this.weekStartsOn = this.setWeekStartsOn(this.options.weekStartsOn);
    //this.startDateOfMonth = this.setStartDateOfMonth(this.options.startDateOfMonth);
    //this.noOfDays = this.setNoOfDays(this.options.noOfDays);
    //this.getEvents = getEvents;
    //
    //this.centerOnNow = function () {
    //    var currentDate = new Date();
    //    if (this.month != currentDate.getMonth()) {
    //        this.init(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDay());
    //    }
    //    for (var i = 0; i < this.weeks.length; i++) {
    //        if (this.weeks[i][0].date.getDate() <= currentDate.getDate() &&
    //            this.weeks[i][this.weeks[i].length - 1].date.getDate() >= currentDate.getDate()) {
    //            this.currentWeekOfMonth = i;
    //            break;
    //        }
    //    }
    //    this.currentDayOfWeek = currentDate.getDay();
    //}
    //
    //this.nextMonth = function () {
    //    if (this.month < 11) {
    //        this.init(this.start.getFullYear(), this.start.getMonth() + 1, 1);
    //    } else {
    //        this.init(this.start.getFullYear() + 1, 0, 1);
    //    }
    //};
    //this.prevMonth = function () {
    //    if (this.month) {
    //        this.init(this.start.getFullYear(), this.start.getMonth() - 1, 1);
    //    } else {
    //        this.init(this.start.getFullYear() - 1, 11, 1);
    //    }
    //};
    //this.nextWeek = function () {
    //    this.currentWeekOfMonth += 1;
    //    if (this.currentWeekOfMonth >= this.weeks.length) {
    //        this.nextMonth();
    //        this.currentWeekOfMonth = 1;
    //    }
    //};
    //this.prevWeek = function () {
    //    this.currentWeekOfMonth -= 1;
    //    if (this.currentWeekOfMonth < 0) {
    //        this.prevMonth();
    //        this.currentWeekOfMonth = this.weeks.length - 2;
    //    }
    //};
    //this.nextDay = function () {
    //    this.currentDayOfWeek += 1;
    //    if (this.currentDayOfWeek >= this.weeks[this.currentWeekOfMonth].length) {
    //        this.nextWeek();
    //        this.currentDayOfWeek = 0;
    //    }
    //};
    //this.prevDay = function () {
    //    this.currentDayOfWeek -= 1;
    //    if (this.currentDayOfWeek < 0) {
    //        this.prevWeek();
    //        this.currentDayOfWeek = this.weeks[this.currentWeekOfMonth].length - 1;
    //    }
    //};
    //this.getCurrentWeek = function () {
    //    return this.weeks[this.currentWeekOfMonth];
    //}
    //this.getCurrentDay = function () {
    //    return this.getCurrentWeek()[this.currentDayOfWeek];
    //}
    //// Month should be the javascript indexed month, 0 is January, etc.
    //this.init = function (year, month, day) {
    //    var now = new Date();
    //    this.year = angular.isDefined(year) ? year : now.getFullYear();
    //    this.month = angular.isDefined(month) ? month : now.getMonth();
    //    this.day = angular.isDefined(day) ? day : now.getDate();
    //    this.currentDayOfWeek = 0;
    //    this.currentWeekOfMonth = 0;
    //    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    //    var monthLength = daysInMonth[this.month];
    //    // Figure out if is a leap year.
    //    if (this.month === 1) {
    //        if ((this.year % 4 === 0 && this.year % 100 !== 0) || this.year % 400 === 0) {
    //            monthLength = 29;
    //        }
    //    }
    //
    //    // First day of calendar month.
    //    if (angular.isDefined(this.options.startDateOfMonth)) {
    //        this.start = new Date(this.year, this.month, this.startDateOfMonth);
    //    } else {
    //        this.start = new Date(this.year, this.month, 1);
    //    }
    //
    //    var date = angular.copy(this.start);
    //    if (date.getDate() === 1) {
    //        while (date.getDay() !== this.weekStartsOn) {
    //            date.setDate(date.getDate() - 1);
    //            monthLength++;
    //        }
    //    }
    //
    //    if (this.noOfDays !== 0) {
    //        while (this.noOfDays % 7 !== 0) {
    //            this.noOfDays++;
    //        }
    //        monthLength = this.noOfDays;
    //    } else {
    //        // Last day of calendar month.
    //        while (monthLength % 7 !== 0) {
    //            monthLength++;
    //        }
    //    }
    //
    //    // Last day of calendar month.
    //    while (monthLength % 7 !== 0) {
    //        monthLength++;
    //    }
    //
    //    this.weeks = [];
    //    for (var i = 0; i < monthLength; ++i) {
    //        var events = [];
    //        // Let's start a new week.
    //        if (i % 7 === 0) {
    //            this.weeks.push([]);
    //        }
    //
    //        // Add copy of the date. If not a copy,
    //        // it will get updated shortly.
    //        this.weeks[this.weeks.length - 1].push({date: angular.copy(date), events: events});
    //        if (date == new Date()) {
    //            this.currentDayOfWeek = this.weeks[this.weeks.length - 1].length - 1;
    //            this.currentWeekOfMonth = this.weeks.length - 1;
    //        }
    //        // Increment it.
    //        date.setDate(date.getDate() + 1);
    //    }
    //    this.refreshEvents();
    //};
    //
    //this.refreshEvents = function () {
    //    var start = this.weeks[0][0].date;
    //    var end = this.weeks[this.weeks.length - 1]
    //    [this.weeks[this.weeks.length - 1].length - 1].date;
    //    this.getEvents(start, end);
    //}
    //
    //this.fillEvents = function (events) {
    //    this.clearEvents();
    //    for (var i = 0; i < events.length; i++) {
    //        var start = new Date(events[i].start);
    //        var end = new Date(events[i].end);
    //        var date = this.findDate(start);
    //        date.events.push(events[i]);
    //    }
    //};
    //
    //this.findDate = function (date) {
    //    for (var i = 0; i < this.weeks.length; i++) {
    //        for (var j = 0; j < this.weeks[i].length; j++) {
    //            if (this.weeks[i][j].date.getDate() == date.getDate()) {
    //                return this.weeks[i][j];
    //            }
    //        }
    //    }
    //}
    //
    //this.clearEvents = function () {
    //    for (var i = 0; i < this.weeks.length; i++) {
    //        for (var j = 0; j < this.weeks[i].length; j++) {
    //            this.weeks[i][j].events = [];
    //        }
    //    }
    //}
    //
    //this.init(year, month, day);
}