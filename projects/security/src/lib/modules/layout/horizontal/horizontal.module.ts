import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppSharedModule } from '../../../shared/shared.module';
import { AppSidebarModule } from '../../layout/partials/sidebar/sidebar.module';
import { CustomSideModule } from '../../layout/partials/side-panel/custom-side/custom-side.module';
import { ContentModule } from '../../layout/partials/content/content.module';
import { FooterModule } from '../../layout/partials/footer/footer.module';
import { NavbarModule } from '../../layout/partials/navbar/navbar.module';
import { SimpleSideModule } from '../../layout/partials/side-panel/simple-side/simple-side.module';
import { ToolbarModule } from '../../layout/partials/toolbar/toolbar.module';
import { HorizontalComponent } from '../../layout/horizontal/horizontal.component';

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
