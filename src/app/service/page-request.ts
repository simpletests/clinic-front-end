import { EventEmitter } from "events";
import { OnChanges, Input } from "@angular/core";
import { Observable } from "rxjs/Observable";

export class PageRequest {
    change = new EventEmitter();
    number: number = 0;
    size: number = 5;               //"max"size of the page
    search: string = "";
    first: boolean;
    last: boolean;
    totalPages: number;
    totalElements: number;
    numberOfElements: number;   //components on the page
    buttonPages = [];

    fillValues(response) {
        this.totalPages = response.totalPages;
        this.number = response.number;
        this.first = response.first;
        this.last = response.last;
        this.totalPages = response.totalPages;
        this.totalElements = response.totalElements;
        this.numberOfElements = response.numberOfElements;
        this.createButtonPages();
    }

    nextPage() {
        this.setNumber(this.number + 1);
    }

    previousPage() {
        this.setNumber(this.number - 1);
    }

    firstPage() {
        this.setNumber(0);
    }

    lastPage() {
        this.setNumber(this.totalPages - 1);
    }

    setNumber(number) {
        this.number = number;
        this.createButtonPages();
        this.ngOnChanges();
    }

    private createButtonPages() {
        this.buttonPages = [];
        for (let i = Math.max(this.number - 3, 0); i <= Math.min(this.number + 3, this.totalPages - 1); i++) {
            this.buttonPages.push(i);
        }
    }

    ngOnChanges() {
        this.change.emit("change");
    }
}