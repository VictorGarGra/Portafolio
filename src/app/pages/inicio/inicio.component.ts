import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
@Component({
    selector: 'app-inicio',
    imports: [RouterOutlet],
    templateUrl: './inicio.component.html',
    styleUrl: './inicio.component.css'
})
export class InicioComponent {
  constructor(private router: Router) {}
  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['dash']);
    }, 2500); // 5000 ms = 5 segundos
  }
}
