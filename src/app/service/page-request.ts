import { EventEmitter } from "events";
import { OnChanges, Input } from "@angular/core";
import { Observable } from "rxjs/Observable";

export class PageRequest {
    change = new EventEmitter();
    page: number = 0;
    size: number = 5;
    search: string = "";
    first: boolean;
    last: boolean;
    nextPage() {
        this.page++;
        this.ngOnChanges();
    }

    previousPage() {
        this.page--;
        this.ngOnChanges();
    }

    firstPage() {
        this.page = 0;
    }

    lastPage() {
        //this.page = 0;
    }

    ngOnChanges() {
        this.change.emit("change");
    }
}