import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/mergeMap';

import { MdDialogRef } from "@angular/material";
import { PatientService } from "app/patient/patient.service";
import { EventService } from "app/calendar/event/event.service";

import * as _ from 'lodash';
import { PageRequest } from "app/service/page-request";

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

  constructor(public dialogRef: MdDialogRef<EventDialogComponent>, public patientService: PatientService
    , public eventService: EventService) {
    this.filteredOptions = this.myControl.valueChanges
      .flatMap(qry => this.querySearch(qry));
    this.createTimes();

  }

  createTimes() {
    this.times = [];
    let auxDate = new Date(0);
    for (var hour = 8; hour < 18; hour++) {
      auxDate.setHours(hour);
      for (var minute = 0; minute < 60; minute += 15) {
        auxDate.setMinutes(minute);
        this.times.push(_.cloneDeep(auxDate));
      }
    }
  }

  displayHoras(date: Date): string {
    var str = date.toLocaleTimeString();
    return str.substring(0, str.length - 3);
    // return date.getHours() + ":" + date.getMinutes();
  }

  querySearch(qry: string): Observable<any[]> {
    let pageRequest = new PageRequest();
    pageRequest.search = qry;
    return this.patientService.getPatientsPage(pageRequest)
      .map(data => data.content);
  }

  ngOnInit() {
  }

  saveOrUpdate() {
    this.eventService.saveOrUpdate(this.event).subscribe(response => {
      if (response.ok) {
        console.log("save event ok");
        this.dialogRef.close(true);
      } else {
        console.log("save event failed");
        this.dialogRef.close(true);
      }
    });
  }

  delete(event) {
    this.eventService.delete(event.id).subscribe(response => {
      if (response.ok) {
        console.log("delete event ok");
        this.dialogRef.close(true);
      } else {
        console.log("delete event failed");
        this.dialogRef.close(true);
      }
    });
  }

  displayFn(obj: any): string {
    return (obj && obj.name) ? obj.name : "";
  }

  cancel() {

  }

  setEvent(event) {
    this.event = _.cloneDeep(event);
    this.time = new Date(0);
    this.time.setHours(this.event.start.getHours());
    this.time.setMinutes(this.event.start.getMinutes());
    this.duration = Math.floor((Math.abs(this.event.start - this.event.end) / 1000) / 60);
  }

  // filter(val: string): string[] {
  //   this.fillList(val);
  //   return this.patients.filter(p => new RegExp(`^${val}`, 'gi').test(p.name));
  // }

  // fillList(search?: string) {
  //   this.patientService.getPatients().map(data => data.json())
  //     .subscribe(data => this.patients = data.content);
  // }


}
