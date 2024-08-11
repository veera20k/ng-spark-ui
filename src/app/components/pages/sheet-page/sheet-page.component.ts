import { Component } from '@angular/core';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { PreviewCodeTabsComponent } from '../../shared/preview-code-tabs/preview-code-tabs.component';
import { SheetComponent } from '../../ui/sheet/sheet.component';
import { ButtonComponent } from '../../ui/button/button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'flash-sheet-page',
  standalone: true,
  template: `
    <flash-page-header
      title="Sheet"
      description="A sheet is a non-modal dialog that appears when the user interacts with an element."
    ></flash-page-header>
    <flash-preview-code-tabs>
      <ng-container slot="preview">
        <flash-sheet>
          <flash-button slot="trigger">Click me</flash-button>
          <fa-icon [icon]="faTimes" slot="close"></fa-icon>
          <div slot="content" class="w-[300px] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            mollitia repudiandae dolore debitis. Sed laudantium necessitatibus
            cumque labore at quos nostrum sapiente doloribus laboriosam
            recusandae hic, quidem consequatur possimus. Cupiditate.
          </div>
        </flash-sheet>
      </ng-container>
    </flash-preview-code-tabs>
  `,
  imports: [
    PageHeaderComponent,
    PreviewCodeTabsComponent,
    SheetComponent,
    ButtonComponent,
    FontAwesomeModule,
  ],
})
export class SheetPageComponent {
  faTimes = faTimes;
}
