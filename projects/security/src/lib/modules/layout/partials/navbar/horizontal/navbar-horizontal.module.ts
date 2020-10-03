import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppNavigationModule } from 'projects/security/src/lib/modules/layout/partials/navigation/navigation.module';
import { AppSharedModule } from 'projects/security/src/lib/shared/shared.module';
import { NavbarHorizontalComponent } from 'projects/security/src/lib/modules/layout/partials/navbar/horizontal/navbar-horizontal.component';

@NgModule({
    declarations: [
        NavbarHorizontalComponent
    ],
    imports: [
        MatButtonModule,
        MatIconModule,

        AppSharedModule,
        AppNavigationModule
    ],
    exports: [
        NavbarHorizontalComponent
    ]
})
export class NavbarHorizontalModule {
}
