import { Routes } from '@angular/router';
import { MainComponent } from './main.component';

export const MAIN_ROUTES : Routes  = [
    // todo: loadChildren of main...
    { path: 'home', component: MainComponent}
];
