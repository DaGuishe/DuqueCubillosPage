import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit, OnDestroy {
  slides = [
    {
      title: 'Expertos de la Justicia',
      text: `Diam leo vitae tortor mauris faucibus odio nullam enim. At dolor pellentesque eget et purus.
             Purus mauris eget maecenas placerat vehicula tortor massa.`,
      image: 'assets/slide0.png', // Ruta de ejemplo, cámbiala según sea necesario
      author: 'Carolina Carvajal',
    },
    {
      title: 'MISIÓN',
      text: `Prestar servicios profesionales especializados en las diferentes áreas del Derecho,
      Ingeniería Civil, asesorías inmobiliarias y comercialización de productos;
      de manera responsable, eficaz, eficiente, y con un alto grado de calidad, equidad y justicia.`,
      image: 'path/to/your/image1.jpg', // Cambiar ruta
    },
    {
      title: 'VISIÓN',
      text: `Nos proyectamos al año 2030, a ser una firma líder, con prestigio nacional innovadora,
      confiable y transparente, comprometidos a facilitar y mejorar la calidad de vida de nuestros clientes.`,
      image: 'path/to/your/image2.jpg', // Cambiar ruta
    },
  ];

  currentSlide = 0; // Diapositiva actual
  autoSlideInterval!: ReturnType<typeof setInterval>; // Para el intervalo automático

  ngOnInit() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Cambia cada 5 segundos
  }

  ngOnDestroy() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  /**
   * Cambia a una diapositiva específica
   * @param index Índice de la diapositiva
   */
  goToSlide(index: number) {
    this.currentSlide = index;
  }
}
