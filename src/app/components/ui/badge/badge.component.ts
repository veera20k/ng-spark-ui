import { Component, computed, input } from '@angular/core';
import { BadgeVariant } from '../../../core/models/common.model';
import { NgClass } from '@angular/common';

@Component({
    selector: 'spark-badge',
    template: `
    <div
      class="inline-flex items-center rounded-md border px-2 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 gap-1 cursor-pointer"
      [ngClass]="badgeVairentClass()"
    >
      <ng-content></ng-content>
    </div>
  `,
    host: {
        class: 'contents',
    },
    imports: [NgClass]
})
export class BadgeComponent {
  variant = input<BadgeVariant>('primary');

  badgeVairentClass = computed(() => {
    switch (this.variant()) {
      case 'primary':
        return 'text-primary-foreground bg-primary hover:bg-primary/90';
      case 'secondary':
        return 'text-secondary-foreground bg-secondary hover:bg-secondary/80';
      case 'destructive':
        return 'bg-destructive text-destructive-foreground hover:bg-destructive/90';
      case 'outlined':
        return 'border border-input bg-background hover:bg-accent hover:text-accent-foreground';
    }
  });
}
