import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { AppConfigService } from 'projects/security/src/lib/shared/config.service';
import { AppNavigationService } from 'projects/security/src/lib/modules/layout/partials/navigation/navigation.service';

@Component({
    selector: 'navbar-horizontal',
    templateUrl: './navbar-horizontal.component.html',
    styleUrls: ['./navbar-horizontal.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NavbarHorizontalComponent implements OnInit, OnDestroy {

    public appConfig: any;
    public navigation: any;
    private unsubscribeAll: Subject<any>;

    constructor(private appConfigService: AppConfigService, private appNavigationService: AppNavigationService) {
        this.unsubscribeAll = new Subject();
    }

    ngOnInit(): void {
        this.appNavigationService.onNavigationChanged
            .pipe(
                filter(value => value !== null),
                takeUntil(this.unsubscribeAll)
            )
            .subscribe(() => {
                this.navigation = this.appNavigationService.getCurrentNavigation();
            });

        this.appConfigService.config
            .pipe(takeUntil(this.unsubscribeAll))
            .subscribe((config) => {
                this.appConfig = config;
            });
    }

    ngOnDestroy(): void {
        this.unsubscribeAll.next();
        this.unsubscribeAll.complete();
    }
}
