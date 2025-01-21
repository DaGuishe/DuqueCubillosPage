import { Component } from '@angular/core';
import { RouterLinkWithHref, RouterLinkActive } from '@angular/router';
import { UpperCasePipe } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLinkWithHref, RouterLinkActive, UpperCasePipe, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuItems = [
    { label: 'QUIENES SOMOS', link: '/' },
    { label: 'NUESTROS SERVICIOS', link: '/' },
    { label: '¿POR QUÉ NOSOTROS?', link: '/' },
    { label: 'TRABAJA CON NOSOTROS', link: '/' },
    { label: 'OPINIONES', link: '/' },
  ];
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
