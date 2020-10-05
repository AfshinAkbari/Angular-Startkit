import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { NavbarComponent } from './navbar.component';
import { NavbarHorizontalModule } from './horizontal/navbar-horizontal.module';
import { NavbarVerticalModule } from './vertical/navbar-vertical.module';

@NgModule({
    declarations: [
        NavbarComponent
    ],
    imports: [
        SharedModule,
        NavbarHorizontalModule,
        NavbarVerticalModule,
    ],
    exports: [
        NavbarComponent
    ]
})
export class NavbarModule {
}
