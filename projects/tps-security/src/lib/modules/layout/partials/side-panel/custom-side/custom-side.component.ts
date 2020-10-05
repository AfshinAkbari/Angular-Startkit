import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SidebarService } from '../../sidebar/sidebar.service';

@Component({
    selector: 'custom-side',
    templateUrl: './custom-side.component.html',
    styleUrls: ['./custom-side.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CustomSideComponent implements OnInit, OnDestroy {

    public sidebarFolded: boolean;
    private unsubscribeAll: Subject<any>;

    constructor(private sidebarService: SidebarService) {
        this.sidebarFolded = true;
        this.unsubscribeAll = new Subject();
    }

    ngOnInit(): void {
        this.sidebarService.getSidebar('customSide').foldedChanged
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
        this.sidebarService.getSidebar('customSide').foldTemporarily();
    }

    unfoldSidebarTemporarily(): void {
        this.sidebarService.getSidebar('customSide').unfoldTemporarily();
    }

    toggleSidebarOpen(): void {
        this.sidebarService.getSidebar('customSide').toggleOpen();
    }
}
