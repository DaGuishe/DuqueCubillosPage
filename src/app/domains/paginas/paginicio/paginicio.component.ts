import { Component } from '@angular/core';
import { SliderComponent } from './slider/slider.component';
import { CampexpComponent } from './campexp/campexp.component';
import { VacanteComponent } from './vacante/vacante.component';

@Component({
  selector: 'app-paginicio',
  templateUrl: './paginicio.component.html',
  styleUrls: ['./paginicio.component.css'],
  standalone: true,
  imports: [ SliderComponent, CampexpComponent, VacanteComponent], // Asegurar correctamente las importaciones
})
export class PagInicioComponent {}
