import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutmainComponent } from './layout/layoutmain/layoutmain.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './layout/footer/footer.component';
// Importaciones para el formulario
import { ReactiveFormsModule } from '@angular/forms';

// Importaciones de Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { ContactoComponent } from './pages/contacto/contacto.component'; // Asegúrate que la ruta sea correcta
import { ProjectsComponent } from './pages/dashbord/projects/projects.component';
import { StackstecComponent } from './pages/dashbord/stackstec/stackstec.component';
import { InicioComponent } from './pages/inicio/inicio.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    /*  LayoutmainComponent,
        HeaderComponent,
        FooterComponent, */
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    /* StackstecComponent,
        ProjectsComponent,
        ContactoComponent, */
    MatGridListModule,
    /*     InicioComponent,
     */
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Portafolio';
}
