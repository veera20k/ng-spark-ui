import { Component } from '@angular/core';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { PreviewCodeTabsComponent } from '../../shared/preview-code-tabs/preview-code-tabs.component';
import { AccordionItemComponent } from '../../ui/accoridon-item/accordion-item.component';
import { AccordionDirective } from '../../../core/directives/accordion.directive';
import { BadgeComponent } from '../../ui/badge/badge.component';
import { InstallationStepComponent } from '../../shared/installation-step/installation-step.component';
import { InstallationWrapComponent } from '../../shared/instllation-wrap/installation-wrap.component';
import { SparkLinkComponent } from '../../shared/link/spark-link.component';

@Component({
  selector: 'spark-accordion-page',
  standalone: true,
  template: `
    <spark-page-header
      title="Accordion"
      description="The Accordion component organizes content into expandable sections, allowing users to toggle visibility by clicking on headers. It supports multiple or single item expansion"
    ></spark-page-header>
    <spark-preview-code-tabs>
      <div sparkAccordion mode="single" slot="preview">
        <spark-accordion-item>
          <span slot="trigger"> Is it accessible? </span>
          <span slot="content">
            Yes. It adheres to the WAI-ARIA design pattern.
          </span>
        </spark-accordion-item>
        <spark-accordion-item>
          <span slot="trigger"> Is it accessible? </span>
          <span slot="content">
            Yes. It adheres to the WAI-ARIA design pattern.
          </span>
        </spark-accordion-item>
        <spark-accordion-item>
          <span slot="trigger"> Is it accessible? </span>
          <span slot="content">
            Yes. It adheres to the WAI-ARIA design pattern.
          </span>
        </spark-accordion-item>
      </div>
      <ng-container slot="Ts">
        {{ getAccCode('single') }}
      </ng-container>
    </spark-preview-code-tabs>
    <spark-installation-wrap>
      <spark-installation-step [stepNumber]="2">
        <spark-link
          href="https://github.com/veera20k/spark-ui/blob/main/src/app/components/ui/accoridon-item/accordion-item.component.ts"
          name="accordion-item.component.ts"
          type="components"
          slot="title"
        ></spark-link>
      </spark-installation-step>
      <spark-installation-step [stepNumber]="3">
        <spark-link
          href="https://github.com/veera20k/spark-ui/blob/main/src/app/core/directives/accordion.directive.ts"
          name="accordion.directive.ts"
          type="directives"
          slot="title"
        ></spark-link>
      </spark-installation-step>
      <spark-installation-step
        [stepNumber]="4"
        [code]="accordionCss"
        [language]="'css'"
      >
        <code slot="title"
          >Update your <span class="underline">styles.css</span> file.</code
        >
      </spark-installation-step>
    </spark-installation-wrap>
    <br />
    <h2 class="my-1 text-xl font-bold">Examples</h2>
    <br />
    <h2 class="text-lg">Multiple Accordion</h2>
    <br />
    <spark-preview-code-tabs>
      <div sparkAccordion mode="multiple" slot="preview">
        <spark-accordion-item>
          <span slot="trigger"> Is it accessible? </span>
          <span slot="content">
            Yes. It adheres to the WAI-ARIA design pattern.
          </span>
        </spark-accordion-item>
        <spark-accordion-item>
          <span slot="trigger"> Is it accessible? </span>
          <span slot="content">
            Yes. It adheres to the WAI-ARIA design pattern.
          </span>
        </spark-accordion-item>
        <spark-accordion-item>
          <span slot="trigger"> Is it accessible? </span>
          <span slot="content">
            Yes. It adheres to the WAI-ARIA design pattern.
          </span>
        </spark-accordion-item>
      </div>
      <ng-container slot="Ts">
        {{ getAccCode('multiple') }}
      </ng-container>
    </spark-preview-code-tabs>
  `,
  imports: [
    PageHeaderComponent,
    PreviewCodeTabsComponent,
    AccordionItemComponent,
    AccordionDirective,
    InstallationStepComponent,
    BadgeComponent,
    InstallationWrapComponent,
    SparkLinkComponent,
  ],
})
export class AccordionPageComponent {
  getAccCode = (mode: string) => {
    return `
    import { Component } from '@angular/core';
    import { AccordionItemComponent } from './accordion-item/accordion-item.component';
    import { AccordionDirective } from '../../../core/directives/accordion.directive';

    @Component({
    selector: 'app-accordion-demo',
    standalone: true,
    templateUrl: '
    <div sparkAccordion mode="${mode}">
      <spark-accordion-item>
        <span slot="trigger"> Is it accessible? </span>
        <span slot="content">
          Yes. It adheres to the WAI-ARIA design pattern.
        </span>
      </spark-accordion-item>
      <spark-accordion-item>
        <span slot="trigger"> Is it accessible? </span>
        <span slot="content">
          Yes. It adheres to the WAI-ARIA design pattern.
        </span>
      </spark-accordion-item>
      <spark-accordion-item>
        <span slot="trigger"> Is it accessible? </span>
        <span slot="content">
          Yes. It adheres to the WAI-ARIA design pattern.
        </span>
      </spark-accordion-item>
    </div>',
    imports: [
        AccordionItemComponent,
        AccordionDirective,
      ]
    })
    export class AccordionDemoComponent {}`;
  };

  accordionCss = `
  .accordion-body {
    display: grid;
    grid-template-rows: 0fr;
    transition: 250ms grid-template-rows ease;
  }
  .accordion-open {
    grid-template-rows: 1fr;
  }`;
}
