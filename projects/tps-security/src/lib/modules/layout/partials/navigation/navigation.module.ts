import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { AppNavigationComponent } from './navigation.component';
import { AppNavVerticalItemComponent } from './vertical/item.component';
import { AppNavHorizontalItemComponent } from './horizontal/item.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatIconModule,
        MatRippleModule,
    ],
    exports: [
        AppNavigationComponent
    ],
    declarations: [
        AppNavigationComponent,
        AppNavVerticalItemComponent,
        AppNavHorizontalItemComponent,
    ]
})
export class AppNavigationModule {
}
