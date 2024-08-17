import { Component, computed, input, output } from '@angular/core';
import { ButtonVariant } from '../../../core/models/common.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'flash-button',
  standalone: true,
  template: `
    <button
      class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2"
      type="button"
      [disabled]="disabled()"
      [ngClass]="buttonClass()"
      (click)="clickEvent.emit($event)"
    >
      <ng-content />
    </button>
  `,
  imports: [NgClass],
})
export class ButtonComponent {
  disabled = input(false);
  variant = input<ButtonVariant>('primary');
  clickEvent = output<MouseEvent>();

  buttonClass = computed(() => {
    switch (this.variant()) {
      case 'primary':
        return 'bg-primary text-primary-foreground hover:bg-primary/90';
      case 'secondary':
        return 'bg-secondary text-secondary-foreground hover:bg-secondary/80';
      case 'destructive':
        return 'bg-destructive text-destructive-foreground hover:bg-destructive/90';
      case 'outlined':
        return 'border border-input bg-background hover:bg-accent hover:text-accent-foreground';
      case 'ghost':
        return 'hover:bg-accent hover:text-accent-foreground';
      case 'link':
        return 'bg-transparent text-primary hover:underline focus:underline';
    }
  });
}
