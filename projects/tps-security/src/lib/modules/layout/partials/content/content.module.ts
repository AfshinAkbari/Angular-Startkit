import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppSharedModule } from '../../../../shared/shared.module';
import { ContentComponent } from './content.component';

@NgModule({
    declarations: [
        ContentComponent
    ],
    imports: [
        RouterModule,
        AppSharedModule
    ],
    exports: [
        ContentComponent
    ]
})
export class ContentModule {
}
