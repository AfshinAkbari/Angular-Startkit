import { Injectable } from '@angular/core';
import { AppSidebarComponent } from './sidebar.component';

@Injectable({
    providedIn: 'root'
})
export class AppSidebarService {

    private registryObj: { [key: string]: AppSidebarComponent } = {};

    constructor() {}

    register(key, sidebar): void {
        this.registryObj[key] = sidebar;
    }

    unregister(key): void {
        delete this.registryObj[key];
    }

    getSidebar(key): AppSidebarComponent {
        return this.registryObj[key];
    }
}
