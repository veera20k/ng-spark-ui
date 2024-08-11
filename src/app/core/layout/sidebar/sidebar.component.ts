import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'flash-sidebar',
  template: `<aside class="px-4 pb-4 pt-1 text-sm w-max">
    @for (module of items; track module.name; let i = $index) {
    <h3 class="font-bold" [ngClass]="i == 0 ? 'mb-3' : 'my-3'">
      {{ module.name }}
    </h3>
    @for(item of module.items; track $index) {
    <h3
      class="text-gray-500 hover:underline hover:font-bold hover:text-black cursor-pointer mt-2"
      routerLinkActive="text-black font-semibold"
      [routerLink]="[
        module.name === 'Components' ? 'components/' + item.name : item.name
      ]"
    >
      {{ item.dpName }}
    </h3>
    } }
  </aside>`,
  standalone: true,
  imports: [NgClass, RouterLink, RouterLinkActive],
  host: {
    class: 'overflow-y-auto',
  },
})
export class SidebarComponent {
  items = [
    {
      name: 'Getting Started',
      items: [
        {
          name: 'introduction',
          dpName: 'Introduction',
        },
        {
          name: 'how-to-use',
          dpName: 'How to use',
        },
      ],
    },
    {
      name: 'Components',
      items: [
        {
          name: 'accordion',
          dpName: 'Accordion',
        },
        {
          name: 'alert',
          dpName: 'Alert',
        },
        {
          name: 'dialog',
          dpName: 'Dialog',
        },
        {
          name: 'badge',
          dpName: 'Badge',
        },
        {
          name: 'breadcrumb',
          dpName: 'Breadcrumb',
        },
        {
          name: 'button',
          dpName: 'Button',
        },
        {
          name: 'checkbox',
          dpName: 'Checkbox',
        },
        {
          name: 'input',
          dpName: 'Input',
        },
        {
          name: 'popover',
          dpName: 'Popover',
        },
        {
          name: 'radio',
          dpName: 'Radio',
        },
        {
          name: 'select',
          dpName: 'Select',
        },
        {
          name: 'sheet',
          dpName: 'Sheet',
        },
        {
          name: 'slider',
          dpName: 'Slider',
        },
        {
          name: 'toast',
          dpName: 'Toast',
        },
        {
          name: 'switch',
          dpName: 'Switch',
        },
        {
          name: 'tabs',
          dpName: 'Tabs',
        },
        {
          name: 'tooltip',
          dpName: 'Tooltip',
        },
        {
          name: 'tree',
          dpName: 'Tree'
        }
      ],
    },
  ];
}
