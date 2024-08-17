import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'flash-scroll-tracker',
  template: `
    @if (items().length) {
    <div class="fixed flex flex-col text-md font-medium gap-1">
      <span class="mb-2"> On This Page </span>
      @for (item of items(); track item) {
      <span class="text-gray-600" [ngClass]="{'font-medium': active() === 'item'}">{{ item }}</span>
      }
    </div>
    }
  `,
  standalone: true,
  imports: [NgClass]
})
export class ScrollTrackerComponent {
  items = input<string[]>([]);
  active = input<string>('');
}
