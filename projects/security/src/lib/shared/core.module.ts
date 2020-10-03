import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { APP_CONFIG } from 'projects/security/src/lib/shared/config.service';

@NgModule()
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(':(');
        }
    }

    static forRoot(config): ModuleWithProviders<any> {
        return {
            ngModule: CoreModule,
            providers: [
                {
                    provide: APP_CONFIG,
                    useValue: config
                }
            ]
        };
    }
}
