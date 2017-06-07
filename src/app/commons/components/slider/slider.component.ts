import { Component, OnInit, Input, Output, forwardRef } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from "@angular/forms/";
import { Observable } from "rxjs/Rx";
import { ValueAccessor } from "app/commons/components/value-accessor";

export const CUSTOM_SLIDER_CONTROL_VALUE_ACESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SliderComponent),
  multi: true
}
@Component({
  selector: 'ss-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  providers: [CUSTOM_SLIDER_CONTROL_VALUE_ACESSOR]
})
export class SliderComponent extends ValueAccessor<string> {
  @Input() placeholder: string;
  @Input() disabled: boolean;
  @Input() min: number;
  @Input() max: number;
  @Input() step = 5;
  constructor() {
    super();
  }

  ngOnInit() {
  }

}
