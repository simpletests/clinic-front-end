import { Component, OnInit, forwardRef, Input } from '@angular/core';
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
  providers: [CUSTOM_DATEPICKER_CONTROL_VALUE_ACESSOR]
})
export class DatepickerComponent extends ValueAccessor<Date> {
  @Input() startView = "year";
  @Input() startAt;
  @Input() placeholder: string;
  defaultStartDate = new Date(1980, 1, 1);
  constructor() {
    super();
  }

  getStartAt() {
    return this.value ? this.value : this.startAt ? this.startAt : new Date(1980, 1, 1);
  }


}
