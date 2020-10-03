import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppSharedModule } from 'projects/security/src/lib/shared/shared.module';
import { ContentComponent } from 'projects/security/src/lib/modules/layout/partials/content/content.component';

@NgModule({
    declarations: [
        ContentComponent
    ],
    imports: [
        RouterModule,
        AppSharedModule
    ],
    exports: [
        ContentComponent
    ]
})
export class ContentModule {
}
