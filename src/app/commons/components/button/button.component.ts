import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'ss-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() label: string;
  @Input() disabled: Observable<boolean>;
  @Input() icon: string;
  @Input() shape = 'button';
  @Output() eventClick = new EventEmitter();
  @Input() color = '';

  constructor() { }

  ngOnInit() {
  }

}
