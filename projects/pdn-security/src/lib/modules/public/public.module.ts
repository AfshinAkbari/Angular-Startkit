import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PublicComponent } from './public.component';
import { publicRoutes } from './public.routes';

@NgModule({
    declarations: [
        PublicComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(publicRoutes)
    ],
})
export class PublicModule {
}
