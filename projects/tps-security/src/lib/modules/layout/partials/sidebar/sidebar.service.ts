import { Injectable } from '@angular/core';
import { SidebarComponent } from './sidebar.component';

@Injectable({
    providedIn: 'root'
})
export class SidebarService {

    private registryObj: { [key: string]: SidebarComponent } = {};

    constructor() {}

    register(key, sidebar): void {
        this.registryObj[key] = sidebar;
    }

    unregister(key): void {
        delete this.registryObj[key];
    }

    getSidebar(key): SidebarComponent {
        return this.registryObj[key];
    }
}
