import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CoreModule } from '../../shared/core.module';
import { appConfig } from '../../models/config';
import { MainComponent } from './main.component';
import { LayoutModule } from '../layout/layout.module';
//import { PdnCoreComponent } from 'pdn-core';

const appRoutes: Routes = [
    // todo: loadChildren of main...
];

@NgModule({
    declarations: [
        MainComponent,
       // PdnCoreComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule,
        MatButtonModule,
        MatIconModule,
        CoreModule.forRoot(appConfig),
        LayoutModule,

    ],
    exports: [MainComponent],

})
export class MainModule {
}
