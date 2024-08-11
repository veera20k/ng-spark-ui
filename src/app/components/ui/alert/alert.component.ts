import { Component } from '@angular/core';

@Component({
  selector: 'flash-alert',
  standalone: true,
  template: `
    <span class="absolute top-3.5 left-3">
      <ng-content select="[slot=icon]"></ng-content>
    </span>
    <h2 class="font-medium leading-none tracking-tight pl-5">
      <ng-content select="[slot=title]"></ng-content>
    </h2>
    <div class="text-sm pl-5">
      <ng-content select="[slot=description]"></ng-content>
    </div>
  `,
  host: {
    class:
      'relative w-full rounded-lg border p-4 bg-background text-foreground',
    ['attr.role']: 'alert',
  },
})
export class AlertComponent {}
