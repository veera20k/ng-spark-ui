import { Component } from '@angular/core';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { PreviewCodeTabsComponent } from '../../shared/preview-code-tabs/preview-code-tabs.component';
import { ButtonComponent } from '../../ui/button/button.component';
import { TooltipComponent } from '../../ui/tooltip/tooltip.component';
import { InstallationWrapComponent } from '../../shared/instllation-wrap/installation-wrap.component';
import { InstallationStepComponent } from '../../shared/installation-step/installation-step.component';
import { SparkLinkComponent } from '../../shared/link/spark-link.component';
import { NotesComponent } from "../../shared/notes/notes.component";

@Component({
  selector: 'spark-tooltip-page',
  standalone: true,
  template: `
    <spark-page-header
      title="Sheet"
      description="A sheet is a non-modal dialog that appears when the user interacts with an element."
    ></spark-page-header>
    <spark-preview-code-tabs>
      <spark-tooltip side="top" slot="preview">
        <spark-button slot="trigger">Button</spark-button>
        <span slot="content" class="text-xs"
        >This is button tooltip.</span
        >
      </spark-tooltip>
      <ng-container slot="ts">
        {{ currentTs }}
      </ng-container>
    </spark-preview-code-tabs>
    <spark-installation-wrap>
      <spark-installation-step [stepNumber]="2">
        <spark-link
          href="https://github.com/veera20k/spark-ui/blob/main/src/app/components/ui/tooltip/tooltip.component.ts"
          name="tooltip.component.ts"
          type="components"
          slot="title"
        ></spark-link>
      </spark-installation-step>
    </spark-installation-wrap>
    <spark-notes>
      <p>This componet uses anchor element to position itself. It is not supported in IE11. please check the browser support.</p>
    </spark-notes>
  `,
  imports: [
    PageHeaderComponent,
    PreviewCodeTabsComponent,
    ButtonComponent,
    TooltipComponent,
    InstallationWrapComponent,
    InstallationStepComponent,
    SparkLinkComponent,
    NotesComponent
],
})
export class TooltipPageComponent {
  currentTs = `
  import { Component } from '@angular/core';
  import { TooltipComponent } from '../../ui/tooltip/tooltip.component';

  @Component({
    selector: 'spark-tooltip-demo',
    standalone: true,
    template: \`
      <spark-tooltip side="top">
        <spark-button slot="trigger">Button</spark-button>
        <span slot="content" class="text-xs">This is button tooltip Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident officia distinctio quasi corrupti non expedita magnam, debitis culpa quisquam reiciendis ab sit quos atque placeat labore delectus est commodi pariatur.</span>
      </spark-tooltip>
    \`,
    imports: [
      TooltipComponent,
      ButtonComponent,
    ],
  })
  export class TooltipDemoComponent {}`;
}
