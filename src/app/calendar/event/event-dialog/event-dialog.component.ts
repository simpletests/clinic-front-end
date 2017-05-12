import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/mergeMap';

import { MdDialogRef } from "@angular/material";
import { PatientService } from "app/patient/patient.service";
import { EventService } from "app/calendar/event/event.service";

@Component({
  selector: 'app-event-dialog',
  templateUrl: './event-dialog.component.html',
  styleUrls: ['./event-dialog.component.scss']
})
export class EventDialogComponent implements OnInit {

  event;
  myControl = new FormControl();
  filteredOptions: Observable<any[]>;

  constructor(public dialogRef: MdDialogRef<EventDialogComponent>, public patientService: PatientService
    , public eventService: EventService) {
    this.filteredOptions = this.myControl.valueChanges
      .flatMap(qry => this.querySearch(qry));
  }

  querySearch(qry: string): Observable<any[]> {
    return this.patientService.getPatients(0, 0, qry)
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

  // filter(val: string): string[] {
  //   this.fillList(val);
  //   return this.patients.filter(p => new RegExp(`^${val}`, 'gi').test(p.name));
  // }

  // fillList(search?: string) {
  //   this.patientService.getPatients().map(data => data.json())
  //     .subscribe(data => this.patients = data.content);
  // }


}
