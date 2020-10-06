import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { ConfigService } from 'tps-core';
import { AppNavigationService } from '../../navigation/navigation.service';

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

    constructor(private configService: ConfigService, private appNavigationService: AppNavigationService) {
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

        this.configService.config
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
