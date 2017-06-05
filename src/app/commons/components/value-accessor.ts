import { ControlValueAccessor } from "@angular/forms";

export abstract class ValueAccessor<T> implements ControlValueAccessor {

    private innerValue: T;
    private changed = new Array<(value: T) => void>();
    private touched = new Array<() => void>();

    constructor() { }

    get value(): T {
        return this.innerValue;
    }

    set value(value: T) {
        if (this.innerValue !== value) {
            this.innerValue = value;
            this.changed.forEach(f => f(value));
        }
    }

    writeValue(value: any): void {
        this.innerValue = value;
    }

    registerOnChange(fn: any): void {
        this.changed.push(fn);
    }

    registerOnTouched(fn: any): void {
        this.touched.push(fn);
    }

    setDisabledState(isDisabled: boolean): void {
        throw new Error("Method not implemented.");
    }
}