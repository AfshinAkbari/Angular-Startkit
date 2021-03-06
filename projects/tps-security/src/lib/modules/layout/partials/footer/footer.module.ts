import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedModule } from '../../../../shared/shared.module';
import { FooterComponent } from './footer.component';

@NgModule({
    declarations: [
        FooterComponent
    ],
    imports: [
        RouterModule,
        MatToolbarModule,
        SharedModule
    ],
    exports: [
        FooterComponent
    ]
})
export class FooterModule {
}
