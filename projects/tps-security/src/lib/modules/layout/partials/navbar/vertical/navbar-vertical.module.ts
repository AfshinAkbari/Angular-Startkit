import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppNavigationModule } from '../../navigation/navigation.module';
import { SharedModule } from '../../../../../shared/shared.module';
import { NavbarVerticalComponent } from './navbar-vertical.component';

@NgModule({
    declarations: [
        NavbarVerticalComponent
    ],
    imports: [
        MatButtonModule,
        MatIconModule,
        SharedModule,
        AppNavigationModule
    ],
    exports: [
        NavbarVerticalComponent
    ]
})
export class NavbarVerticalModule {
}
