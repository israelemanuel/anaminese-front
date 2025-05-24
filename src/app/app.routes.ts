import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: 'admin',
        canActivate: [AuthGuard],
        loadChildren: () => import('./main/main.module').then(m => m.MainModule)
    },
];
