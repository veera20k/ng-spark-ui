import { Component } from '@angular/core';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { PopoverComponent } from '../../ui/popover/popover.component';
import { ButtonComponent } from '../../ui/button/button.component';
import { PreviewCodeTabsComponent } from '../../shared/preview-code-tabs/preview-code-tabs.component';
import { InstallationWrapComponent } from "../../shared/instllation-wrap/installation-wrap.component";
import { InstallationStepComponent } from "../../shared/installation-step/installation-step.component";

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
      <ng-container slot="ts">
        {{ currentTs }}
      </ng-container>
    </flash-preview-code-tabs>
    <flash-installation-wrap />
    <flash-installation-step [stepNumber]="2" [code]="component">
      <code slot="title"
        >Create file <span class="underline">popover.component.ts</span> and
        copy and paste the following code into your components folder.</code
      >
    </flash-installation-step>
  `,
  imports: [
    PageHeaderComponent,
    PopoverComponent,
    ButtonComponent,
    PreviewCodeTabsComponent,
    InstallationWrapComponent,
    InstallationStepComponent,
],
})
export class PopoverPageComponent {

  currentTs = `
  import { Component } from '@angular/core';
  import { PopoverComponent } from '../../ui/popover/popover.component';
  import { ButtonComponent } from '../../ui/button/button.component';

  @Component({
    selector: 'flash-popover',
    standalone: true,
    template: \`
      <flash-popover slot="preview" side="bottom" [static]="true">
        <flash-button slot="trigger">Click me</flash-button>
        <div slot="content" class="bg-white p-4 rounded-lg shadow-md w-[300px] m-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus mollitia repudiandae dolore debitis. Sed laudantium necessitatibus cumque labore at quos nostrum sapiente doloribus laboriosam recusandae hic, quidem consequatur possimus. Cupiditate. 
        </div>
      </flash-popover>
    \`,
    imports: [
      PopoverComponent,
      ButtonComponent,
    ],
  })
  export class PopoverComponent {}`;

component = `
  import {
    Component,
    inject,
    input,
    signal,
    TemplateRef,
    ViewChild,
  } from '@angular/core';
  import { ComponentLoaderService } from '../../../core/services/component-loader/component-loader.service';
  import { NgStyle } from '@angular/common';
  import { Side } from '../../../core/models/common.model';

  @Component({
    selector: 'flash-popover',
    standalone: true,
    template: \`
      <div
        (mouseover)="hoverToggle() && !alwaysOpen() && toggle($event)"
        (mouseout)="hoverToggle() && cmptLoaderService.close()"
        (click)="!alwaysOpen() && toggle($event)"
        id="flash-popover-trigger"
      >
        <ng-content select="[slot=trigger]" />
      </div>
      <ng-template #template>
        <div
          id="flash-popover-content"
          [ngStyle]="{
            'inset-area': side(),
            'position-try-options': static() ? 'unset' : 'flip-block'
          }"
        >
          <ng-content select="[slot=content]" />
        </div>
      </ng-template>
    \`,
    styles: [
      \`
        #flash-popover-trigger {
          anchor-name: --flash-popover-anchor;
        }
        #flash-popover-content {
          position: absolute;
          position-anchor: --flash-popover-anchor;
        }
      \`,
    ],
    imports: [NgStyle],
  })
  export class PopoverComponent {
    cmptLoaderService = inject(ComponentLoaderService);
    isOpen = signal(false);
    alwaysOpen = input(false);
    side = input<Side>('top');
    static = input(false);
    hoverToggle = input(false);
    disableScroll = input(false);

    @ViewChild('template', { static: true })
    popoverTemplate!: TemplateRef<unknown>;

    ngOnInit(): void {
      if (this.alwaysOpen()) {
        this.cmptLoaderService.open(
          new MouseEvent('click'),
          this.popoverTemplate,
          {
            backdrop: false,
            closeOnBackdropClick: true,
            disableScroll: this.disableScroll(),
          }
        );
      }
    }

    toggle(event: MouseEvent) {
      if (!this.isOpen()) {
        this.isOpen.set(true);
        this.cmptLoaderService.open(event, this.popoverTemplate, {
          backdrop: false,
          closeOnBackdropClick: true,
          disableScroll: this.disableScroll(),
          afterClosed: () => {
            this.isOpen.set(false);
          },
        });
      } else {
        this.isOpen.set(false);
        this.cmptLoaderService.close();
      }
    }
  }`;
}
