import { Component } from '@angular/core';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { PreviewCodeTabsComponent } from '../../shared/preview-code-tabs/preview-code-tabs.component';
import { CheckboxComponent } from '../../ui/checkbox/checkbox.component';
import { InstallationStepComponent } from '../../shared/installation-step/installation-step.component';
import { InstallationWrapComponent } from '../../shared/instllation-wrap/installation-wrap.component';
import { SparkLinkComponent } from '../../shared/link/spark-link.component';

@Component({
    selector: 'spark-checkbox-page',
    template: `
    <spark-page-header
      title="Checkbox"
      description="A checkbox is a graphical control element that allows the user to select one or more items from a list of options."
    ></spark-page-header>
    <spark-preview-code-tabs>
      <spark-checkbox slot="preview" htmlFor="sample">
        <span slot="label">Checkbox</span>
      </spark-checkbox>
      <ng-container slot="ts">
        {{ currentTs }}
      </ng-container>
    </spark-preview-code-tabs>
    <spark-installation-wrap>
      <spark-installation-step [stepNumber]="2">
        <spark-link
          href="https://github.com/veera20k/spark-ui/blob/main/src/app/components/ui/checkbox/checkbox.component.ts"
          name="checkbox.component.ts"
          type="components"
          slot="title"
        ></spark-link>
      </spark-installation-step>
    </spark-installation-wrap>
  `,
    imports: [
        PageHeaderComponent,
        PreviewCodeTabsComponent,
        CheckboxComponent,
        InstallationStepComponent,
        InstallationWrapComponent,
        SparkLinkComponent,
    ]
})
export class CheckboxPageComponent {
  currentTs = `
  import { Component } from "@angular/core";
  import { CheckboxComponent } from "../../ui/checkbox/checkbox.component";

  @Component({
    selector: 'spark-checkbox-demo',
    standalone: true,
    template: \`
      <spark-checkbox slot="preview" htmlFor="sample">
        <span slot="label">Checkbox</span>
      </spark-checkbox>
    \`,
    imports: [CheckboxComponent],
  })
  export class CheckboxDemoComponent {
  }`;

}
