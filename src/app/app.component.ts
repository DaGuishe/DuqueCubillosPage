import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

declare function initFlowbite(): void;

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet],
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements AfterViewInit {
  title = 'DuqueCubillospage';
  selectedFont: string = 'font-poppins'; // Clase inicial

  changeFont(fontClass: string): void {
    this.selectedFont = fontClass;
  }
  // Solo ejecuta Flowbite después de que la vista ha sido renderizada
  ngAfterViewInit(): void {
    if (typeof document !== 'undefined') {
      // Inicializa Flowbite (verifica el DOM primero)
      initFlowbite();
    }}
}
