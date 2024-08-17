import { Component, input } from "@angular/core";

@Component({
  selector: 'spark-radio',
  standalone: true,
  template: `
      <input
        type="radio"
        class="h-4 w-4 rounded-full border border-primary accent-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        [checked]="checked()"
        [disabled]="disabled()"
        [value]="value()"
        (change)="change($event)"
        [id]="htmlFor()"
        [name]="name()"
      />
      <label [for]="htmlFor()">
        <ng-content></ng-content>
      </label>
  `,
  host: {
    class: 'flex items-center gap-3'
  }
})
export class RadioComponent {
  checked = input(false);
  disabled = input(false);
  value = input('');
  htmlFor = input('');
  name = input('');

  change(event: Event) {
  }
}