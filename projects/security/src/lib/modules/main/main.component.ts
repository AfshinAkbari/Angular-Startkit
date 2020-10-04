import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Platform } from '@angular/cdk/platform';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AppConfigService } from '../../shared/config.service';
import { AppNavigationService } from '../layout/partials/navigation/navigation.service';
import { navigation } from '../../models/navigation';

@Component({
    selector: 'main-layout',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

    public appConfig: any;
    public navigation: any;
    private unsubscribeAll: Subject<any>;

    constructor(
        @Inject(DOCUMENT) private document: any,
        // private appConfigService: AppConfigService,
        private appNavigationService: AppNavigationService,
        private platform: Platform
    ) {
        this.navigation = navigation;
        this.appNavigationService.register('main', this.navigation);
        this.appNavigationService.setCurrentNavigation('main');
        if (this.platform.ANDROID || this.platform.IOS) {
            this.document.body.classList.add('is-mobile');
        }
        this.unsubscribeAll = new Subject();
    }

    ngOnInit(): void {
        // this.appConfigService.config
        //     .pipe(takeUntil(this.unsubscribeAll))
        //     .subscribe((config) => {
        //
        //         this.appConfig = config;
        //
        //         if (this.appConfig.layout.width === 'boxed') {
        //             this.document.body.classList.add('boxed');
        //         } else {
        //             this.document.body.classList.remove('boxed');
        //         }
        //
        //         for (let i = 0; i < this.document.body.classList.length; i++) {
        //             const className = this.document.body.classList[i];
        //
        //             if (className.startsWith('theme-')) {
        //                 this.document.body.classList.remove(className);
        //             }
        //         }
        //
        //         this.document.body.classList.add(this.appConfig.colorTheme);
        //     });
    }

    ngOnDestroy(): void {
        this.unsubscribeAll.next();
        this.unsubscribeAll.complete();
    }
}
