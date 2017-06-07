import { Component, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { Observable } from "rxjs/Rx";
import { ValueAccessor } from "app/commons/components/value-accessor";

export const CUSTOM_DATEPICKER_CONTROL_VALUE_ACESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DatepickerComponent),
  multi: true
}
@Component({
  selector: 'ss-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  providers:[CUSTOM_DATEPICKER_CONTROL_VALUE_ACESSOR]
})
export class DatepickerComponent extends ValueAccessor<string> {

  placeholder: string;
  constructor() {
    super();
  }


}
