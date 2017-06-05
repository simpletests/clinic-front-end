import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { ValueAccessor } from "app/commons/components/value-accessor";

export const CUSTOM_CHECKBOX_CONTROL_VALUE_ACESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckboxComponent),
  multi: true
}

@Component({
  selector: 'ss-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [CUSTOM_CHECKBOX_CONTROL_VALUE_ACESSOR]
})
export class CheckboxComponent extends ValueAccessor<boolean> {

  @Input('name') name: string;
  @Input('label') label: string;
}
