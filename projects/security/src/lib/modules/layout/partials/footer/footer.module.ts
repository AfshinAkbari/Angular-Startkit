import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppSharedModule } from 'projects/security/src/lib/shared/shared.module';
import { FooterComponent } from 'projects/security/src/lib/modules/layout/partials/footer/footer.component';

@NgModule({
    declarations: [
        FooterComponent
    ],
    imports: [
        RouterModule,
        MatToolbarModule,
        AppSharedModule
    ],
    exports: [
        FooterComponent
    ]
})
export class FooterModule {
}
