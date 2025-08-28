import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withAnchorScrolling } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';

// Importa los módulos de Angular Material que necesitas
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

export const appConfig: ApplicationConfig = {
  providers: [
    // 1. Configuración del enrutador (con anchor scrolling habilitado)
    provideRouter(routes, withAnchorScrolling()),

    // 2. Habilita las animaciones del navegador de forma asíncrona
    provideAnimationsAsync(),

    // 3. Importa todos los módulos necesarios en un solo lugar
    importProvidersFrom([
      MatCardModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      MatIconModule,
      MatToolbarModule,
      MatMenuModule,
    ]),
  ],
};
