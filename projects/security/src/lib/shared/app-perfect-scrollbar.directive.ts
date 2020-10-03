import { AfterViewInit, Directive, ElementRef, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Platform } from '@angular/cdk/platform';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, filter, takeUntil } from 'rxjs/operators';
import PerfectScrollbar from 'perfect-scrollbar';
import * as _ from 'lodash';
import { AppConfigService } from '../shared/config.service';

class AppPerfectScrollbarPosition {
    public x: number | 'start' | 'end';
    public y: number | 'start' | 'end';

    constructor(x: number | 'start' | 'end', y: number | 'start' | 'end') {
        this.x = x;
        this.y = y;
    }
}

@Directive({
    selector: '[appPerfectScrollbar]'
})
export class AppPerfectScrollbarDirective implements OnInit, AfterViewInit, OnDestroy {

    public isInitialized: boolean;
    public isMobile: boolean;
    public ps: PerfectScrollbar | any;

    private animation: number | null;
    private _enabled: boolean | '';
    private debouncedUpdate: any;
    private options: any;
    private unsubscribeAll: Subject<any>;

    constructor(
        public elementRef: ElementRef,
        private appConfigService: AppConfigService,
        private platform: Platform,
        private router: Router
    ) {
        this.isInitialized = false;
        this.isMobile = false;
        this.animation = null;
        this._enabled = false;
        this.debouncedUpdate = _.debounce(this.update, 150);
        this.options = {
            updateOnRouteChange: false
        };
        this.unsubscribeAll = new Subject();
    }

    @Input()
    set appPerfectScrollbarOptions(value) {
        this.options = _.merge({}, this.options, value);
        setTimeout(() => {
            this._destroy();
        });
        setTimeout(() => {
            this.init();
        });
    }

    get appPerfectScrollbarOptions(): any {
        return this.options;
    }

    @Input('appPerfectScrollbar')
    set enabled(value: boolean | '') {
        if (value === '') {
            value = true;
        }
        if (this.enabled === value) {
            return;
        }
        this._enabled = value;
        if (this.enabled) {
            this.init();
        } else {
            this._destroy();
        }
    }

    get enabled(): boolean | '' {
        return this._enabled;
    }

    ngOnInit(): void {
        fromEvent(window, 'resize')
            .pipe(
                takeUntil(this.unsubscribeAll),
                debounceTime(150)
            )
            .subscribe(() => {
                this.update();
            });
    }

    ngAfterViewInit(): void {
        this.appConfigService.config
            .pipe(takeUntil(this.unsubscribeAll))
            .subscribe(
                (settings) => {
                    this.enabled = settings.customScrollbars;
                }
            );

        if (this.appPerfectScrollbarOptions.updateOnRouteChange) {
            this.router.events
                .pipe(
                    takeUntil(this.unsubscribeAll),
                    filter(event => event instanceof NavigationEnd)
                )
                .subscribe(() => {
                    setTimeout(() => {
                        this.scrollToTop();
                        this.update();
                    }, 0);
                });
        }
    }

    ngOnDestroy(): void {
        this._destroy();
        this.unsubscribeAll.next();
        this.unsubscribeAll.complete();
    }

    init(): void {
        if (this.isInitialized) {
            return;
        }

        if (this.platform.ANDROID || this.platform.IOS) {
            this.isMobile = true;
        }

        if (this.isMobile) {
            return;
        }

        this.isInitialized = true;
        this.ps = new PerfectScrollbar(this.elementRef.nativeElement, {
            ...this.appPerfectScrollbarOptions
        });
        this.ps.event.eventElements.forEach((eventElement) => {
            if (typeof eventElement.handlers['keydown'] !== 'undefined') {
                eventElement.element.removeEventListener('keydown', eventElement.handlers['keydown'][0]);
            }
        });
    }

    _destroy(): void {
        if (!this.isInitialized || !this.ps) {
            return;
        }
        this.ps.destroy();
        this.ps = null;
        this.isInitialized = false;
    }

    @HostListener('window:resize')
    _updateOnResize(): void {
        this.debouncedUpdate();
    }

    @HostListener('document:click', ['$event'])
    documentClick(event: Event): void {
        if (!this.isInitialized || !this.ps) {
            return;
        }
        this.ps.update();
    }

    update(): void {
        if (!this.isInitialized) {
            return;
        }
        this.ps.update();
    }

    position(absolute: boolean = false): AppPerfectScrollbarPosition {
        if (!absolute && this.ps) {
            return new AppPerfectScrollbarPosition(
                this.ps.reach.x || 0,
                this.ps.reach.y || 0
            );
        } else {
            return new AppPerfectScrollbarPosition(
                this.elementRef.nativeElement.scrollLeft,
                this.elementRef.nativeElement.scrollTop
            );
        }
    }

    scrollToTop(offset?: number, speed?: number): void {
        this.animateScrolling('scrollTop', (offset || 0), speed);
    }

    scrollToElement(qs: string, offset?: number, speed?: number): void {
        const element = this.elementRef.nativeElement.querySelector(qs);

        if (!element) {
            return;
        }

        const elementPos = element.getBoundingClientRect();
        const scrollerPos = this.elementRef.nativeElement.getBoundingClientRect();

        if (this.elementRef.nativeElement.classList.contains('ps--active-x')) {
            const currentPos = this.elementRef.nativeElement['scrollLeft'];
            const position = elementPos.left - scrollerPos.left + currentPos;

            this.animateScrolling('scrollLeft', position + (offset || 0), speed);
        }

        if (this.elementRef.nativeElement.classList.contains('ps--active-y')) {
            const currentPos = this.elementRef.nativeElement['scrollTop'];
            const position = elementPos.top - scrollerPos.top + currentPos;

            this.animateScrolling('scrollTop', position + (offset || 0), speed);
        }
    }

    animateScrolling(target: string, value: number, speed?: number): void {
        if (this.animation) {
            window.cancelAnimationFrame(this.animation);
            this.animation = null;
        }

        if (!speed || typeof window === 'undefined') {
            this.elementRef.nativeElement[target] = value;
        } else if (value !== this.elementRef.nativeElement[target]) {
            let newValue = 0;
            let scrollCount = 0;

            let oldTimestamp = performance.now();
            let oldValue = this.elementRef.nativeElement[target];
            const cosParameter = (oldValue - value) / 2;

            const step = (newTimestamp: number) => {
                scrollCount += Math.PI / (speed / (newTimestamp - oldTimestamp));
                newValue = Math.round(value + cosParameter + cosParameter * Math.cos(scrollCount));

                if (this.elementRef.nativeElement[target] === oldValue) {
                    if (scrollCount >= Math.PI) {
                        this.animateScrolling(target, value, 0);
                    } else {
                        this.elementRef.nativeElement[target] = newValue;
                        oldValue = this.elementRef.nativeElement[target];
                        oldTimestamp = newTimestamp;
                        this.animation = window.requestAnimationFrame(step);
                    }
                }
            };

            window.requestAnimationFrame(step);
        }
    }
}
