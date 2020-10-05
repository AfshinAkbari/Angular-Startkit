import { Inject, Injectable, InjectionToken } from '@angular/core';
import { ResolveEnd, Router } from '@angular/router';
import { Platform } from '@angular/cdk/platform';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import * as _ from 'lodash';

export const APP_CONFIG = new InjectionToken('appCustomConfig');

@Injectable({
    providedIn: 'root'
})
export class ConfigService {

    private configSubject: BehaviorSubject<any>;
    private readonly defaultConfig: any;

    constructor(
        private platform: Platform,
        private router: Router,
        @Inject(APP_CONFIG) private _config
    ) {
        this.defaultConfig = _config;
        this.init();
    }

    set config(value) {
        let config = this.configSubject.getValue();
        config = _.merge({}, config, value);
        this.configSubject.next(config);
    }

    get config(): any | Observable<any> {
        return this.configSubject.asObservable();
    }

    private init(): void {
        if (this.platform.ANDROID || this.platform.IOS) {
            this.defaultConfig.customScrollbars = false;
        }
        this.configSubject = new BehaviorSubject(_.cloneDeep(this.defaultConfig));
        this.router.events
            .pipe(filter(event => event instanceof ResolveEnd))
            .subscribe(() => {
                if (!_.isEqual(this.configSubject.getValue().layout, this.defaultConfig.layout)) {
                    const config = _.cloneDeep(this.configSubject.getValue());
                    config.layout = _.cloneDeep(this.defaultConfig.layout);
                    this.configSubject.next(config);
                }
            });
    }
}

