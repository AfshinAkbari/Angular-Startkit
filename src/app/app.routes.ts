import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    {
        path: 'public',
        loadChildren: () => import('pdn-security/lib/modules/public/public.module').then(m => m.PublicModule)
    },
    {
        path: 'main',
        loadChildren: () => import('pdn-security/lib/modules/main/main.module').then(m => m.MainModule)
    },
    { path: '', redirectTo: 'public', pathMatch: 'full' },
    { path: '**', redirectTo: 'public' }
];
