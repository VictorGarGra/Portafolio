import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter /* withAnchorScrolling */ } from '@angular/router';
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
// La línea 'import { RouterLink }...' se ha eliminado de aquí

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes /* , withAnchorScrolling() */),
    provideAnimationsAsync(),
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
