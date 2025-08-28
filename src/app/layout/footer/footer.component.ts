import { Component } from '@angular/core';
import { MatIconRegistry, MatIcon } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
    selector: 'app-footer',
    imports: [MatIcon, MatToolbar],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css'
})
export class FooterComponent {}
