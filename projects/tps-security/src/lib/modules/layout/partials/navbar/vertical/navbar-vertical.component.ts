import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, take, takeUntil } from 'rxjs/operators';
import { ConfigService } from '../../../../../shared/config.service';
import { AppNavigationService } from '../../navigation/navigation.service';
import { AppPerfectScrollbarDirective } from '../../../../../shared/app-perfect-scrollbar.directive';
import { SidebarService } from '../../sidebar/sidebar.service';

@Component({
    selector: 'navbar-vertical',
    templateUrl: './navbar-vertical.component.html',
    styleUrls: ['./navbar-vertical.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NavbarVerticalComponent implements OnInit, OnDestroy {

    public appConfig: any;
    public navigation: any;
    private appPerfectScrollbar: AppPerfectScrollbarDirective;
    private unsubscribeAll: Subject<any>;

    constructor(
        private configService: ConfigService,
        private appNavigationService: AppNavigationService,
        private sidebarService: SidebarService,
        private router: Router
    ) {
        this.unsubscribeAll = new Subject();
    }

    @ViewChild(AppPerfectScrollbarDirective, {static: true})
    set directive(theDirective: AppPerfectScrollbarDirective) {
        if (!theDirective) {
            return;
        }

        this.appPerfectScrollbar = theDirective;
        this.router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                take(1)
            )
            .subscribe(() => {
                    setTimeout(() => {
                        this.appPerfectScrollbar.scrollToElement('navbar .nav-link.active', -120);
                    });
                }
            );
    }

    ngOnInit(): void {
        this.router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                takeUntil(this.unsubscribeAll)
            )
            .subscribe(() => {
                    if (this.sidebarService.getSidebar('navbar')) {
                        this.sidebarService.getSidebar('navbar').close();
                    }
                }
            );

        this.configService.config
            .pipe(takeUntil(this.unsubscribeAll))
            .subscribe((config) => {
                this.appConfig = config;
            });

        this.appNavigationService.onNavigationChanged
            .pipe(
                filter(value => value !== null),
                takeUntil(this.unsubscribeAll)
            )
            .subscribe(() => {
                this.navigation = this.appNavigationService.getCurrentNavigation();
            });
    }

    ngOnDestroy(): void {
        this.unsubscribeAll.next();
        this.unsubscribeAll.complete();
    }

    toggleSidebarOpened(): void {
        this.sidebarService.getSidebar('navbar').toggleOpen();
    }

    toggleSidebarFolded(): void {
        this.sidebarService.getSidebar('navbar').toggleFold();
    }
}
