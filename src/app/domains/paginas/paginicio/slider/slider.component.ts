
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { interval, Subscription } from 'rxjs';


import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';

@Component({
  selector: 'app-slider',
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  standalone: true,
})
export class SliderComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  slides = [
    { title: 'Diapositiva 1', text: 'Texto para la primera diapositiva' },
    { title: 'Diapositiva 2', text: 'Texto para la segunda diapositiva' },
  ];
  private slideSubscription!: Subscription;

  ngOnInit() {
    this.slideSubscription = interval(5000).subscribe(() => {
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



