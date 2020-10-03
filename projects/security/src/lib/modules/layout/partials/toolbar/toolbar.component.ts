import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AppConfigService } from '../../../../shared/config.service';
import { AppSidebarService } from '../sidebar/sidebar.service';

@Component({
    selector: 'toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class ToolbarComponent implements OnInit, OnDestroy {

    public hiddenNavbar: boolean;
    public appConfig: any;
    private unsubscribeAll: Subject<any>;

    constructor(private appConfigService: AppConfigService, private appSidebarService: AppSidebarService) {
        this.unsubscribeAll = new Subject();
    }

    ngOnInit(): void {
        this.appConfigService.config
            .pipe(takeUntil(this.unsubscribeAll))
            .subscribe((settings) => {
                this.appConfig = settings;
                this.hiddenNavbar = settings.layout.navbar.hidden === true;
            });

    }

    ngOnDestroy(): void {
        this.unsubscribeAll.next();
        this.unsubscribeAll.complete();
    }

    toggleSidebarOpen(key): void {
        this.appSidebarService.getSidebar(key).toggleOpen();
    }

}
