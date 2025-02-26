import { NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'spark-checkbox',
    template: `
    <label
      [for]="htmlFor()"
      class="relative flex items-center rounded-full cursor-pointer"
    >
      <input
        type="checkbox"
        class="peer relative appearance-none w-4 h-4 border rounded shrink-0 cursor-pointer border-primary transition-all checked:bg-gray-900 checked:border-gray-900 checked:before:bg-gray-900 disabled:cursor-not-allowed disabled:opacity-50"
        [id]="htmlFor()"
        [disabled]="disabled()"
        [checked]="checked()"
        (change)="onCheck(checkbox.checked)"
        #checkbox
      />
      <span
        class="absolute text-white text-xs transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100"
      >
        &#10004;
      </span>
    </label>
    <label
      [for]="htmlFor()"
      class="cursoir-pointer select-none ml-2"
      [ngClass]="{ 'opaccity-50 cursor-not-allowed': disabled() }"
    >
      <ng-content select="[slot=label]"></ng-content>
    </label>
  `,
    host: {
        class: 'inline-flex items-center',
    },
    imports: [NgClass]
})
export class CheckboxComponent {
  htmlFor = input('');
  disabled = input(false);
  checked = input(false);
  changeEvent = output<boolean>();

  onCheck(value: boolean) {
    this.changeEvent.emit(value);
  }
}
