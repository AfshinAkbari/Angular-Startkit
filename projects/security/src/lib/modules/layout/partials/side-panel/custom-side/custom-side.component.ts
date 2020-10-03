import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AppSidebarService } from 'projects/security/src/lib/modules/layout/partials/sidebar/sidebar.service';

@Component({
    selector: 'custom-side',
    templateUrl: './custom-side.component.html',
    styleUrls: ['./custom-side.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CustomSideComponent implements OnInit, OnDestroy {

    public sidebarFolded: boolean;
    private unsubscribeAll: Subject<any>;

    constructor(private appSidebarService: AppSidebarService) {
        this.sidebarFolded = true;
        this.unsubscribeAll = new Subject();
    }

    ngOnInit(): void {
        this.appSidebarService.getSidebar('customSide').foldedChanged
            .pipe(takeUntil(this.unsubscribeAll))
            .subscribe((folded) => {
                this.sidebarFolded = folded;
            });
    }

    ngOnDestroy(): void {
        this.unsubscribeAll.next();
        this.unsubscribeAll.complete();
    }

    foldSidebarTemporarily(): void {
        this.appSidebarService.getSidebar('customSide').foldTemporarily();
    }

    unfoldSidebarTemporarily(): void {
        this.appSidebarService.getSidebar('customSide').unfoldTemporarily();
    }

    toggleSidebarOpen(): void {
        this.appSidebarService.getSidebar('customSide').toggleOpen();
    }
}
