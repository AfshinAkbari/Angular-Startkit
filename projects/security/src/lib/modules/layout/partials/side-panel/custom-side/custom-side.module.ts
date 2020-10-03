import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppSharedModule } from 'projects/security/src/lib/shared/shared.module';
import { CustomSideComponent } from 'projects/security/src/lib/modules/layout/partials/side-panel/custom-side/custom-side.component';

@NgModule({
    declarations: [
        CustomSideComponent
    ],
    providers: [],
    imports: [
        MatButtonModule,
        MatIconModule,
        AppSharedModule
    ],
    exports: [
        CustomSideComponent
    ]
})
export class CustomSideModule {
}
