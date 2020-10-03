import { NgModule } from '@angular/core';
import { VerticalModule } from './vertical/vertical.module';
import { HorizontalModule } from './horizontal/horizontal.module';

@NgModule({
    imports: [
        VerticalModule,
        HorizontalModule,
    ],
    exports: [
        VerticalModule,
        HorizontalModule
    ]
})
export class LayoutModule {
}
