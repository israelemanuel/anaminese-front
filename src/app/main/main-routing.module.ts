import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';



const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent) },
            { path: 'form', loadComponent: () => import('./pages/form/form.component').then(m => m.FormComponent) },
            { path: 'form/:id', loadComponent: () => import('./pages/form/form.component').then(m => m.FormComponent) },
            { path: 'form-print', loadComponent: () => import('./pages/form-print/form-print.component').then(m => m.FormPrintComponent) },
            { path: 'form-print/:id', loadComponent: () => import('./pages/form-print/form-print.component').then(m => m.FormPrintComponent) },

            { path: '', pathMatch: 'full', redirectTo: 'dashboard' },

        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class mainRoutingModule { }
