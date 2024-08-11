import { NgClass } from '@angular/common';
import { Component, input, output, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';
import { BadgeComponent } from '../../badge/badge.component';

@Component({
  selector: 'flash-tree-item',
  standalone: true,
  template: `
    <div class="flex pb-2">
      <ng-content select="[slot=label]" />
      <span
        (click)="toggle()"
        [ngClass]="{ 'rotate-180': isOpen(), 'opacity-50': disabled() }"
        class="mx-2"
        role="button"
      >
        <ng-content select="[slot=trigger]" />
      </span>
      <ng-content select="[slot=info]" />
    </div>
    <div class="accordion-body" [ngClass]="isOpen() ? 'accordion-open' : ''">
      <section class="overflow-hidden">
        <div class="m-1">
          <ng-content select="[slot=content]" />
        </div>
      </section>
    </div>
  `,
  imports: [FontAwesomeModule, NgClass, BadgeComponent],
})
export class TreeItemComponent {
  setOpen = input(false);
  isOpen = signal(false);
  toggleEvent = output<boolean>();
  alwaysOpen = input(false);
  disabled = input(false);

  faChevronDown = faChevronDown;

  ngOnInit(): void {
    this.isOpen.set(this.setOpen() || this.alwaysOpen());
  }

  toggle() {
    if (!this.alwaysOpen() && !this.disabled()) {
      this.isOpen.set(!this.isOpen());
      this.toggleEvent.emit(this.isOpen());
    }
  }
}
