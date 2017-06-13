import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';

import { PatientService } from './patient.service';
import { PageContent } from "app/service/page-content";
import { PageRequest } from "app/service/page-request";
import * as _ from "lodash";
import { ConfirmComponent } from "app/commons/components/dialogs/confirm/confirm.component";
import { MdDialog, MdDialogRef } from "@angular/material";
import { SnackbarService } from "app/commons/snackbar.service";
import { PatientDialogComponent } from "app/patient/patient-dialog/patient-dialog.component";

@Component({
    selector: 'app-patient',
    templateUrl: './patient.component.html',
    styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

    pageContent: PageContent = new PageContent();
    pageRequest: PageRequest = new PageRequest();

    constructor(private patientService: PatientService, public dialog: MdDialog,
        public snackbarService: SnackbarService) { }

    ngOnInit() {
        this.pageRequest.change.addListener("change", this.getList.bind(this));
        this.getList();
    }

    getList() {
        this.patientService.getPatientsPage(this.pageRequest)
            .subscribe(page => {
                this.pageRequest.fillValues(page);
                this.pageContent = page
            });
    };

    edit(p) {
        this.openFormDialog(p);
    }

    newPatient() {
        this.patientService.getNew().subscribe(p => this.openFormDialog(p));
    }

    confirmDelete(deletedPatient) {
        let dialogRef = this.dialog.open(ConfirmComponent)
        dialogRef.componentInstance.message = "Tem certeza?";
        dialogRef.afterClosed().subscribe(confirm => {
            if (confirm) {
                this.patientService.delete(deletedPatient.id).subscribe(response => this.getList());
            }
        });
    }

    openFormDialog(patient) {
        let d = this.dialog.open(PatientDialogComponent, {
            // width: '300px'
        });
        d.componentInstance.setPatient(patient);
        d.afterClosed().subscribe(hasChanged => {
            if (hasChanged) {
                this.getList();
            }
        });
    }

}
