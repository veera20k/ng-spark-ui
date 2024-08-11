import { Component, input } from '@angular/core';
import { PopoverComponent } from '../popover/popover.component';
import { ButtonComponent } from '../button/button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowsUpDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'flash-select',
  template: `
    <flash-popover [disableScroll]="true" side="bottom">
      <flash-button variant="outlined" slot="trigger">
        <div class="flex justify-between min-w-[170px] p-1">
          <h2>Select...</h2>
          <fa-icon [icon]="faArrowsUpDown" class="text-gray-500"></fa-icon>
        </div>
      </flash-button>
      <div slot="content" class="p-2 rounded-md bg-white shadow-sm w-[200px] border mt-1">
          <ul>
            @for (item of items(); track $index) {
              <li class="cursor-pointer hover:bg-gray-100 p-1 text-sm">
                {{ item }}
              </li>
            }
          </ul>
      </div>
    </flash-popover>
  `,
  standalone: true,
  imports: [PopoverComponent, ButtonComponent, FontAwesomeModule],
})
export class SelectComponent {
  faArrowsUpDown = faArrowsUpDown;
  items = input(['Item 1', 'Item 2', 'Item 3']);
}
