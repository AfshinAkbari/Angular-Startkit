import {
    ChangeDetectorRef,
    Component,
    ElementRef,
    EventEmitter,
    HostBinding,
    HostListener,
    Input,
    OnDestroy,
    OnInit,
    Output,
    Renderer2,
    ViewEncapsulation
} from '@angular/core';
import { animate, AnimationBuilder, AnimationPlayer, style } from '@angular/animations';
import { MediaObserver } from '@angular/flex-layout';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AppSidebarService } from './sidebar.service';
import { AppMatchMediaService } from './match-media.service';
import { AppConfigService } from '../../../../shared/config.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppSidebarComponent implements OnInit, OnDestroy {

    @Input()
    name: string;

    @Input()
    key: string;

    @Input()
    position: 'left' | 'right';

    @HostBinding('class.open')
    opened: boolean;

    @Input()
    lockedOpen: string;

    @HostBinding('class.locked-open')
    isLockedOpen: boolean;

    @Input()
    foldedWidth: number;

    @Input()
    foldedAutoTriggerOnHover: boolean;

    @HostBinding('class.unfolded')
    unfolded: boolean;

    @Input()
    invisibleOverlay: boolean;

    @Output()
    foldedChanged: EventEmitter<boolean>;

    @Output()
    openedChanged: EventEmitter<boolean>;

    private _folded: boolean;
    private appConfig: any;
    private wasActive: boolean;
    private wasFolded: boolean;
    private backdrop: HTMLElement | null = null;
    private player: AnimationPlayer;
    private unsubscribeAll: Subject<any>;

    @HostBinding('class.animations-enabled')
    private animationsEnabled: boolean;

    constructor(
        private animationBuilder: AnimationBuilder,
        private changeDetectorRef: ChangeDetectorRef,
        private elementRef: ElementRef,
        private appConfigService: AppConfigService,
        private appMatchMediaService: AppMatchMediaService,
        private appSidebarService: AppSidebarService,
        private mediaObserver: MediaObserver,
        private renderer: Renderer2
    ) {
        this.foldedAutoTriggerOnHover = true;
        this.foldedWidth = 64;
        this.foldedChanged = new EventEmitter();
        this.openedChanged = new EventEmitter();
        this.opened = false;
        this.position = 'left';
        this.invisibleOverlay = false;
        this.animationsEnabled = false;
        this._folded = false;
        this.unsubscribeAll = new Subject();
    }

    @Input()
    set folded(value: boolean) {
        this._folded = value;
        if (!this.opened) {
            return;
        }
        let sibling,
            styleRule;

        const styleValue = this.foldedWidth + 'px';

        if (this.position === 'left') {
            sibling = this.elementRef.nativeElement.nextElementSibling;
            styleRule = 'padding-left';
        } else {
            if (this.name === 'navbar') {
                sibling = this.elementRef.nativeElement.nextElementSibling;
            } else {
                sibling = this.elementRef.nativeElement.previousElementSibling;
            }
            styleRule = 'padding-right';
        }

        if (!sibling) {
            return;
        }

        if (value) {
            this.fold();
            this.renderer.setStyle(this.elementRef.nativeElement, 'width', styleValue);
            this.renderer.setStyle(this.elementRef.nativeElement, 'min-width', styleValue);
            this.renderer.setStyle(this.elementRef.nativeElement, 'max-width', styleValue);
            this.renderer.setStyle(sibling, styleRule, styleValue);
            this.renderer.addClass(this.elementRef.nativeElement, 'folded');
        } else {
            this.unfold();
            this.renderer.removeStyle(this.elementRef.nativeElement, 'width');
            this.renderer.removeStyle(this.elementRef.nativeElement, 'min-width');
            this.renderer.removeStyle(this.elementRef.nativeElement, 'max-width');
            this.renderer.removeStyle(sibling, styleRule);
            this.renderer.removeClass(this.elementRef.nativeElement, 'folded');
        }
        this.foldedChanged.emit(this.folded);
    }

    get folded(): boolean {
        return this._folded;
    }

    ngOnInit(): void {
        this.appConfigService.config
            .pipe(takeUntil(this.unsubscribeAll))
            .subscribe((config) => {
                this.appConfig = config;
            });
        this.appSidebarService.register(this.name, this);
        this.setupVisibility();
        this.setupPosition();
        this.setupLockedOpen();
        this.setupFolded();
    }

    ngOnDestroy(): void {
        if (this.folded) {
            this.unfold();
        }
        this.appSidebarService.unregister(this.name);
        this.unsubscribeAll.next();
        this.unsubscribeAll.complete();
    }

    private setupVisibility(): void {
        this.renderer.setStyle(this.elementRef.nativeElement, 'box-shadow', 'none');
        this.renderer.setStyle(this.elementRef.nativeElement, 'visibility', 'hidden');
    }

    private setupPosition(): void {
        if (this.position === 'right') {
            this.renderer.addClass(this.elementRef.nativeElement, 'right-positioned');
        } else {
            this.renderer.addClass(this.elementRef.nativeElement, 'left-positioned');
        }
    }

    private setupLockedOpen(): void {
        if (!this.lockedOpen) {
            return;
        }
        this.wasActive = false;
        this.wasFolded = this.folded;
        this.showSidebar();
        this.appMatchMediaService.onMediaChange
            .pipe(takeUntil(this.unsubscribeAll))
            .subscribe(() => {
                const isActive = this.mediaObserver.isActive(this.lockedOpen);
                if (this.wasActive === isActive) {
                    return;
                }
                if (isActive) {
                    this.isLockedOpen = true;
                    this.showSidebar();
                    this.opened = true;
                    this.openedChanged.emit(this.opened);
                    if (this.wasFolded) {
                        this.enableAnimations();
                        this.folded = true;
                        this.changeDetectorRef.markForCheck();
                    }
                    this.hideBackdrop();
                } else {
                    this.isLockedOpen = false;
                    this.unfold();
                    this.opened = false;
                    this.openedChanged.emit(this.opened);
                    this.hideSidebar();
                }
                this.wasActive = isActive;
            });
    }

    private setupFolded(): void {
        if (!this.folded) {
            return;
        }
        if (!this.opened) {
            return;
        }
        let sibling,
            styleRule;

        const styleValue = this.foldedWidth + 'px';
        if (this.position === 'left') {
            sibling = this.elementRef.nativeElement.nextElementSibling;
            styleRule = 'padding-left';
        } else {
            sibling = this.elementRef.nativeElement.previousElementSibling;
            styleRule = 'padding-right';
        }
        if (!sibling) {
            return;
        }
        this.fold();
        this.renderer.setStyle(this.elementRef.nativeElement, 'width', styleValue);
        this.renderer.setStyle(this.elementRef.nativeElement, 'min-width', styleValue);
        this.renderer.setStyle(this.elementRef.nativeElement, 'max-width', styleValue);
        this.renderer.setStyle(sibling, styleRule, styleValue);
        this.renderer.addClass(this.elementRef.nativeElement, 'folded');
    }

    private showBackdrop(): void {
        this.backdrop = this.renderer.createElement('div');
        this.backdrop.classList.add('app-sidebar-overlay');
        if (this.invisibleOverlay) {
            this.backdrop.classList.add('app-sidebar-overlay-invisible');
        }
        this.renderer.appendChild(this.elementRef.nativeElement.parentElement, this.backdrop);
        this.player =
            this.animationBuilder
                .build([
                    animate('300ms ease', style({opacity: 1}))
                ]).create(this.backdrop);

        this.player.play();
        this.backdrop.addEventListener('click', () => {
                this.close();
            }
        );
        this.changeDetectorRef.markForCheck();
    }

    private hideBackdrop(): void {
        if (!this.backdrop) {
            return;
        }
        this.player =
            this.animationBuilder
                .build([
                    animate('300ms ease', style({opacity: 0}))
                ]).create(this.backdrop);

        this.player.play();
        this.player.onDone(() => {
            if (this.backdrop) {
                this.backdrop.parentNode.removeChild(this.backdrop);
                this.backdrop = null;
            }
        });
        this.changeDetectorRef.markForCheck();
    }

    private showSidebar(): void {
        this.renderer.removeStyle(this.elementRef.nativeElement, 'box-shadow');
        this.renderer.removeStyle(this.elementRef.nativeElement, 'visibility');
        this.changeDetectorRef.markForCheck();
    }

    private hideSidebar(delay = true): void {
        const delayAmount = delay ? 300 : 0;
        setTimeout(() => {
            this.renderer.setStyle(this.elementRef.nativeElement, 'box-shadow', 'none');
            this.renderer.setStyle(this.elementRef.nativeElement, 'visibility', 'hidden');
        }, delayAmount);
        this.changeDetectorRef.markForCheck();
    }

    private enableAnimations(): void {
        if (this.animationsEnabled) {
            return;
        }
        this.animationsEnabled = true;
        this.changeDetectorRef.markForCheck();
    }

    open(): void {
        if (this.opened || this.isLockedOpen) {
            return;
        }

        this.enableAnimations();
        this.showSidebar();
        this.showBackdrop();
        this.opened = true;
        this.openedChanged.emit(this.opened);
        this.changeDetectorRef.markForCheck();
    }

    close(): void {
        if (!this.opened || this.isLockedOpen) {
            return;
        }
        this.enableAnimations();
        this.hideBackdrop();
        this.opened = false;
        this.openedChanged.emit(this.opened);
        this.hideSidebar();
        this.changeDetectorRef.markForCheck();
    }

    toggleOpen(): void {
        if (this.opened) {
            this.close();
        } else {
            this.open();
        }
    }

    @HostListener('mouseenter')
    onMouseEnter(): void {
        if (!this.foldedAutoTriggerOnHover) {
            return;
        }
        this.unfoldTemporarily();
    }

    @HostListener('mouseleave')
    onMouseLeave(): void {
        if (!this.foldedAutoTriggerOnHover) {
            return;
        }
        this.foldTemporarily();
    }

    fold(): void {
        if (this.folded) {
            return;
        }
        this.enableAnimations();
        this.folded = true;
        this.changeDetectorRef.markForCheck();
    }

    unfold(): void {
        if (!this.folded) {
            return;
        }
        this.enableAnimations();
        this.folded = false;
        this.changeDetectorRef.markForCheck();
    }

    toggleFold(): void {
        if (this.folded) {
            this.unfold();
        } else {
            this.fold();
        }
    }

    foldTemporarily(): void {
        if (!this.folded) {
            return;
        }
        this.enableAnimations();
        this.unfolded = false;
        const styleValue = this.foldedWidth + 'px';
        this.renderer.setStyle(this.elementRef.nativeElement, 'width', styleValue);
        this.renderer.setStyle(this.elementRef.nativeElement, 'min-width', styleValue);
        this.renderer.setStyle(this.elementRef.nativeElement, 'max-width', styleValue);
        this.changeDetectorRef.markForCheck();
    }

    unfoldTemporarily(): void {
        if (!this.folded) {
            return;
        }
        this.enableAnimations();
        this.unfolded = true;
        this.renderer.removeStyle(this.elementRef.nativeElement, 'width');
        this.renderer.removeStyle(this.elementRef.nativeElement, 'min-width');
        this.renderer.removeStyle(this.elementRef.nativeElement, 'max-width');
        this.changeDetectorRef.markForCheck();
    }
}
