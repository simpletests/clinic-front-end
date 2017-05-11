import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';

import { PatientService } from './patient.service';

@Component({
    selector: 'app-patient',
    templateUrl: './patient.component.html',
    styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

    patients: any[];

    constructor(
        private patientService: PatientService) { }

    ngOnInit() {
        this.getPatients();
    }

    getPatients() {
        this.patientService.getPatients()
            .subscribe(data => {
                this.patients = data.content;
            });
    };
}
