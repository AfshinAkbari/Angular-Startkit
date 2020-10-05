import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CoreDirectivesModule } from 'tps-core';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FlexLayoutModule,
        CoreDirectivesModule,
    ],
    exports: [
        CommonModule,
        FlexLayoutModule,
        CoreDirectivesModule
    ]
})
export class SharedModule {
}
