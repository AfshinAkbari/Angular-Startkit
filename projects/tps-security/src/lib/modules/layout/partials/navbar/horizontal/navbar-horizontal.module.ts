import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppNavigationModule } from '../../navigation/navigation.module';
import { SharedModule } from '../../../../../shared/shared.module';
import { NavbarHorizontalComponent } from './navbar-horizontal.component';

@NgModule({
    declarations: [
        NavbarHorizontalComponent
    ],
    imports: [
        MatButtonModule,
        MatIconModule,

        SharedModule,
        AppNavigationModule
    ],
    exports: [
        NavbarHorizontalComponent
    ]
})
export class NavbarHorizontalModule {
}
