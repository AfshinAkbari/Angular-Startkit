import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AppNavigationService } from './navigation.service';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppNavigationComponent implements OnInit {

    @Input()
    layout = 'vertical';

    @Input()
    navigation: any;

    private unsubscribeAll: Subject<any>;

    constructor(private changeDetectorRef: ChangeDetectorRef, private appNavigationService: AppNavigationService) {
        this.unsubscribeAll = new Subject();
    }

    ngOnInit(): void {
        this.appNavigationService.onNavigationChanged
            .pipe(takeUntil(this.unsubscribeAll))
            .subscribe(() => {
                this.navigation = this.appNavigationService.getCurrentNavigation();
                this.changeDetectorRef.markForCheck();
            });
    }
}
