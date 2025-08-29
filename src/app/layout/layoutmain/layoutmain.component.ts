import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para *ngIf

// Importa todos los componentes que usas en la plantilla
import { MenuComponent } from '../menu/menu.component';
import { FooterComponent } from '../footer/footer.component';
import { InicioComponent } from '../../pages/inicio/inicio.component'; // El splash screen
import { IniciobienvenidaComponent } from '../../pages/dashbord/iniciobienvenida/iniciobienvenida.component';
import { ProjectsComponent } from '../../pages/dashbord/projects/projects.component';
import { StackstecComponent } from '../../pages/dashbord/stackstec/stackstec.component';
import { AcercadeComponent } from '../../pages/dashbord/acercade/acercade.component';
import { RedesComponent } from '../../pages/dashbord/redes/redes.component';

@Component({
  selector: 'app-layoutmain',
  standalone: true, // <-- 1. Añadido: Declara el componente como standalone
  imports: [
    CommonModule, // <-- 2. Añadido: Para poder usar *ngIf en el HTML
    MenuComponent,
    FooterComponent,
    InicioComponent, // <-- 3. Añadido: El componente de bienvenida
    IniciobienvenidaComponent,
    ProjectsComponent,
    StackstecComponent,
    AcercadeComponent,
    RedesComponent,
  ],
  templateUrl: './layoutmain.component.html',
  styleUrl: './layoutmain.component.css',
})
export class LayoutmainComponent implements OnInit {
  // <-- 4. Añadido: Implementa OnInit

  // 5. Lógica para controlar la visibilidad de la bienvenida
  mostrandoBienvenida = true;

  constructor() {}

  ngOnInit(): void {
    // Después de 2.5 segundos, oculta la bienvenida para mostrar el dashboard
    setTimeout(() => {
      this.mostrandoBienvenida = false;
    }, 2500);
  }
}
