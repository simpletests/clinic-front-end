import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { EventService } from 'app/calendar/event/event.service';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html'
})
export class TestsComponent implements OnInit {

  date;
  dateText;

  constructor(public eventService: EventService) { this.date = new Date(); }
  ngOnInit() {
  }

  testEvent() {
    console.log('test');
    this.eventService.saveOrUpdate({
      start: this.dateText,
      end: this.dateText,
      patient: null,
      handbook: null
    })
  }

}
