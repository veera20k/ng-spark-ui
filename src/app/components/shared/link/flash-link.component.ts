import { Component, input } from '@angular/core';

@Component({
  selector: 'flash-link',
  standalone: true,
  template: `
    <code 
      >Copy {{ name() }}
      <a class="hover:underline text-blue-500" [href]="href()" target="_blank"
        >here</a
      >
      and copy and paste the following code into your {{ type() }} folder.</code
    >
  `,
  host: {
    class: 'contents',
  },
})
export class FlashLinkComponent {
  href = input.required();
  type = input('Components');
  name = input();
}
