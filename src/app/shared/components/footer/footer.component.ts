import { Component } from '@angular/core';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, UpperCasePipe, RouterLinkWithHref],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
