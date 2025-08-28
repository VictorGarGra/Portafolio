import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-redes',
    imports: [MatIcon, RouterOutlet, RouterModule],
    templateUrl: './redes.component.html',
    styleUrl: './redes.component.css'
})
export class RedesComponent {
  correoDelUsuario: string = 'Garciavico251@gmail.com';
}
