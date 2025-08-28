import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ProjectsComponent } from '../../pages/dashbord/projects/projects.component';
import { StackstecComponent } from '../../pages/dashbord/stackstec/stackstec.component';
import { AcercadeComponent } from '../../pages/dashbord/acercade/acercade.component';
import { RedesComponent } from '../../pages/dashbord/redes/redes.component';
import { CvComponent } from '../../pages/cv/cv.component';

import { RouterOutlet } from '@angular/router';
import { IniciobienvenidaComponent } from '../../pages/dashbord/iniciobienvenida/iniciobienvenida.component';
@Component({
  selector: 'app-layoutmain',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    ProjectsComponent,
    StackstecComponent,
    AcercadeComponent,
    RedesComponent,
    RouterOutlet,
    IniciobienvenidaComponent,
  ],
  templateUrl: './layoutmain.component.html',
  styleUrl: './layoutmain.component.css',
})
export class LayoutmainComponent {}
