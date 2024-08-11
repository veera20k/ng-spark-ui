import { Component, computed, Host, HostBinding, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BadgeVariant } from '../../../core/models/common.model';
@Component({
  selector: 'flash-badge',
  standalone: true,
  template: ` <ng-content/>`,
  host: {
    class:
      'inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 gap-1 cursor-pointer',
  },
  imports: [FontAwesomeModule],
})
export class BadgeComponent {
  varient = input<BadgeVariant>('primary');

  badgeVairentClass = computed(() => {
    switch (this.varient()) {
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

  @HostBinding('class') get setBadgeVairentClass() {
    return this.badgeVairentClass();
  }

}
