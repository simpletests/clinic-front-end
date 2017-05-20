import { Component, OnInit } from '@angular/core';
import { EventService } from "app/calendar/event/event.service";
import { HandbookService } from "app/attendance/handbook.service";
import { PageRequest } from "app/service/page-request";
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {
  event = { patient: { id: 1 } };
  disease = {};
  pastHandbook;
  handbook = { observations: "  " };
  currentDate: Observable<Date>;
  startDateTime: Date;
  handbookPageRequest: PageRequest;
  constructor(private eventService: EventService, public handbookService: HandbookService) {
    this.startDateTime = new Date();
    this.handbookPageRequest = new PageRequest();
    this.handbookPageRequest.size = 1;
    this.handbookPageRequest.change.addListener("change", this.fillPastHandbook.bind(this));
    this.fillPastHandbook();
    this.currentDate = Observable.interval(1000).map(() => new Date(Math.abs(this.startDateTime.getTime() - new Date().getTime())));
  }

  private fillPastHandbook() {
    this.handbookService.findAllPageable(this.event.patient, this.handbookPageRequest)
      .subscribe(page => {
        this.handbookPageRequest.fillValues(page);
        this.pastHandbook = page.content[0];
      });
  }

  ngOnInit() {
  }

}
