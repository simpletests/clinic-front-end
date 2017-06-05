import { ValueAccessor } from "app/commons/components/value-accessor";
import { ValidatorArray, AsyncValidatorArray, ValidationResult, validate, message } from "app/commons/components/validator";
import { NgModel } from "@angular/forms";
import { Observable } from "rxjs";

export abstract class ComponentBase<T> extends ValueAccessor<T> {

    protected abstract model: NgModel;

    constructor(private validators: ValidatorArray, private asyncValidators: AsyncValidatorArray) {
        super();
    }

    protected validate(): Observable<ValidationResult> {
        return validate(this.validators, this.asyncValidators)(this.model.control);
    }

    protected get invalid(): Observable<boolean> {
        return this.validate().map(v => Object.keys(v || {}).length > 0);
    }

    protected get failures(): Observable<Array<string>> {
        return this.validate().map(v => Object.keys(v).map(k => message(v, k)));
    }
}