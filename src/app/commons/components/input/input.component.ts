import { Component, forwardRef, OnInit, Input, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";

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
export class InputComponent implements ControlValueAccessor {

  @Input('type') type: string;
  @Input('isTextarea') isTextarea: boolean = false;
  @Input('name') name: string;
  @Input('placeholder') placeholder: string;

  private innerValue: any = '';
  private onChangeCallback: (_: any) => void = () => {};
  private onTouchedCallback: () => void = () => {};

  get value() { return this.innerValue; }
  set value(value) {
    this.innerValue = value;
    this.onChangeCallback(value);
  }

  writeValue(value: any): void {
    this.innerValue = value;
  }
  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    throw new Error("Method not implemented.");
  }
}
