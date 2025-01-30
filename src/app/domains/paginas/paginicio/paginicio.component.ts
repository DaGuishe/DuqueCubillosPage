import { Component } from '@angular/core';
import { SliderComponent } from './slider/slider.component';
import { CampexpComponent } from './campexp/campexp.component';
import { VacanteComponent } from './vacante/vacante.component';
import { TestimoniosComponent } from './testimonios/testimonios.component';

@Component({
  selector: 'app-paginicio',
  templateUrl: './paginicio.component.html',
  styleUrls: ['./paginicio.component.css'],
  standalone: true,
  imports: [ SliderComponent, CampexpComponent, VacanteComponent, TestimoniosComponent], // Asegurar correctamente las importaciones
})
export class PagInicioComponent {}
