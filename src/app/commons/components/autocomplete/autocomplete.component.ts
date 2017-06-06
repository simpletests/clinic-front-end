import { Component, OnInit, Input, Output, forwardRef } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from "@angular/forms/";
import { Observable } from "rxjs/Rx";
import { ValueAccessor } from "app/commons/components/value-accessor";

export const CUSTOM_AUTOCOMPLETE_CONTROL_VALUE_ACESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => AutocompleteComponent),
  multi: true
}

@Component({
  selector: 'ss-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  providers: [CUSTOM_AUTOCOMPLETE_CONTROL_VALUE_ACESSOR]
})
export class AutocompleteComponent extends ValueAccessor<string> {

  myControl = new FormControl();
  filteredOptions: Observable<any[]>;
  @Input() querySearch;
  @Input() displayFn;
  @Input() placeholder;

  constructor() {
    super();
    this.filteredOptions = this.myControl.valueChanges
      .flatMap(qry => {
        return this.querySearch(qry);
      });
  }

}
