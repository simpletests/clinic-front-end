import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/mergeMap';

import { MdDialogRef } from '@angular/material';
import { PatientService } from 'app/patient/patient.service';
import { EventService } from 'app/calendar/event/event.service';
import { DatePipe } from '@angular/common';

import * as _ from 'lodash';
import * as moment from 'moment';
import { PageRequest } from 'app/service/page-request';

@Component({
  selector: 'app-event-dialog',
  templateUrl: './event-dialog.component.html',
  styleUrls: ['./event-dialog.component.scss']
})
export class EventDialogComponent implements OnInit {

  event;
  myControl = new FormControl();
  filteredOptions: Observable<any[]>;
  time: Date;
  times: Date[];
  duration: number;

  constructor(public dialogRef: MdDialogRef<EventDialogComponent>,
    public patientService: PatientService
    , public eventService: EventService) {
    this.filteredOptions = this.myControl.valueChanges
      .flatMap(qry => this.querySearch(qry));
    this.createTimes();

  }

  createTimes() {
    this.times = [];
    const auxDate = new Date(0);
    for (let hour = 8; hour < 18; hour++) {
      auxDate.setHours(hour);
      for (let minute = 0; minute < 60; minute += 15) {
        auxDate.setMinutes(minute);
        this.times.push(_.cloneDeep(auxDate));
      }
    }
  }

  displayHoras(date: Date): string {
    // let str = date.toLocaleTimeString();
    // return str.substring(0, str.length - 3);
    // return new DatePipe('us').transform(date+'', 'HH:mm');
    return date.getHours() + ':' + (date.getMinutes() < 10 ? date.getMinutes() + '0' : date.getMinutes());
  }

  querySearch(qry: string): Observable<any[]> {
    const pageRequest = new PageRequest();
    pageRequest.search = qry;
    return this.patientService.getPatientsPage(pageRequest)
      .map(data => data.content);
  }

  ngOnInit() {
  }

  saveOrUpdate() {
    this.event.start.setMinutes(this.time.getMinutes());
    this.event.start.setHours(this.time.getHours());
    this.event.end = moment(this.event.start).add(this.duration, 'minutes').toDate();
    this.eventService.saveOrUpdate(this.event).subscribe(response => {
      if (response.ok) {
        console.log('save event ok');
        this.dialogRef.close(true);
      } else {
        console.log('save event failed');
        this.dialogRef.close(true);
      }
    });
  }

  delete(event) {
    this.eventService.delete(event.id).subscribe(response => {
      if (response.ok) {
        console.log('delete event ok');
        this.dialogRef.close(true);
      } else {
        console.log('delete event failed');
        this.dialogRef.close(true);
      }
    });
  }

  displayFn(obj: any): string {
    return (obj && obj.name) ? obj.name : '';
  }

  cancel() {

  }

  setEvent(event) {
    this.event = _.cloneDeep(event);
    this.event.start = this.transformDate(this.event.start);
    this.event.end = this.transformDate(this.event.end);
    this.time = this.times.filter(t =>
      t.getHours() === this.event.start.getHours()
      && t.getMinutes() === this.event.start.getMinutes())[0];
    this.duration = moment.duration(moment(this.event.end).diff(this.event.start)).asMinutes();
    this.duration = this.duration || 15;
  }

  // filter(val: string): string[] {
  //   this.fillList(val);
  //   return this.patients.filter(p => new RegExp(`^${val}`, 'gi').test(p.name));
  // }

  // fillList(search?: string) {
  //   this.patientService.getPatients().map(data => data.json())
  //     .subscribe(data => this.patients = data.content);
  // }

  transformDate(str: string): Date { // FIXME
    return moment(str).toDate();
  }

}
