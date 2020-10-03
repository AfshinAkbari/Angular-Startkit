import { NgModule } from '@angular/core';
import { SecurityComponent } from './security.component';
import { MainModule } from './modules/main/main.module';

@NgModule({
    declarations: [SecurityComponent],
    imports: [MainModule],
    exports: [SecurityComponent, MainModule]
})
export class SecurityModule {
}
