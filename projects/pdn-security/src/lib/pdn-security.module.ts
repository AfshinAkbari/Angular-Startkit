import { NgModule } from '@angular/core';
import { PdnSecurityComponent } from './pdn-security.component';
import { MainModule } from './modules/main/main.module';
//import { PdnCoreModule } from 'pdn-core';

@NgModule({
    declarations: [PdnSecurityComponent],
    imports: [MainModule], //, PdnCoreModule
    exports: [PdnSecurityComponent, MainModule]
})
export class PdnSecurityModule {
}
