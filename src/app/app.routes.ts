import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'introduction',
    pathMatch: 'full',
  },
  {
    path: 'introduction',
    loadComponent: () =>
      import('./components/pages/introduction/introduction.component').then(
        (m) => m.IntroductionComponent
      ),
  },
  {
    path: 'how-to-use',
    loadComponent: () =>
      import('./components/pages/how-to-use/how-to-use.component').then(
        (m) => m.HowToUseComponent
      ),
  },
  {
    path: 'components',
    loadChildren: () =>
      import('./core/routes/component.routes').then((m) => m.componentRoutes),
  },
  {
    path: '**',
    redirectTo: 'introduction',
  },
];
