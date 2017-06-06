import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { ValueAccessor } from "app/commons/components/value-accessor";

export const CUSTOM_TEXTAREA_CONTROL_VALUE_ACESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TextareaComponent),
  multi: true
}

@Component({
  selector: 'ss-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  providers: [CUSTOM_TEXTAREA_CONTROL_VALUE_ACESSOR]
})
export class TextareaComponent extends ValueAccessor<string> {

  @Input('name') name: string;
  @Input('placeholder') placeholder: string;
}
