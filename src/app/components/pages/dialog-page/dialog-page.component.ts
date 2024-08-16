import { Component, inject, TemplateRef } from '@angular/core';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { PreviewCodeTabsComponent } from '../../shared/preview-code-tabs/preview-code-tabs.component';
import { DialogComponent } from '../../ui/dialog/dialog.component';
import { ButtonComponent } from '../../ui/button/button.component';
import { ComponentLoaderService } from '../../../core/services/component-loader/component-loader.service';
import { InstallationWrapComponent } from '../../shared/instllation-wrap/installation-wrap.component';
import { InstallationStepComponent } from '../../shared/installation-step/installation-step.component';
import { ComponentLoaderServiceHighlighterComponent } from '../../shared/component-loader-service-highlighter/component-loader-highlighter.component';
import { ClickoutsideHighlighterDirectiveComponent } from '../../shared/clickoutside-highlighter-directive/clickoutside-highlighter-directive.component';

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
    <flash-installation-wrap />
    <flash-installation-step [stepNumber]="2" [code]="component">
      <code slot="title"
        >Create file <span class="underline">modal-base.component.ts</span> and
        copy and paste the following code into your components folder.</code
      >
    </flash-installation-step>
    <flash-component-loader-service-highlighter />
    <flash-clickoutside-highlighter-directive />
  `,
  imports: [
    PageHeaderComponent,
    PreviewCodeTabsComponent,
    DialogComponent,
    ButtonComponent,
    InstallationWrapComponent,
    InstallationStepComponent,
    ComponentLoaderServiceHighlighterComponent,
    ClickoutsideHighlighterDirectiveComponent,
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
    selector: 'app-dialog',
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
  export class DialogComponent {
    private cmptLoaderService = inject(ComponentLoaderService);

    open(event: MouseEvent, dialogRef: TemplateRef<unknown>) {
      this.cmptLoaderService.open(event, dialogRef);
    }
  }`;

  component = `
  import { Component, ElementRef, HostListener, inject, Input, output, ViewContainerRef } from '@angular/core';
  import { DialogOptions } from '../../../../core/models/dialog-options.model';
  import { ClickOutsideDirective } from '../../../../core/directives/click-outside.directive';
  import { NgClass } from '@angular/common';

  @Component({
    selector: 'flash-modal-base',
    standalone: true,
    template: \`
    <div [ngClass]="{'bg-black/60 fixed inset-0 z-50 h-full w-full top-0 left-0': options.backdrop}">
    <div clickOutside (clickOutsideEvent)="options.closeOnBackdropClick && removeModal()" class="w-fit">
        <ng-content/>
      </div>
    </div>
    \`,
    imports: [ClickOutsideDirective, NgClass],
  })
  export class ModalBaseComponent {
    elementRef = inject(ElementRef);
    closeEvent = output();
    viewContainerRef = inject(ViewContainerRef);
    @Input() options: DialogOptions = {
      backdrop: true,
      closeOnBackdropClick: true,
      disableScroll: true,
    };

    @HostListener('document:keydown.escape', ['$event'])
    onKeydownHandler() {
      this.removeModal();
    }

    removeModal() {
      this.closeEvent.emit();
    }
  }`;
}
