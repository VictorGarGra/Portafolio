import { Routes } from '@angular/router';
import { LayoutmainComponent } from './layout/layoutmain/layoutmain.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CvComponent } from './pages/cv/cv.component';
export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'dash', component: LayoutmainComponent },
  { path: 'correo', component: ContactoComponent },
  { path: 'cv', component: CvComponent },
];
