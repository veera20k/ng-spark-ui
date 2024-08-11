import { Component } from '@angular/core';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { PopoverComponent } from '../../ui/popover/popover.component';
import { ButtonComponent } from '../../ui/button/button.component';
import { PreviewCodeTabsComponent } from '../../shared/preview-code-tabs/preview-code-tabs.component';

@Component({
  selector: 'flash-popover-page',
  standalone: true,
  template: `
    <flash-page-header
      title="Popover"
      description="A popover is a non-modal dialog that appears when the user interacts with an element."
    ></flash-page-header>
    <flash-preview-code-tabs>
      <flash-popover slot="preview" side="bottom" [static]="true">
        <flash-button slot="trigger">Click me</flash-button>
        <div slot="content" class="bg-white p-4 rounded-lg shadow-md w-[300px] m-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus mollitia repudiandae dolore debitis. Sed laudantium necessitatibus cumque labore at quos nostrum sapiente doloribus laboriosam recusandae hic, quidem consequatur possimus. Cupiditate. 
        </div>
      </flash-popover>
    </flash-preview-code-tabs>
  `,
  imports: [
    PageHeaderComponent,
    PopoverComponent,
    ButtonComponent,
    PreviewCodeTabsComponent,
  ],
})
export class PopoverPageComponent {}
