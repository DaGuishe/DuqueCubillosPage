import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-campexp',
  imports: [CommonModule],
  templateUrl: './campexp.component.html',
})
export class CampexpComponent {
  campos = [
    { titulo: 'Antimonopoly Compliance', link: '#' },
    { titulo: 'Employment Law', link: '#' },
    { titulo: 'Public Procurement Law', link: '#' },
    { titulo: 'Medical Law', link: '#' },
    { titulo: 'Criminal Law', link: '#' },
    { titulo: 'Building and Architect Law', link: '#' },
    { titulo: 'Intellectual Property', link: '#' },
    { titulo: 'Family & Inheritance Law', link: '#' },
  ];
}
