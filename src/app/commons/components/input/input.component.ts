import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ss-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input('isTextarea') isTextarea: boolean = false;
  @Input('name') name: string;
  @Input('placeholder') placeholder: string;

  constructor() { }

  ngOnInit() {
  }

}
