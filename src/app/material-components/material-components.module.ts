import {NgModule} from '@angular/core';

import {
    MdButtonModule, MdCheckboxModule, MdToolbarModule, MdSidenavModule, MdMenuModule, MdListModule,
    MdIconModule, MdDialogModule, MdAutocompleteModule, MdSelectionModule, MdCardModule, MdInputModule
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
        MdInputModule],
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
        MdInputModule]
})
export class MaterialComponentsModule {}


