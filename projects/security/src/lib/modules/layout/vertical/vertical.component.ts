import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AppConfigService } from 'projects/security/src/lib/shared/config.service';

@Component({
    selector: 'vertical-layout-1',
    templateUrl: './vertical.component.html',
    styleUrls: ['./vertical.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class VerticalComponent implements OnInit, OnDestroy {

    public appConfig: any;
    public navigation: any;
    private unsubscribeAll: Subject<any>;

    constructor(private appConfigService: AppConfigService) {
        this.unsubscribeAll = new Subject();
    }

    ngOnInit(): void {
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
