import { Component, HostBinding, Input } from '@angular/core';

@Component({
    selector: 'app-nav-vertical-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})
export class AppNavVerticalItemComponent {

    @HostBinding('class')
    classes = 'nav-item';

    @Input()
    item;

    constructor() {}

}
