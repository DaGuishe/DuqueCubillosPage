import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    data: { hostAttr: 'layout-component' },
    children: [
      {
        path: '',
        loadComponent: () => import('./domains/paginas/paginicio/paginicio.component').then(m => m.PaginicioComponent),
        data: { hostAttr: 'paginicio-component' }
      }
    ]
  },
];
