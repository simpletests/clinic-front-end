import { NgModule } from '@angular/core';

import {
    MdButtonModule, MdCheckboxModule, MdToolbarModule, MdSidenavModule, MdMenuModule, MdListModule,
    MdIconModule, MdDialogModule, MdAutocompleteModule, MdSelectionModule, MdCardModule, MdInputModule,
    MdSelectModule, MdSnackBarModule, MdNativeDateModule, MdDatepickerModule, MdSliderModule
} from '@angular/material';

@NgModule({
    imports: [
        MdButtonModule,
        MdCheckboxModule,
        MdToolbarModule,
        MdSidenavModule,
        MdMenuModule,
        MdListModule,
        MdIconModule,
        MdDialogModule,
        MdAutocompleteModule,
        MdSelectionModule,
        MdCardModule,
        MdInputModule,
        MdSelectModule,
        MdSnackBarModule,
        MdNativeDateModule,
        MdDatepickerModule,
        MdSliderModule],
    exports: [MdButtonModule,
        MdCheckboxModule,
        MdToolbarModule,
        MdSidenavModule,
        MdMenuModule,
        MdListModule,
        MdIconModule,
        MdDialogModule,
        MdAutocompleteModule,
        MdSelectionModule,
        MdCardModule,
        MdInputModule,
        MdSelectModule,
        MdSnackBarModule,
        MdDatepickerModule,
        MdNativeDateModule,
        MdSliderModule]
})
export class MaterialComponentsModule { }


