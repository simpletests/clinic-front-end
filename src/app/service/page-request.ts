import { EventEmitter } from "events";
import { OnChanges, Input } from "@angular/core";
import { Observable } from "rxjs/Observable";

export class PageRequest {
    change = new EventEmitter();
    page: number = 0;
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
        this.page = response.page;
        this.first = response.first;
        this.last = response.last;
        this.totalPages = response.totalPages;
        this.totalElements = response.totalElements;
        this.numberOfElements = response.numberOfElements;
    }

    nextPage() {
        this.setPage(this.page + 1);
    }

    previousPage() {
        this.setPage(this.page - 1);
    }

    firstPage() {
        this.setPage(0);
    }

    lastPage() {
        this.setPage(this.totalPages);
    }

    setPage(number) {
        this.page = number;
        this.buttonPages = [];
        for (let i = Math.max(this.page - 3, 0); i < Math.min(this.page + 3, this.totalPages); i++) {
            this.buttonPages.push(i);
        }
        this.ngOnChanges();
    }



    ngOnChanges() {
        this.change.emit("change");
    }
}