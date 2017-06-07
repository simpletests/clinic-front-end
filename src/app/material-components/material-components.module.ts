import { NgModule } from '@angular/core';

import {
    MdButtonModule, MdCheckboxModule, MdToolbarModule, MdSidenavModule, MdMenuModule, MdListModule,
    MdIconModule, MdDialogModule, MdAutocompleteModule, MdSelectionModule, MdCardModule, MdInputModule,
    MdSelectModule, MdSnackBarModule, MdNativeDateModule, MdDatepickerModule
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
        MdDatepickerModule],
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
        MdNativeDateModule]
})
export class MaterialComponentsModule { }


