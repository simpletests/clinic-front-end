import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueAccessor } from 'app/commons/components/value-accessor';

export const CUSTOM_INPUT_CONTROL_VALUE_ACESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputComponent),
  multi: true
}

@Component({
  selector: 'ss-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACESSOR]
})
export class InputComponent extends ValueAccessor<string> {

  @Input('name') name: string;
  @Input('placeholder') placeholder: string;
  @Input('type') type = 'text';
}
