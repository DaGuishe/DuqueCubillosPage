import { Component } from '@angular/core';
import { SliderComponent } from './slider/slider.component';
import { CampexpComponent } from './campexp/campexp.component';

@Component({
  selector: 'app-paginicio',
  templateUrl: './paginicio.component.html',
  styleUrls: ['./paginicio.component.css'],
  standalone: true,
  imports: [SliderComponent, CampexpComponent], // Importamos el slider
})
export class PagInicioComponent {}
