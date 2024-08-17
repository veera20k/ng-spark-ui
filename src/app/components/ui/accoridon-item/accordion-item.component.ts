import { NgClass } from '@angular/common';
import {
  Component,
  input,
  output,
  signal,
} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';

@Component({
  selector: 'spark-accordion-item',
  standalone: true,
  template: `
    <div class="border-b w-full rounded-md">
      <div
        class="flex justify-between px-4 py-3 cursor-pointer"
        (click)="toggle(!isOpen())"
      >
        <ng-content select="[slot=trigger]" />
        <fa-icon
          [icon]="faChevronDown"
          class="fa-sm transition-all"
          [ngClass]="isOpen() ? 'rotate-180' : ''"
        ></fa-icon>
      </div>
      <div class="accordion-body" [ngClass]="isOpen() ? 'accordion-open' : ''">
        <section class="overflow-hidden">
          <div class="m-3 pl-4">
            <ng-content select="[slot=content]" />
          </div>
        </section>
      </div>
    </div>
  `,
  host: {
    class: 'contents',
  },
  imports: [FontAwesomeModule, NgClass],
})
export class AccordionItemComponent {
  isOpen = signal(false);
  toggleEvent = output<boolean>();
  alwaysOpen = input(false);

  faChevronDown = faChevronDown;

  ngOnInit(): void {
    if (this.alwaysOpen()) {
      this.isOpen.set(true);
    }
  }

  toggle(isOpen: boolean) {
    if (!this.alwaysOpen()) {
      this.isOpen.set(isOpen);
      this.toggleEvent.emit(isOpen);
    }
  }
}
