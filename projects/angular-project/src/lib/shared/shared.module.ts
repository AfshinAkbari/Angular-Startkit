import { BaseComponent } from './components/base.component';
import { FilterPipe } from './pipes/filter.Pipe';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    BaseComponent,
    FilterPipe
    // AngularProjectComponent
  ],
  imports: [
  ],
  exports: [
    // AngularProjectComponent
  ],
  entryComponents: [
    // AngularProjectComponent
  ] // important
})
export class SharedModule {}
