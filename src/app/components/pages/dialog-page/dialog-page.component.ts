import { Component, inject, TemplateRef } from '@angular/core';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { PreviewCodeTabsComponent } from '../../shared/preview-code-tabs/preview-code-tabs.component';
import { DialogComponent } from '../../ui/dialog/dialog.component';
import { ButtonComponent } from '../../ui/button/button.component';
import { ComponentLoaderService } from '../../../core/services/component-loader/component-loader.service';
import { InstallationWrapComponent } from '../../shared/instllation-wrap/installation-wrap.component';
import { InstallationStepComponent } from '../../shared/installation-step/installation-step.component';
import { FlashLinkComponent } from '../../shared/link/flash-link.component';

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
      <ng-container slot="ts">
        {{ currentTs }}
      </ng-container>
    </flash-preview-code-tabs>
    <flash-installation-wrap>
      <flash-installation-step [stepNumber]="2">
        <flash-link
          href="https://github.com/veera20k/flash-ui/blob/main/src/app/components/ui/dialog/dialog.component.ts"
          name="dialog.component.ts"
          type="components"
          slot="title"
        ></flash-link>
      </flash-installation-step>
      <flash-installation-step [stepNumber]="3">
        <flash-link
          href="https://github.com/veera20k/flash-ui/blob/main/src/app/core/services/component-loader/component-loader.service.ts"
          name="component-loader.service.ts"
          type="services"
          slot="title"
        ></flash-link>
      </flash-installation-step>
      <flash-installation-step [stepNumber]="4">
        <flash-link
          href="https://github.com/veera20k/flash-ui/blob/main/src/app/core/directives/click-outside.directive.ts"
          name="click-outside.directive.ts"
          type="directives"
          slot="title"
        ></flash-link>
      </flash-installation-step>
      <flash-installation-step [stepNumber]="5" [code]="animation">
        <code slot="title"> Update you tailwind.config.js file. </code>
      </flash-installation-step>
    </flash-installation-wrap>
  `,
  imports: [
    PageHeaderComponent,
    PreviewCodeTabsComponent,
    DialogComponent,
    ButtonComponent,
    InstallationWrapComponent,
    InstallationStepComponent,
    FlashLinkComponent,
  ],
})
export class DialogPageComponent {
  private cmptLoaderService = inject(ComponentLoaderService);

  open(event: MouseEvent, dialogRef: TemplateRef<unknown>) {
    this.cmptLoaderService.open(event, dialogRef);
  }

  currentTs = `
  import { Component, inject, TemplateRef } from '@angular/core';
  import { DialogComponent } from '../../ui/dialog/dialog.component';
  import { ButtonComponent } from '../../ui/button/button.component';
  import { ComponentLoaderService } from '../../../core/services/component-loader/component-loader.service';

  @Component({
    selector: 'app-dialog-demo',
    standalone: true,
    template: \`
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
      </flash-preview-code-tabs>
    \`,
    imports: [
      DialogComponent,
      ButtonComponent,
    ],
  })
  export class DialogDemoComponent {
    private cmptLoaderService = inject(ComponentLoaderService);

    open(event: MouseEvent, dialogRef: TemplateRef<unknown>) {
      this.cmptLoaderService.open(event, dialogRef);
    }
  }`;

  animation = `
    keyframes: {
      "scale-in": {
        "0%": {
          transform: "translate(-50%, -50%) scale(0.9)",
          opacity: "0.8",
        },
        "100%": { transform: "translate(-50%, -50%) scale(1)", opacity: "1" },
      },
    },
    animation: {
      "scale-in": "scale-in 0.2s ease-in-out",
    }`;
}
