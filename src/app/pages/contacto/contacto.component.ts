import { Component, OnInit } from '@angular/core';

// Importaciones necesarias para el componente
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

// Importaciones de los módulos de Angular Material que se usan en el HTML
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from '../../layout/header/header.component';
import { FooterComponent } from '../../layout/footer/footer.component';

@Component({
    selector: 'app-contacto', // Indica que es un componente autosuficiente
    imports: [
        // Aquí se declaran todas las dependencias del componente
        CommonModule,
        ReactiveFormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        HeaderComponent,
        FooterComponent,
    ],
    templateUrl: './contacto.component.html',
    styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  // Definimos el FormGroup para nuestro formulario
  contactForm!: FormGroup;

  // Obtenemos el año actual para el footer
  currentYear: number = new Date().getFullYear();

  // Inyectamos FormBuilder para crear el formulario fácilmente
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Inicializamos el formulario con sus campos y validadores
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  // Función que se ejecuta al enviar el formulario
  onSubmit(): void {
    // Si el formulario no es válido, no hacemos nada
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    // Obtenemos los valores del formulario
    const { name, email, subject, message } = this.contactForm.value;

    // Construimos el cuerpo del correo
    const bodyLines = [
      `Nombre: ${name}`,
      `Correo: ${email}`,
      '',
      '--- Mensaje ---',
      message,
      '',
      '(Este mensaje fue enviado desde el formulario de contacto en tu portafolio.)',
    ];
    const body = bodyLines.join('\n');

    // Creamos el enlace mailto
    const mailto = this.encodeMailto({
      to: 'Garciavico251@gmail.com',
      subject: subject,
      body: body,
    });

    // Redirigimos al cliente de correo del usuario
    window.location.href = mailto;
  }

  // Función para limpiar el formulario
  onClear(): void {
    this.contactForm.reset();
  }
  // 👇 Y aquí se define la función, DENTRO de la clase
  private encodeMailto(params: {
    to?: string;
    subject?: string;
    body?: string;
  }): string {
    const to = params.to || '';
    const subject = encodeURIComponent(params.subject || '');
    const body = encodeURIComponent(params.body || '');
    return `mailto:${to}?subject=${subject}&body=${body}`;
  }
}
