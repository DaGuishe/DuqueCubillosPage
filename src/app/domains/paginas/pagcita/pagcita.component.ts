import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-pagcita',
  imports: [CommonModule, FormsModule, UpperCasePipe],
  templateUrl: './pagcita.component.html',
  styleUrl: './pagcita.component.css'
})
export class PagcitaComponent {
  formData = {
    nombre: '',
    telefono: '',
    email: '',
    mensaje: '',
  };

  submitForm(form: any) {
    if (form.valid) {
      // Lógica para envío de datos al servidor
      console.log('Datos del formulario enviados:', this.formData);

      // Resetea los datos después de enviar
      form.resetForm();
    } else {
      alert('Por favor completa todos los campos requeridos.');
    }
  }

  selectedFont: string = 'font-cormorantgaramond'; // Clase para esta pagina

  changeFont(fontClass: string): void {
    this.selectedFont = fontClass;
  }

  backgroundImage: string = "/src/app/shared/images/imagenfondo.png"; // Ruta de la imagen de fondo
}
