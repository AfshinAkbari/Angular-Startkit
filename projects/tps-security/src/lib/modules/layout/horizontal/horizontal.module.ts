import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppSharedModule } from '../../../shared/shared.module';
import { AppSidebarModule } from '../partials/sidebar/sidebar.module';
import { CustomSideModule } from '../partials/side-panel/custom-side/custom-side.module';
import { ContentModule } from '../partials/content/content.module';
import { FooterModule } from '../partials/footer/footer.module';
import { NavbarModule } from '../partials/navbar/navbar.module';
import { SimpleSideModule } from '../partials/side-panel/simple-side/simple-side.module';
import { ToolbarModule } from '../partials/toolbar/toolbar.module';
import { HorizontalComponent } from './horizontal.component';

@NgModule({
    declarations: [
        HorizontalComponent
    ],
    imports: [
        MatSidenavModule,
        AppSharedModule,
        AppSidebarModule,
        ContentModule,
        FooterModule,
        NavbarModule,
        ToolbarModule,
        SimpleSideModule,
        CustomSideModule
    ],
    exports: [
        HorizontalComponent
    ]
})
export class HorizontalModule {
}
