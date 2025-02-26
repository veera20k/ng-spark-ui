import { Component } from '@angular/core';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { PreviewCodeTabsComponent } from '../../shared/preview-code-tabs/preview-code-tabs.component';
import { SelectComponent } from '../../ui/select/select.component';
import { InstallationWrapComponent } from "../../shared/instllation-wrap/installation-wrap.component";
import { InstallationStepComponent } from "../../shared/installation-step/installation-step.component";
import { SparkLinkComponent } from "../../shared/link/spark-link.component";

@Component({
    selector: 'spark-select-page',
    template: `
    <spark-page-header
      title="Input"
      description="An input is a component that allows the user to enter and edit text."
    ></spark-page-header>
    <spark-preview-code-tabs>
      <spark-select
        slot="preview"
        [items]="[
          { label: 'Item 1', value: '1' },
          { label: 'Item 2', value: '2' },
          { label: 'Item 3', value: '3' },
          { label: 'Item 4', value: '4' },
          { label: 'Item 5', value: '5' }
        ]"
        type="single"
      >
        <div slot="label" class="pr-24">Select...</div>
      </spark-select>
      <ng-container slot="ts">{{currentTs}}</ng-container>
    </spark-preview-code-tabs>
    <spark-installation-wrap>
    <spark-installation-step [stepNumber]="2">
        <spark-link
          href="https://github.com/veera20k/spark-ui/blob/main/src/app/components/ui/select/select.component.ts"
          name="select.component.ts"
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
    imports: [PageHeaderComponent, PreviewCodeTabsComponent, SelectComponent, InstallationWrapComponent, InstallationStepComponent, SparkLinkComponent]
})
export class SelectPageComponent {

  currentTs = `
  import { Component } from '@angular/core';
  import { SelectComponent } from '../../ui/select/select.component';

  @Component({
    selector: 'spark-select-demo',
    standalone: true,
    template: \`
      <spark-select
        [items]="[
          { label: 'Item 1', value: '1' },
          { label: 'Item 2', value: '2' },
          { label: 'Item 3', value: '3' },
          { label: 'Item 4', value: '4' },
          { label: 'Item 5', value: '5' }
        ]"
        type="single"
      >
        <div slot="label" class="pr-24">Select...</div>
      </spark-select>
    \`,
    imports: [SelectComponent],
  })
  export class SelectDemoComponent {}`;

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
