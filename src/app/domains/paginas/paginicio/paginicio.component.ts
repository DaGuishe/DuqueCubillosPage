import { Component } from '@angular/core';
import { SliderComponent } from './slider/slider.component';

@Component({
  selector: 'app-paginicio',
  templateUrl: './paginicio.component.html',
  styleUrls: ['./paginicio.component.css'],
  standalone: true,
  imports: [SliderComponent], // Importamos el slider
})
export class PagInicioComponent {}
