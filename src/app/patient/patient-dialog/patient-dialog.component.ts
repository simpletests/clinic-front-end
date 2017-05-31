import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from "@angular/material";
import { PatientService } from "app/patient/patient.service";

@Component({
  selector: 'app-patient-dialog',
  templateUrl: './patient-dialog.component.html',
  styleUrls: ['./patient-dialog.component.scss']
})
export class PatientDialogComponent {

  patient: any;

  constructor(public dialogRef: MdDialogRef<PatientDialogComponent>,
    public patientService: PatientService) {

  }

  delete() {
    this.patientService.delete(this.patient.id)
      .subscribe(event => event.ok ? this.dialogRef.close(true) : null);
  }

  saveOrUpdate() {
    this.patientService.saveOrUpdate(this.patient)
      .subscribe(event => event.ok ? this.dialogRef.close(true) : null);;
  }

}
