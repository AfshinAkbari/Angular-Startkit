import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppSharedModule } from 'projects/security/src/lib/shared/shared.module';
import { ToolbarComponent } from 'projects/security/src/lib/modules/layout/partials/toolbar/toolbar.component';

@NgModule({
    declarations: [
        ToolbarComponent
    ],
    imports: [
        RouterModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatToolbarModule,

        AppSharedModule
    ],
    exports: [
        ToolbarComponent
    ]
})
export class ToolbarModule {
}
