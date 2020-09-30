import { AngularProjectComponent } from './angular-project.component';
import { Module1Module } from './modules/module1/module1.module';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AngularProjectComponent],
  imports: [Module1Module, SharedModule
  ],
  exports: [AngularProjectComponent, Module1Module]
})
export class AngularProjectModule { }
