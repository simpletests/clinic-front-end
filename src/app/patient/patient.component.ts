import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';

import { PatientService } from './patient.service';
import { PageContent } from "app/service/page-content";
import { PageRequest } from "app/service/page-request";
import * as _ from "lodash";

@Component({
    selector: 'app-patient',
    templateUrl: './patient.component.html',
    styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

    pageContent: PageContent = new PageContent();
    pageRequest: PageRequest = new PageRequest();

    patient: any;

    constructor(private patientService: PatientService) { }

    ngOnInit() {
        this.pageRequest.change.addListener("change", this.getPatients.bind(this));
        this.getPatients();
    }

    getPatients() {
        this.patientService.getPatientsPage(this.pageRequest)
            .subscribe(page => this.pageContent = page);
    };

    edit(p) {
        this.patient = _.cloneDeep(p);
    }

    save() {
        this.patientService.saveOrUpdate(this.patient).subscribe(() => {
            this.getPatients();
            this.patient = undefined;
        });
    }
}
