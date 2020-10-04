import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AppNavigationService {

    private _onNavigationChanged: BehaviorSubject<any>;
    private onNavigationRegistered: BehaviorSubject<any>;

    private currentNavigationKey: string;
    private registryObj: { [key: string]: any } = {};

    constructor() {
        this.currentNavigationKey = null;
        this._onNavigationChanged = new BehaviorSubject(null);
        this.onNavigationRegistered = new BehaviorSubject(null);
    }

    get onNavigationChanged(): Observable<any> {
        return this._onNavigationChanged.asObservable();
    }

    register(key, navigation): void {
        this.registryObj[key] = navigation;
        this.onNavigationRegistered.next([key, navigation]);
    }

    getNavigation(key): any {
        return this.registryObj[key];
    }

    getCurrentNavigation(): any {
        return this.getNavigation(this.currentNavigationKey);
    }

    setCurrentNavigation(key): void {
        this.currentNavigationKey = key;
        this._onNavigationChanged.next(key);
    }

}
