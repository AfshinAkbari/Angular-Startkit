import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppNavigationModule } from 'projects/security/src/lib/modules/layout/partials/navigation/navigation.module';
import { AppSharedModule } from 'projects/security/src/lib/shared/shared.module';
import { NavbarVerticalComponent } from 'projects/security/src/lib/modules/layout/partials/navbar/vertical/navbar-vertical.component';

@NgModule({
    declarations: [
        NavbarVerticalComponent
    ],
    imports: [
        MatButtonModule,
        MatIconModule,
        AppSharedModule,
        AppNavigationModule
    ],
    exports: [
        NavbarVerticalComponent
    ]
})
export class NavbarVerticalModule {
}
