import { NgModule } from '@angular/core';

import {
    MdButtonModule, MdCheckboxModule, MdToolbarModule, MdSidenavModule, MdMenuModule, MdListModule,
    MdIconModule, MdDialogModule, MdAutocompleteModule, MdSelectionModule, MdCardModule, MdInputModule,
    MdSelectModule, MdSnackBarModule
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
        MdSnackBarModule],
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
        MdSnackBarModule]
})
export class MaterialComponentsModule { }


