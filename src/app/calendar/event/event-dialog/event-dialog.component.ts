import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from "rxjs/Observable";
import { MdDialogRef } from "@angular/material";
import { PatientService } from "app/patient/patient.service";

@Component({
  selector: 'app-event-dialog',
  templateUrl: './event-dialog.component.html',
  styleUrls: ['./event-dialog.component.scss']
})
export class EventDialogComponent implements OnInit {

  event;
  myControl = new FormControl();
  patients = [];
  filteredOptions: Observable<string[]>;

  constructor(public dialogRef: MdDialogRef<EventDialogComponent>, public patientService: PatientService) {
    this.fillList();
    this.filteredOptions = this.myControl.valueChanges.startWith(null).map(
      val => val ? this.filter(val) : this.patients.slice());

  }

  ngOnInit() {
  }

  filter(val: string): string[] {
    this.fillList(val);
    return this.patients.filter(p => new RegExp(`^${val}`, 'gi').test(p.name));
  }

  fillList(search?: string) {
    this.patientService.getPatients().map(data => data.json())
      .subscribe(data => this.patients = data.content);
  }


}
