import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';

import { PatientService } from './patient.service';
import { PageContent } from "app/service/page-content";
import { PageRequest } from "app/service/page-request";
import * as _ from "lodash";
import { ConfirmComponent } from "app/commons/components/dialogs/confirm/confirm.component";
import { MdDialog, MdSnackBar } from "@angular/material";

@Component({
    selector: 'app-patient',
    templateUrl: './patient.component.html',
    styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

    pageContent: PageContent = new PageContent();
    pageRequest: PageRequest = new PageRequest();

    patient: any;

    postalCode = {};

    constructor(private patientService: PatientService, public dialog: MdDialog,
        public snackBar: MdSnackBar) { }

    ngOnInit() {
        this.pageRequest.change.addListener("change", this.getPatients.bind(this));
        this.getPatients();
    }

    getPatients() {
        this.patientService.getPatientsPage(this.pageRequest)
            .subscribe(page => {
                this.pageRequest.fillValues(page);
                this.pageContent = page
            });
    };

    edit(p) {
        this.patient = _.cloneDeep(p);
    }

    newPatient() {
        this.patientService.getNew().subscribe(p => this.patient = p);
    }

    confirmDelete(deletedPatient) {
        let dialogRef = this.dialog.open(ConfirmComponent)
        dialogRef.componentInstance.message = "Are you sure?";
        dialogRef.afterClosed().subscribe(confirm => {
            if (confirm) {
                this.patientService.delete(deletedPatient.id).subscribe(response => this.getPatients());
            }
        });
    }

    testSnackBar() {
        this.snackBar.open("eeeei", "Close", { duration: 1000, extraClasses: ["warning"] });
    }
}
