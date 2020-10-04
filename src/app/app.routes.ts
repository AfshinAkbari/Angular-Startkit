
import { PublicComponent } from 'pdn-security/lib/modules/public/public.component';
import { PUBLIC_ROUTES } from 'pdn-security/lib/modules/public/public.routes';
import { MainComponent } from 'pdn-security/lib/modules/main/main.component';
import { MAIN_ROUTES } from 'pdn-security/lib/modules/main/main.routes';
import { Routes } from '@angular/router';

export const APP_ROUTES: Routes  = [
    { path: '', redirectTo: 'public', pathMatch: 'full'},
    { path: 'public', component: PublicComponent, children: PUBLIC_ROUTES},
    { path: '', component: MainComponent, children : [
            { path: 'main', children: MAIN_ROUTES},

        ]}
]


// { path: 's1', children: S1_ROUTE}
