import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppPerfectScrollbarDirective } from 'projects/security/src/lib/shared/app-perfect-scrollbar.directive';

@NgModule({
    declarations: [
        AppPerfectScrollbarDirective,
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
    ],
    exports: [
        CommonModule,
        FlexLayoutModule,
        AppPerfectScrollbarDirective
    ]
})
export class AppSharedModule {
}
