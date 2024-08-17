import { Component } from '@angular/core';
import { PreviewCodeTabsComponent } from '../../shared/preview-code-tabs/preview-code-tabs.component';
import { RadioComponent } from '../../ui/radio/radio.component';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { InstallationWrapComponent } from '../../shared/instllation-wrap/installation-wrap.component';
import { InstallationStepComponent } from '../../shared/installation-step/installation-step.component';
import { SparkLinkComponent } from '../../shared/link/spark-link.component';

@Component({
  selector: 'spark-radio-page',
  standalone: true,
  template: `
    <spark-page-header
      title="Radio"
      description="A radio is a graphical control element that allows the user to select one option from a list of options."
    ></spark-page-header>
    <spark-preview-code-tabs>
      <div slot="preview" class="flex flex-col gap-2">
        <spark-radio htmlFor="radio-1" name="radio-group"> Label 1</spark-radio>
        <spark-radio htmlFor="radio-2" name="radio-group"> Label 2</spark-radio>
        <spark-radio htmlFor="radio-3" name="radio-group"> Label 3</spark-radio>
      </div>
      <ng-container slot="ts">
        {{ currentTs }}
      </ng-container>
    </spark-preview-code-tabs>
    <spark-installation-wrap>
      <spark-installation-step [stepNumber]="2">
        <spark-link
          href="https://github.com/veera20k/spark-ui/blob/main/src/app/components/ui/radio/radio.component.ts"
          name="radio.component.ts"
          type="components"
          slot="title"
        ></spark-link>
      </spark-installation-step>
    </spark-installation-wrap>
  `,
  imports: [
    PageHeaderComponent,
    PreviewCodeTabsComponent,
    RadioComponent,
    InstallationWrapComponent,
    InstallationStepComponent,
    SparkLinkComponent,
  ],
})
export class RadioPageComponent {
  currentTs = `
  import { Component } from '@angular/core';
  import { RadioComponent } from '../../ui/radio/radio.component';

  @Component({
    selector: 'spark-radio-demo',
    standalone: true,
    template: \`
      <div class="flex flex-col gap-2">
        <spark-radio htmlFor="radio-1" name="radio-group"> Label 1</spark-radio>
        <spark-radio htmlFor="radio-2" name="radio-group"> Label 2</spark-radio>
        <spark-radio htmlFor="radio-3" name="radio-group"> Label 3</spark-radio>
      </div>
    \`,
    imports: [
      RadioComponent,
    ],
  })
  export class RadioDemoComponent {}`;
}
