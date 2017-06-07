import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html'
})
export class TestsComponent implements OnInit {

  date ;

  constructor() { this.date=new Date();}

  ngOnInit() {
  }

}
