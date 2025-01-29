import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { Component, AfterViewInit, OnDestroy, NgZone } from '@angular/core';

@Component({
  selector: 'app-slider',
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  standalone: true,
})
export class SliderComponent implements OnDestroy {
  currentSlide = 0;
  slides = [
    { title: 'Expertos de la Justicia', text: 'Tu futuro comienza con una elección sólida, vive la excelencia en cada rincón con nuestros proyectos.' },
    { title: 'Misión', text: 'Prestar servicios profesionales especializados en las diferentes áreas del Derecho, Ingeniería Civil, asesorías inmobiliarias y comercialización de productos; de manera responsable, eficaz, eficiente, y con un alto grado de calidad, equidad y justicia, generando soluciones y alternativas confiables a las necesidades de nuestros clientes.' },
    { title: 'Visión', text: 'Nos proyectamos al año 2030, a ser una firma líder, con prestigio nacional innovadora, confiable y transparente, comprometidos a facilitar y mejorar la calidad de vida de nuestros clientes, ofreciendo oportunidades de desarrollo profesional y personal a nuestros integrantes. Convirtiéndonos en socios estratégicos de nuestros clientes y apostando por la innovación como clave para dar respuestas a los retos.' },
  ];
  private slideSubscription!: Subscription;

  ngAfterViewInit() {
    this.slideSubscription = interval(8000).subscribe(() => {
      this.nextSlide();
    });
  }


  ngOnDestroy() {
    if (this.slideSubscription) {
      this.slideSubscription.unsubscribe();
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }
  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }
}



