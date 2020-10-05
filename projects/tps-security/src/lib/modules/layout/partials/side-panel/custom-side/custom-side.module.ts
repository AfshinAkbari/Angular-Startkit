import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../../../../../shared/shared.module';
import { CustomSideComponent } from './custom-side.component';

@NgModule({
    declarations: [
        CustomSideComponent
    ],
    providers: [],
    imports: [
        MatButtonModule,
        MatIconModule,
        SharedModule
    ],
    exports: [
        CustomSideComponent
    ]
})
export class CustomSideModule {
}
