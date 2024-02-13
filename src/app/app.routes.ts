import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'public', pathMatch: 'full' },
    {
        path: 'public',
        loadComponent: () => import('./pages/public.component'),
      }
];
