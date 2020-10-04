import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CoreModule } from '../../shared/core.module';
import { appConfig } from '../../models/config';
import { PublicComponent } from './../public/public.component';



@NgModule({
    declarations: [
        PublicComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule,
        MatButtonModule,
        MatIconModule,
        RouterModule,
        CoreModule.forRoot(appConfig),
    ],
    exports: []
})
export class MainModule {
}
