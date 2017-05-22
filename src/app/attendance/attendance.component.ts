import { Component, OnInit } from '@angular/core';
import { EventService } from "app/calendar/event/event.service";
import { HandbookService } from "app/attendance/handbook.service";
import { PageRequest } from "app/service/page-request";
import { Observable } from "rxjs/Rx";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {
  event;
  pastHandbook;
  currentDate: Observable<Date>;
  startDateTime: Date;
  handbookPageRequest: PageRequest;
  constructor(public eventService: EventService, public handbookService: HandbookService, route: ActivatedRoute) {
    this.startDateTime = new Date();
    this.handbookPageRequest = new PageRequest();
    this.handbookPageRequest.size = 1;
    this.handbookPageRequest.change.addListener("change", this.fillPastHandbook.bind(this));
    this.currentDate = Observable.interval(1000).map(() => new Date(Math.abs(this.startDateTime.getTime() - new Date().getTime())));
    eventService.findOne(route.snapshot.params["eventId"]).subscribe(event => {
      this.event = event;
      this.fillPastHandbook();
    });
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

  save() {
    this.eventService.saveOrUpdate(this.event).subscribe(value => console.log("save ok"));
  }

}
