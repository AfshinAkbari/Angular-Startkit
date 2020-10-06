import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    {
        path: 'public',
        loadChildren: () => import('tps-security').then(m => m.PublicModule)
    },
    {
        path: 'main',
        loadChildren: () => import('tps-security').then(m => m.MainModule)
    },
    { path: '', redirectTo: 'public', pathMatch: 'full' },
    { path: '**', redirectTo: 'public' }
];
