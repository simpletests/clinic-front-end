import {NgModule} from '@angular/core';

import {
    MdButtonModule, MdCheckboxModule, MdToolbarModule, MdSidenavModule, MdMenuModule, MdListModule,
    MdIconModule, MdDialogModule, MdAutocompleteModule, MdSelectionModule, MdCardModule, MdInputModule, 
    MdSelectModule
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
        MdSelectModule],
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
        MdSelectModule]
})
export class MaterialComponentsModule {}


