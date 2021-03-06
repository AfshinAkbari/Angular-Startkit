import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ConfigService } from 'tps-core';

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

    constructor(private configService: ConfigService) {
        this.unsubscribeAll = new Subject();
    }

    ngOnInit(): void {
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
