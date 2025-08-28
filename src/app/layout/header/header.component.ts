import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu'; // <-- ¡Este es importante!
import { RouterModule, RouterOutlet } from '@angular/router';
@Component({
    selector: 'app-header',
    imports: [
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatMenuModule,
        RouterModule,
        RouterOutlet,
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {}
