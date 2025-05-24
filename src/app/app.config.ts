import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { MAT_DATE_LOCALE } from '@angular/material/core';

import { provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
    providers: [
        //http
        provideHttpClient(),
        provideAnimations(),

        provideToastr(),

        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    ]
};
