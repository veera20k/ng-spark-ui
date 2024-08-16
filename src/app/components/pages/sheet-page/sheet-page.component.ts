import { Component } from '@angular/core';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { PreviewCodeTabsComponent } from '../../shared/preview-code-tabs/preview-code-tabs.component';
import { SheetComponent } from '../../ui/sheet/sheet.component';
import { ButtonComponent } from '../../ui/button/button.component';
import { InstallationWrapComponent } from "../../shared/instllation-wrap/installation-wrap.component";
import { InstallationStepComponent } from "../../shared/installation-step/installation-step.component";

@Component({
  selector: 'flash-sheet-page',
  standalone: true,
  template: `
    <flash-page-header
      title="Sheet"
      description="A sheet is a non-modal dialog that appears when the user interacts with an element."
    ></flash-page-header>
    <flash-preview-code-tabs>
      <div class="grid grid-cols-2 gap-4" slot="preview">
        <flash-sheet side="left">
          <flash-button slot="trigger" variant="outlined">Left</flash-button>
          <ng-container slot="close">&#x2716;</ng-container>
          <div slot="content" class="w-[300px] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            mollitia repudiandae dolore debitis. Sed laudantium necessitatibus
            cumque labore at quos nostrum sapiente doloribus laboriosam
            recusandae hic, quidem consequatur possimus. Cupiditate.
          </div>
        </flash-sheet>
        <flash-sheet side="right">
          <flash-button slot="trigger" variant="outlined">Right</flash-button>
          <ng-container slot="close">&#x2716;</ng-container>
          <div slot="content" class="w-[300px] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            mollitia repudiandae dolore debitis. Sed laudantium necessitatibus
            cumque labore at quos nostrum sapiente doloribus laboriosam
            recusandae hic, quidem consequatur possimus. Cupiditate.
          </div>
        </flash-sheet>
        <flash-sheet side="top">
          <flash-button slot="trigger" variant="outlined">Top</flash-button>
          <ng-container slot="close">&#x2716;</ng-container>
          <div slot="content" class="w-[300px] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            mollitia repudiandae dolore debitis. Sed laudantium necessitatibus
            cumque labore at quos nostrum sapiente doloribus laboriosam
            recusandae hic, quidem consequatur possimus. Cupiditate.
          </div>
        </flash-sheet>
        <flash-sheet side="bottom">
          <flash-button slot="trigger" variant="outlined">Bottom</flash-button>
          <ng-container slot="close">&#x2716;</ng-container>
          <div slot="content" class="w-[300px] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            mollitia repudiandae dolore debitis. Sed laudantium necessitatibus
            cumque labore at quos nostrum sapiente doloribus laboriosam
            recusandae hic, quidem consequatur possimus. Cupiditate.
          </div>
        </flash-sheet>
      </div>
      <ng-container slot="ts">{{currentTs}}</ng-container>
    </flash-preview-code-tabs>
    <flash-installation-wrap />
    <flash-installation-step [stepNumber]="2" [code]="component">
      <code slot="title"
        >Create file <span class="underline">sheet.component.ts</span> and
        copy and paste the following code into your components folder.</code
      >
    </flash-installation-step>
  `,
  imports: [
    PageHeaderComponent,
    PreviewCodeTabsComponent,
    SheetComponent,
    ButtonComponent,
    InstallationWrapComponent,
    InstallationStepComponent
],
})
export class SheetPageComponent {
  currentTs = `
  import { Component } from '@angular/core';
  import { SheetComponent } from '../../ui/sheet/sheet.component';
  import { ButtonComponent } from '../../ui/button/button.component';

  @Component({
    selector: 'flash-sheet',
    standalone: true,
    template: \`
        <div class="grid grid-cols-2 gap-4" slot="preview">
          <flash-sheet side="left">
            <flash-button slot="trigger" variant="outlined">Left</flash-button>
            <ng-container slot="close">&#x2716;</ng-container>
            <div slot="content" class="w-[300px] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              mollitia repudiandae dolore debitis. Sed laudantium necessitatibus
              cumque labore at quos nostrum sapiente doloribus laboriosam
              recusandae hic, quidem consequatur possimus. Cupiditate.
            </div>
          </flash-sheet>
          <flash-sheet side="right">
            <flash-button slot="trigger" variant="outlined">Right</flash-button>
            <ng-container slot="close">&#x2716;</ng-container>
            <div slot="content" class="w-[300px] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              mollitia repudiandae dolore debitis. Sed laudantium necessitatibus
              cumque labore at quos nostrum sapiente doloribus laboriosam
              recusandae hic, quidem consequatur possimus. Cupiditate.
            </div>
          </flash-sheet>
          <flash-sheet side="top">
            <flash-button slot="trigger" variant="outlined">Top</flash-button>
            <ng-container slot="close">&#x2716;</ng-container>
            <div slot="content" class="w-[300px] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              mollitia repudiandae dolore debitis. Sed laudantium necessitatibus
              cumque labore at quos nostrum sapiente doloribus laboriosam
              recusandae hic, quidem consequatur possimus. Cupiditate.
            </div>
          </flash-sheet>
          <flash-sheet side="bottom">
            <flash-button slot="trigger" variant="outlined">Bottom</flash-button>
            <ng-container slot="close">&#x2716;</ng-container>
            <div slot="content" class="w-[300px] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              mollitia repudiandae dolore debitis. Sed laudantium necessitatibus
              cumque labore at quos nostrum sapiente doloribus laboriosam
              recusandae hic, quidem consequatur possimus. Cupiditate.
            </div>
          </flash-sheet>
        </div>
    \`,
    imports: [
      SheetComponent,
      ButtonComponent
    ],
  })
  export class SheetComponent {}`;

  component = `
  import { Component, computed, inject, input, TemplateRef } from '@angular/core';
  import { ComponentLoaderService } from '../../../core/services/component-loader/component-loader.service';
  import { NgClass } from '@angular/common';
  import { Side } from '../../../core/models/common.model';

  @Component({
    selector: 'flash-sheet',
    standalone: true,
    template: \`
      <div (click)="openSheet($event, sheetRef)">
        <ng-content select="[slot=trigger]"> </ng-content>
      </div>
      <ng-template #sheetRef>
        <div
          class="bg-white p-3 absolute"
          [ngClass]="{
            'animate-slide-left-in left-0 w-fit h-screen': side() === 'left',
            'animate-slide-right-in right-0 w-fit h-full': side() === 'right',
            'animate-slide-top-in top-0 w-screen h-fit': side() === 'top',
            'animate-slide-bottom-in bottom-0 w-full h-fit': side() === 'bottom'
          }"
        >
          <span
            class="absolute top-1.5 right-2 cursor-pointer"
            (click)="closeSheet()"
          >
            <ng-content select="[slot=close]"></ng-content>
          </span>
          <ng-content select="[slot=content]"></ng-content>
        </div>
      </ng-template>
    \`,
    imports: [NgClass]
  })
  export class SheetComponent {
    side = input<Side>('left');
    cmptLoaderService = inject(ComponentLoaderService);

    openSheet(event: MouseEvent, sheetRef: TemplateRef<unknown>) {
      this.cmptLoaderService.open(event, sheetRef);
    }

    closeSheet() {
      this.cmptLoaderService.close();
    }
  }`;
}
