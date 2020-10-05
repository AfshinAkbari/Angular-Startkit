import { ModuleWithProviders, NgModule } from '@angular/core';
import { APP_CONFIG } from 'tps-security';

@NgModule()
export class ConfigModule {
    constructor(/*@Optional() @SkipSelf() parentModule: ConfigModule*/) {}

    static forRoot(config): ModuleWithProviders<any> {
        return {
            ngModule: ConfigModule,
            providers: [
                {
                    provide: APP_CONFIG,
                    useValue: config
                }
            ]
        };
    }
}
