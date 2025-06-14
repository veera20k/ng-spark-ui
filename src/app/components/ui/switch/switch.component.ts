import { Component, input, output } from '@angular/core';

@Component({
  selector: 'spark-switch',
  standalone: true,
  template: `
    <label class="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        class="sr-only peer"
        [checked]="checked()"
        [disabled]="disabled()"
        (change)="changeEvent.emit($event)"
      />
      <div
        class="relative w-11 h-6 bg-gray-200  rounded-full peer peer-checked:after:translate-x-full peer-checked:rtl:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-primary"
      ></div>
      <span class="ms-3 text-sm font-medium text-gray-900 ">
        <ng-content></ng-content>
      </span>
    </label>
  `,
})
export class SwitchComponent {
  checked = input(false);
  disabled = input(false);
  changeEvent = output<Event>();
}
