import { NgModule } from '@angular/core';
import { AppSharedModule } from 'projects/security/src/lib/shared/shared.module';
import { NavbarComponent } from 'projects/security/src/lib/modules/layout/partials/navbar/navbar.component';
import { NavbarHorizontalModule } from 'projects/security/src/lib/modules/layout/partials/navbar/horizontal/navbar-horizontal.module';
import { NavbarVerticalModule } from 'projects/security/src/lib/modules/layout/partials/navbar/vertical/navbar-vertical.module';

@NgModule({
    declarations: [
        NavbarComponent
    ],
    imports: [
        AppSharedModule,
        NavbarHorizontalModule,
        NavbarVerticalModule,
    ],
    exports: [
        NavbarComponent
    ]
})
export class NavbarModule {
}
