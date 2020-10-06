import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '../layout/layout.module';
import { MainComponent } from './main.component';
import { mainRoutes } from './main.routes';

@NgModule({
    declarations: [
        MainComponent,
    ],
    imports: [
        RouterModule.forChild(mainRoutes),
        CommonModule,
        LayoutModule
    ]
})
export class MainModule {
}
