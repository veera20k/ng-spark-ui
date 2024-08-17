import { Component } from '@angular/core';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { PopoverComponent } from '../../ui/popover/popover.component';
import { ButtonComponent } from '../../ui/button/button.component';
import { PreviewCodeTabsComponent } from '../../shared/preview-code-tabs/preview-code-tabs.component';
import { InstallationWrapComponent } from '../../shared/instllation-wrap/installation-wrap.component';
import { InstallationStepComponent } from '../../shared/installation-step/installation-step.component';
import { SparkLinkComponent } from '../../shared/link/spark-link.component';
import { NotesComponent } from '../../shared/notes/notes.component';

@Component({
  selector: 'spark-popover-page',
  standalone: true,
  template: `
    <spark-page-header
      title="Popover"
      description="A popover is a non-modal dialog that appears when the user interacts with an element."
    ></spark-page-header>
    <spark-preview-code-tabs>
      <spark-popover slot="preview" side="bottom" [static]="true">
        <spark-button slot="trigger">Click me</spark-button>
        <div
          slot="content"
          class="bg-white p-4 rounded-lg shadow w-[300px] m-2"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          mollitia repudiandae dolore debitis. Sed laudantium necessitatibus
          cumque labore at quos nostrum sapiente doloribus laboriosam recusandae
          hic, quidem consequatur possimus. Cupiditate.
        </div>
      </spark-popover>
      <ng-container slot="ts">
        {{ currentTs }}
      </ng-container>
    </spark-preview-code-tabs>
    <spark-installation-wrap>
      <spark-installation-step [stepNumber]="2">
        <spark-link
          href="https://github.com/veera20k/spark-ui/blob/main/src/app/components/ui/popover/popover.component.ts"
          name="popover.component.ts"
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
    <spark-notes>
      <p>
        This componet uses anchor element to position itself. It is not
        supported in IE11. please check the browser support.
      </p>
    </spark-notes>
  `,
  imports: [
    PageHeaderComponent,
    PopoverComponent,
    ButtonComponent,
    PreviewCodeTabsComponent,
    InstallationWrapComponent,
    InstallationStepComponent,
    SparkLinkComponent,
    NotesComponent,
  ],
})
export class PopoverPageComponent {
  currentTs = `
  import { Component } from '@angular/core';
  import { PopoverComponent } from '../../ui/popover/popover.component';
  import { ButtonComponent } from '../../ui/button/button.component';

  @Component({
    selector: 'spark-popover-demo',
    standalone: true,
    template: \`
      <spark-popover slot="preview" side="bottom" [static]="true">
        <spark-button slot="trigger">Click me</spark-button>
        <div slot="content" class="bg-white p-4 rounded-lg shadow-md w-[300px] m-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus mollitia repudiandae dolore debitis. Sed laudantium necessitatibus cumque labore at quos nostrum sapiente doloribus laboriosam recusandae hic, quidem consequatur possimus. Cupiditate. 
        </div>
      </spark-popover>
    \`,
    imports: [
      PopoverComponent,
      ButtonComponent,
    ],
  })
  export class PopoverDemoComponent {}`;

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
    "popover-in": "popover-in 0.1s ease-in-out",
  }`;
}
