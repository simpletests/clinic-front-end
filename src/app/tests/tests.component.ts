import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html'
})
export class TestsComponent implements OnInit {

  color = { type: "primary", name: "blue" };

  constructor() { }

  ngOnInit() {
  }

  querySearch(qry: string): Observable<any[]> {
    console.log("query search");
    return Observable.of([{ type: "primary", name: "red" },
    { type: "primary", name: "blue" },
    { type: "primary", name: "green" }].filter(obj => obj.name.startsWith(qry)));
  }

  querySearchGame(qry: string): Observable<any[]> {
    console.log("query search game");
    return Observable.of([{ type: "classic", name: "Glauber in the forest" },
    { type: "fps", name: "Counter stirke" },
    { type: "sandbox", name: "Don't Starve Together" }].filter(obj => obj.name.startsWith(qry)));
  }

  displayFn(obj: any): string {
    return (obj && obj.name) ? obj.name : "";
  }

}
