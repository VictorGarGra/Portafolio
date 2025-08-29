import { Component } from '@angular/core';
import { FooterComponent } from '../../layout/footer/footer.component';
import { MenuComponent } from '../../layout/menu/menu.component';
@Component({
  selector: 'app-cv',
  imports: [FooterComponent, MenuComponent],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
})
export class CvComponent {}
