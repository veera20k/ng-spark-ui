import { Component, inject, TemplateRef } from '@angular/core';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { PreviewCodeTabsComponent } from '../../shared/preview-code-tabs/preview-code-tabs.component';
import { DialogComponent } from '../../ui/dialog/dialog.component';
import { ButtonComponent } from '../../ui/button/button.component';
import { ComponentLoaderService } from '../../../core/services/component-loader/component-loader.service';

@Component({
  selector: 'flash-dialog-page',
  standalone: true,
  template: `
    <flash-page-header
      title="Dialog"
      description="A modal dialog that interrupts the user with important content and expects a response."
    ></flash-page-header>
    <flash-preview-code-tabs>
      <flash-button
        variant="outlined"
        slot="preview"
        (clickEvent)="open($event, dialogRef)"
        >Open Dialog</flash-button
      >
      <ng-template #dialogRef>
        <flash-dialog>
          <ng-container slot="title"> Are you absolutely sure? </ng-container>
          <ng-container slot="description">
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </ng-container>
        </flash-dialog>
      </ng-template>
    </flash-preview-code-tabs>
  `,
  imports: [
    PageHeaderComponent,
    PreviewCodeTabsComponent,
      DialogComponent,
    ButtonComponent,
  ],
})
export class DialogPageComponent {
  private cmptLoaderService = inject(ComponentLoaderService);

  open(event: MouseEvent, dialogRef: TemplateRef<unknown>) {
    this.cmptLoaderService.open(event, dialogRef);
  }
}
