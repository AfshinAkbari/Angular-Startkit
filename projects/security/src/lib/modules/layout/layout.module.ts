import { NgModule } from '@angular/core';
import { VerticalModule } from 'projects/security/src/lib/modules/layout/vertical/vertical.module';
import { HorizontalModule } from 'projects/security/src/lib/modules/layout/horizontal/horizontal.module';

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
