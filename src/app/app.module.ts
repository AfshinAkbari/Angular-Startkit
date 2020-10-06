import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { appRoutes } from './app.routes';
import { ConfigModule } from 'tps-core';
import { appConfig } from './models/appConfig';

// import { TpsSecurityModule } from 'tps-security';
// import { TpsSecurityModule } from 'projects/tps-security/src/public-api';
import { MainModule } from 'tps-security';
import { PublicModule } from 'tps-security';

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
    ConfigModule.forRoot(appConfig),
    // TpsSecurityModule,
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
