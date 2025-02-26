import { Component } from '@angular/core';
import { PreviewCodeTabsComponent } from '../../shared/preview-code-tabs/preview-code-tabs.component';
import { SwitchComponent } from '../../ui/switch/switch.component';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { InstallationWrapComponent } from '../../shared/instllation-wrap/installation-wrap.component';
import { InstallationStepComponent } from '../../shared/installation-step/installation-step.component';
import { SparkLinkComponent } from '../../shared/link/spark-link.component';

@Component({
    selector: 'spark-switch-page',
    template: `
    <spark-page-header
      title="Switch"
      description="A switch is a toggle that allows the user to turn an option on or off."
    ></spark-page-header>
    <spark-preview-code-tabs>
      <spark-switch slot="preview"> Switch </spark-switch>
      <ng-container slot="ts">
        {{ currentTs }}
      </ng-container>
    </spark-preview-code-tabs>
    <spark-installation-wrap>
      <spark-installation-step [stepNumber]="2">
        <spark-link
          href="https://github.com/veera20k/spark-ui/blob/main/src/app/components/ui/switch/switch.component.ts"
          name="switch.component.ts"
          type="components"
          slot="title"
        ></spark-link>
      </spark-installation-step>
    </spark-installation-wrap>
  `,
    imports: [
        PageHeaderComponent,
        PreviewCodeTabsComponent,
        SwitchComponent,
        InstallationWrapComponent,
        InstallationStepComponent,
        SparkLinkComponent,
    ]
})
export class SwitchPageComponent {
  currentTs = `
  import { Component } from '@angular/core';
  import { SwitchComponent } from '../../ui/switch/switch.component';

  @Component({
    selector: 'spark-switch-demo',
    standalone: true,
    template: \`
      <spark-switch> Switch </spark-switch>
    \`,
    imports: [
      SwitchComponent,
    ],
  })
  export class SwitchDemoComponent {}`;
}
