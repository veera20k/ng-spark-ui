import { Component } from '@angular/core';

@Component({
  selector: 'flash-card',
  standalone: true,
  template: ` <header>
      <ng-content select="[slot=title]"/>
      <ng-content select="[slot=description]"/>
    </header>
    <ng-content select="[slot=content]"/>
    <footer>
      <ng-content select="[slot=footer]"/>
    </footer>`,
  host: {
    class: 'border rounded-lg bg-background p-4 shadow-sm',
  },
})
export class CardComponent {}
