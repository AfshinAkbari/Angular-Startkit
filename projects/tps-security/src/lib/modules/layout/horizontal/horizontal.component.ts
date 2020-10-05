import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ConfigService } from 'tps-security';

@Component({
    selector: 'horizontal-layout-1',
    templateUrl: './horizontal.component.html',
    styleUrls: ['./horizontal.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HorizontalComponent implements OnInit, OnDestroy {

    public appConfig: any;
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
