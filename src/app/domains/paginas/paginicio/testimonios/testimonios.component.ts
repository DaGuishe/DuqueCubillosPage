import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-testimonios',
  imports: [CommonModule],
  templateUrl: './testimonios.component.html',
  styleUrls: ['./testimonios.component.css'],
  standalone: true
})
export class TestimoniosComponent implements AfterViewInit, OnDestroy {
  testimonios = [
    {
      nombre: 'Walter Lexlay',
      cargo: 'Entrepreneur',
      texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imagen: 'assets/images/testimonio1.jpg'
    },
    {
      nombre: 'María Fernández',
      cargo: 'CEO de Empresa',
      texto: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imagen: 'assets/images/testimonio2.jpg'
    }
  ];

  currentIndex = 0;
  private intervalId: any;

  ngAfterViewInit() {
    this.intervalId = setInterval(() => {
      this.nextTestimonio();
    }, 5000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextTestimonio() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonios.length;
  }

  prevTestimonio() {
    this.currentIndex = (this.currentIndex - 1 + this.testimonios.length) % this.testimonios.length;
  }
}
