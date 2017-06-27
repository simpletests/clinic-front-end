import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueAccessor } from 'app/commons/components/value-accessor';

export const CUSTOM_SELECTONE_CONTROL_VALUE_ACESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectOneComponent),
  multi: true
}

@Component({
  selector: 'ss-select',
  templateUrl: './select-one.component.html',
  styleUrls: ['./select-one.component.scss'],
  providers: [CUSTOM_SELECTONE_CONTROL_VALUE_ACESSOR]
})
export class SelectOneComponent extends ValueAccessor<string> {

  @Input('name') name: string;
  @Input('placeholder') placeholder: string;
  @Input('options') options: any[];
  @Input('displayFn') displayFn = (v) => v;
}
