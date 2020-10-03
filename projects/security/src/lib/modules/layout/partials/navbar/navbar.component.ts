import { Component, ElementRef, Input, Renderer2, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NavbarComponent {

    public _variant: string;

    constructor(private elementRef: ElementRef, private renderer: Renderer2) {
        this._variant = 'vertical-style-1';
    }

    get variant(): string {
        return this._variant;
    }

    @Input()
    set variant(value: string) {
        this.renderer.removeClass(this.elementRef.nativeElement, this.variant);
        this._variant = value;
        this.renderer.addClass(this.elementRef.nativeElement, value);
    }
}
