import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from "@angular/material";
import { PatientService } from "app/patient/patient.service";
import * as _ from 'lodash';
import * as moment from 'moment';
import { GenderService } from "app/commons/gender.service";

@Component({
  selector: 'app-patient-dialog',
  templateUrl: './patient-dialog.component.html',
  styleUrls: ['./patient-dialog.component.scss']
})
export class PatientDialogComponent implements OnInit {

  patient: any;
  postalCode;
  genders = [];

  constructor(public dialogRef: MdDialogRef<PatientDialogComponent>,
    public patientService: PatientService, public genderService: GenderService) {
  }

  ngOnInit() {
    this.genderService.fillOptions(this.genders);
  }

  delete() {
    this.patientService.delete(this.patient.id)
      .subscribe(event => event.ok ? this.dialogRef.close(true) : null);
  }

  saveOrUpdate() {
    this.patientService.saveOrUpdate(this.patient)
      .subscribe(event => event.ok ? this.dialogRef.close(true) : null);;
  }

  setPatient(patient) {
    this.patient = _.cloneDeep(patient)
    this.patient.birthdate = this.transformDate(this.patient.birthdate + "T00:00:00")
  }

  transformDate(str: string): Date { //FIXME
    return moment(str).toDate();
  }

  genderDisplayFn(gender) {
    return gender;
  }

}
