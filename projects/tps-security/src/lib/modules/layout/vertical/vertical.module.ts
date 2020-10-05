import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { AppSidebarModule } from '../partials/sidebar/sidebar.module';
import { CustomSideModule } from '../partials/side-panel/custom-side/custom-side.module';
import { ContentModule } from '../partials/content/content.module';
import { FooterModule } from '../partials/footer/footer.module';
import { NavbarModule } from '../partials/navbar/navbar.module';
import { SimpleSideModule } from '../partials/side-panel/simple-side/simple-side.module';
import { ToolbarModule } from '../partials/toolbar/toolbar.module';
import { VerticalComponent } from './vertical.component';

@NgModule({
    declarations: [
        VerticalComponent
    ],
    imports: [
        RouterModule,
        SharedModule,
        AppSidebarModule,
        ContentModule,
        FooterModule,
        NavbarModule,
        ToolbarModule,
        SimpleSideModule,
        CustomSideModule
    ],
    exports: [
        VerticalComponent
    ]
})
export class VerticalModule {
}
