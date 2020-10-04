import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ConfigModule } from '../../shared/config.module';
import { LayoutModule } from '../layout/layout.module';
import { MainComponent } from './main.component';
import { mainRoutes } from './main.routes';
import { appConfig } from '../../models/config';

@NgModule({
    declarations: [
        MainComponent,
    ],
    imports: [
        RouterModule.forChild(mainRoutes),
        ConfigModule.forRoot(appConfig),
        CommonModule,
        LayoutModule
    ]
})
export class MainModule {
}
