import { Component, computed, input, output } from '@angular/core';
import { ButtonBaseComponent } from '../base/button-base/button-base.component';
import { ButtonVariant } from '../../../core/models/common.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'flash-button',
  standalone: true,
  template: `
    <button flashButton [disabled]="disabled()" [ngClass]="buttonClass()" (click)="clickEvent.emit($event)">
      <ng-content/>
    </button>
  `,
  imports: [ButtonBaseComponent, NgClass],
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
