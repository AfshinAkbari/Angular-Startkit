import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    OrderlistComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [OrderlistComponent],
  entryComponents: [] // important
})
export class Module1Module {}
