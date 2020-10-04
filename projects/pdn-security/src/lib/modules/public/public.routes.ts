import { Routes } from '@angular/router';
import { PublicComponent } from './public.component';

export const PUBLIC_ROUTES: Routes  = [
    // todo: loadChildren of main...
    { path: 'public', component: PublicComponent}
];
