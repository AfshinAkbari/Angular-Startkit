import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { APP_ROUTES } from './app.routes';
// import { AngularProjectModule } from 'projects/angular-project/src/public-api';
import { PdnSecurityModule } from 'pdn-security';
// import { PdnSecurityModule } from 'projects/pdn-security/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // AngularProjectModule,
    PdnSecurityModule,
    RouterModule.forRoot(APP_ROUTES, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// [
//   { path: '', component: HomeComponent, pathMatch: 'full' }
// ]
