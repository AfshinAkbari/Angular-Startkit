import { NgModule } from '@angular/core';
import { AppSharedModule } from '../../../../shared/shared.module';
import { NavbarComponent } from './navbar.component';
import { NavbarHorizontalModule } from './horizontal/navbar-horizontal.module';
import { NavbarVerticalModule } from './vertical/navbar-vertical.module';

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
