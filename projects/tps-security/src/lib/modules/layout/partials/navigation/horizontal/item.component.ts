import { Component, HostBinding, Input } from '@angular/core';

@Component({
    selector: 'app-nav-horizontal-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})
export class AppNavHorizontalItemComponent {

    @HostBinding('class')
    classes = 'nav-item';

    @Input()
    item: any;

    constructor() {}
}
