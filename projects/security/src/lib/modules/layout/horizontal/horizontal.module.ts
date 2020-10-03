import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppSharedModule } from 'projects/security/src/lib/shared/shared.module';
import { AppSidebarModule } from 'projects/security/src/lib/modules/layout/partials/sidebar/sidebar.module';
import { CustomSideModule } from 'projects/security/src/lib/modules/layout/partials/side-panel/custom-side/custom-side.module';
import { ContentModule } from 'projects/security/src/lib/modules/layout/partials/content/content.module';
import { FooterModule } from 'projects/security/src/lib/modules/layout/partials/footer/footer.module';
import { NavbarModule } from 'projects/security/src/lib/modules/layout/partials/navbar/navbar.module';
import { SimpleSideModule } from 'projects/security/src/lib/modules/layout/partials/side-panel/simple-side/simple-side.module';
import { ToolbarModule } from 'projects/security/src/lib/modules/layout/partials/toolbar/toolbar.module';
import { HorizontalComponent } from 'projects/security/src/lib/modules/layout/horizontal/horizontal.component';

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
