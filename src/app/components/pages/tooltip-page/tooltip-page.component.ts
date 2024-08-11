import { Component } from '@angular/core';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { PreviewCodeTabsComponent } from '../../shared/preview-code-tabs/preview-code-tabs.component';
import { ButtonComponent } from '../../ui/button/button.component';
import { TooltipComponent } from '../../ui/tooltip/tooltip.component';

@Component({
  selector: 'flash-tooltip-page',
  standalone: true,
  template: `
    <flash-page-header
      title="Sheet"
      description="A sheet is a non-modal dialog that appears when the user interacts with an element."
    ></flash-page-header>
    <flash-preview-code-tabs>
      <ng-container slot="preview">
        <flash-tooltip side="top">
          <flash-button slot="trigger">Button</flash-button>
          <span slot="content" class="text-xs">This is button tooltip Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident officia distinctio quasi corrupti non expedita magnam, debitis culpa quisquam reiciendis ab sit quos atque placeat labore delectus est commodi pariatur.</span>
        </flash-tooltip>
      </ng-container>
    </flash-preview-code-tabs>
  `,
  imports: [
    PageHeaderComponent,
    PreviewCodeTabsComponent,
    ButtonComponent,
    TooltipComponent,
  ],
})
export class TooltipPageComponent {}
