import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ConfigService } from 'tps-core';
import { SidebarService } from '../sidebar/sidebar.service';

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

    constructor(private configService: ConfigService, private sidebarService: SidebarService) {
        this.unsubscribeAll = new Subject();
    }

    ngOnInit(): void {
        this.configService.config
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
        this.sidebarService.getSidebar(key).toggleOpen();
    }

}
