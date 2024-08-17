import { Component } from '@angular/core';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { PreviewCodeTabsComponent } from '../../shared/preview-code-tabs/preview-code-tabs.component';
import { SheetComponent } from '../../ui/sheet/sheet.component';
import { ButtonComponent } from '../../ui/button/button.component';
import { InstallationWrapComponent } from '../../shared/instllation-wrap/installation-wrap.component';
import { InstallationStepComponent } from '../../shared/installation-step/installation-step.component';
import { SparkLinkComponent } from "../../shared/link/spark-link.component";

@Component({
  selector: 'spark-sheet-page',
  standalone: true,
  template: `
    <spark-page-header
      title="Sheet"
      description="A sheet is a non-modal dialog that appears when the user interacts with an element."
    ></spark-page-header>
    <spark-preview-code-tabs>
      <div class="grid grid-cols-2 gap-4" slot="preview">
        <spark-sheet side="left">
          <spark-button slot="trigger" variant="outlined">Left</spark-button>
          <ng-container slot="close">&#x2716;</ng-container>
          <div slot="content" class="w-[300px] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            mollitia repudiandae dolore debitis. Sed laudantium necessitatibus
            cumque labore at quos nostrum sapiente doloribus laboriosam
            recusandae hic, quidem consequatur possimus. Cupiditate.
          </div>
        </spark-sheet>
        <spark-sheet side="right">
          <spark-button slot="trigger" variant="outlined">Right</spark-button>
          <ng-container slot="close">&#x2716;</ng-container>
          <div slot="content" class="w-[300px] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            mollitia repudiandae dolore debitis. Sed laudantium necessitatibus
            cumque labore at quos nostrum sapiente doloribus laboriosam
            recusandae hic, quidem consequatur possimus. Cupiditate.
          </div>
        </spark-sheet>
        <spark-sheet side="top">
          <spark-button slot="trigger" variant="outlined">Top</spark-button>
          <ng-container slot="close">&#x2716;</ng-container>
          <div slot="content" class="h-[150px] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            mollitia repudiandae dolore debitis. Sed laudantium necessitatibus
            cumque labore at quos nostrum sapiente doloribus laboriosam
            recusandae hic, quidem consequatur possimus. Cupiditate.
          </div>
        </spark-sheet>
        <spark-sheet side="bottom">
          <spark-button slot="trigger" variant="outlined">Bottom</spark-button>
          <ng-container slot="close">&#x2716;</ng-container>
          <div slot="content" class="h-[150px] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            mollitia repudiandae dolore debitis. Sed laudantium necessitatibus
            cumque labore at quos nostrum sapiente doloribus laboriosam
            recusandae hic, quidem consequatur possimus. Cupiditate.
          </div>
        </spark-sheet>
      </div>
      <ng-container slot="ts">{{ currentTs }}</ng-container>
    </spark-preview-code-tabs>
    <spark-installation-wrap>
      <spark-installation-step [stepNumber]="2">
        <spark-link
          href="https://github.com/veera20k/spark-ui/blob/main/src/app/components/ui/dialog/dialog.component.ts"
          name="dialog.component.ts"
          type="components"
          slot="title"
        ></spark-link>
      </spark-installation-step>
      <spark-installation-step [stepNumber]="3">
        <spark-link
          href="https://github.com/veera20k/spark-ui/blob/main/src/app/core/services/component-loader/component-loader.service.ts"
          name="component-loader.service.ts"
          type="services"
          slot="title"
        ></spark-link>
      </spark-installation-step>
      <spark-installation-step [stepNumber]="4">
        <spark-link
          href="https://github.com/veera20k/spark-ui/blob/main/src/app/core/directives/click-outside.directive.ts"
          name="click-outside.directive.ts"
          type="directives"
          slot="title"
        ></spark-link>
      </spark-installation-step>
      <spark-installation-step [stepNumber]="5" [code]="animation">
        <code slot="title"> Update you tailwind.config.js file. </code>
      </spark-installation-step>
    </spark-installation-wrap>
  `,
  imports: [
    PageHeaderComponent,
    PreviewCodeTabsComponent,
    SheetComponent,
    ButtonComponent,
    InstallationWrapComponent,
    InstallationStepComponent,
    SparkLinkComponent
],
})
export class SheetPageComponent {
  currentTs = `
  import { Component } from '@angular/core';
  import { SheetComponent } from '../../ui/sheet/sheet.component';
  import { ButtonComponent } from '../../ui/button/button.component';

  @Component({
    selector: 'spark-sheet-demo',
    standalone: true,
    template: \`
        <div class="grid grid-cols-2 gap-4" slot="preview">
          <spark-sheet side="left">
            <spark-button slot="trigger" variant="outlined">Left</spark-button>
            <ng-container slot="close">&#x2716;</ng-container>
            <div slot="content" class="w-[300px] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              mollitia repudiandae dolore debitis. Sed laudantium necessitatibus
              cumque labore at quos nostrum sapiente doloribus laboriosam
              recusandae hic, quidem consequatur possimus. Cupiditate.
            </div>
          </spark-sheet>
          <spark-sheet side="right">
            <spark-button slot="trigger" variant="outlined">Right</spark-button>
            <ng-container slot="close">&#x2716;</ng-container>
            <div slot="content" class="w-[300px] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              mollitia repudiandae dolore debitis. Sed laudantium necessitatibus
              cumque labore at quos nostrum sapiente doloribus laboriosam
              recusandae hic, quidem consequatur possimus. Cupiditate.
            </div>
          </spark-sheet>
          <spark-sheet side="top">
            <spark-button slot="trigger" variant="outlined">Top</spark-button>
            <ng-container slot="close">&#x2716;</ng-container>
            <div slot="content" class="w-[300px] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              mollitia repudiandae dolore debitis. Sed laudantium necessitatibus
              cumque labore at quos nostrum sapiente doloribus laboriosam
              recusandae hic, quidem consequatur possimus. Cupiditate.
            </div>
          </spark-sheet>
          <spark-sheet side="bottom">
            <spark-button slot="trigger" variant="outlined">Bottom</spark-button>
            <ng-container slot="close">&#x2716;</ng-container>
            <div slot="content" class="w-[300px] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              mollitia repudiandae dolore debitis. Sed laudantium necessitatibus
              cumque labore at quos nostrum sapiente doloribus laboriosam
              recusandae hic, quidem consequatur possimus. Cupiditate.
            </div>
          </spark-sheet>
        </div>
    \`,
    imports: [
      SheetComponent,
      ButtonComponent
    ],
  })
  export class SheetDemoComponent {}`;

  animation = `
   keyframes: {
    "slide-left-in": {
      "0%": {
        transform: "translateX(-100%)",
        opacity: "0.8",
      },
      "100%": {
        transform: "translateX(0)",
        opacity: "1",
      },
    },
    "slide-right-in": { 
      "0%": {
        transform: "translateX(100%)",
        opacity: "0.8",
      },
      "100%": {
        transform: "translateX(0)",
        opacity: "1",
      },
    },
    "slide-top-in": {
      "0%": {
        transform: "translateY(-100%)",
        opacity: "0.8",
      },
      "100%": {
        transform: "translateY(0)",
        opacity: "1",
      },
    },
    "slide-bottom-in": {
      "0%": {
        transform: "translateY(100%)",
        opacity: "0.8",
      },
      "100%": {
        transform: "translateY(0)",
        opacity: "1",
      },
    },
  },
  animation: {
    "slide-left-in": "slide-in('X', '-100%') 0.3s ease-in-out",
    "slide-right-in": "slide-in('X', '100%') 0.3s ease-in-out",
    "slide-top-in": "slide-in('Y', '-100%') 0.3s ease-in-out",
    "slide-bottom-in": "slide-in('Y', '100%') 0.3s ease-in-out",
    "slide-top-center-in": "slide-in('-50%', '-100%') 0.3s ease-in-out",
    "slide-bottom-center-in": "slide-in('-50%', '100%') 0.3s ease-in-out",
  }`;
}
