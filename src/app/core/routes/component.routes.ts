import { Routes } from '@angular/router';

export const componentRoutes: Routes = [
  {
    path: '',
    redirectTo: 'accodrion',
    pathMatch: 'full'
  },
  {
    path: 'accordion',
    loadComponent: () =>
      import(
        '../../components/pages/accordion-page/accordion-page.component'
      ).then((m) => m.AccordionPageComponent),
  },
  {
    path: 'alert',
    loadComponent: () =>
      import('../../components/pages/alert-page/alert-page.component').then(
        (c) => c.AlertPageComponent
      ),
  },
  {
    path: 'dialog',
    loadComponent: () =>
      import('../../components/pages/dialog-page/dialog-page.component').then(
        (m) => m.DialogPageComponent
      ),
  },
  {
    path: 'badge',
    loadComponent: () =>
      import('../../components/pages/badge-page/badge-page.component').then(
        (c) => c.BadgePageComponent
      ),
  },
  {
    path: 'breadcrumb',
    loadComponent: () =>
      import(
        '../../components/pages/breadcrumb-page/breadcrumb-page.component'
      ).then((m) => m.BreadcrumbPageComponent),
  },
  {
    path: 'button',
    loadComponent: () =>
      import('../../components/pages/button-page/button-page.component').then(
        (c) => c.ButtonPageComponent
      ),
  },
  {
    path: 'checkbox',
    loadComponent: () =>
      import(
        '../../components/pages/checkbox-page/checkbox-page.component'
      ).then((m) => m.CheckboxPageComponent),
  },
  {
    path: 'tooltip',
    loadComponent: () =>
      import('../../components/pages/tooltip-page/tooltip-page.component').then(
        (m) => m.TooltipPageComponent
      ),
  },
  {
    path: 'input',
    loadComponent: () =>
      import('../../components/pages/input-page/input-page.component').then(
        (c) => c.InputPageComponent
      ),
  },
  {
    path: 'popover',
    loadComponent: () =>
      import('../../components/pages/popover-page/popover-page.component').then(
        (m) => m.PopoverPageComponent
      ),
  },
  {
    path: 'radio',
    loadComponent: () =>
      import('../../components/pages/radio-page/radio-page.component').then(
        (m) => m.RadioPageComponent
      ),
  },
  {
    path: 'select',
    loadComponent: () =>
      import('../../components/pages/select-page/select-page.component').then(
        (m) => m.SelectPageComponent
      ),
  },
  {
    path: 'sheet',
    loadComponent: () =>
      import('../../components/pages/sheet-page/sheet-page.component').then(
        (c) => c.SheetPageComponent
      ),
  },
  {
    path: 'slider',
    loadComponent: () =>
      import('../../components/pages/slider-page/slider-page.component').then(
        (m) => m.SliderPageComponent
      ),
  },
  {
    path: 'switch',
    loadComponent: () =>
      import('../../components/pages/switch-page/switch-page.component').then(
        (m) => m.SwitchPageComponent
      ),
  },
  {
    path: 'tabs',
    loadComponent: () =>
      import('../../components/pages/tab-page/tab-page.component').then(
        (m) => m.TabPageComponent
      ),
  },
  {
    path: 'toast',
    loadComponent: () =>
      import('../../components/pages/toaster-page/toaster-page.component').then(
        (m) => m.ToasterPageComponent
      ),
  },
  {
    path: 'tree',
    loadComponent: () =>
      import('../../components/pages/tree-page/tree-page.component').then(
        (c) => c.TreePageComponent
      ),
  },
];
