import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppNavigationModule } from '../../navigation/navigation.module';
import { AppSharedModule } from '../../../../../shared/shared.module';
import { NavbarHorizontalComponent } from './navbar-horizontal.component';

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
