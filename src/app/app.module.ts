import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { appRoutes } from './app.routes';
// import { PdnSecurityModule } from 'pdn-security';
// import { PdnSecurityModule } from 'projects/pdn-security/src/public-api';
import { MainModule } from 'projects/pdn-security/src/public-api';
import { PublicModule } from 'projects/pdn-security/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MainModule,
    PublicModule,
    // PdnSecurityModule,
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
