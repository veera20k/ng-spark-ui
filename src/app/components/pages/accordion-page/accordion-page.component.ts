import { Component } from '@angular/core';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { PreviewCodeTabsComponent } from '../../shared/preview-code-tabs/preview-code-tabs.component';
import { AccordionItemComponent } from '../../ui/accoridon-item/accordion-item.component';
import { AccordionDirective } from '../../../core/directives/accordion.directive';
import { BadgeComponent } from '../../ui/badge/badge.component';
import { InstallationStepComponent } from '../../shared/installation-step/installation-step.component';
import { InstallationWrapComponent } from '../../shared/instllation-wrap/installation-wrap.component';

@Component({
  selector: 'flash-accordion-page',
  standalone: true,
  template: `
    <flash-page-header
      title="Accordion"
      description="The Accordion component organizes content into expandable sections, allowing users to toggle visibility by clicking on headers. It supports multiple or single item expansion"
    ></flash-page-header>
    <flash-preview-code-tabs>
      <div flashAccordion mode="single" slot="preview">
        <flash-accordion-item>
          <span slot="trigger"> Is it accessible? </span>
          <span slot="content">
            Yes. It adheres to the WAI-ARIA design pattern.
          </span>
        </flash-accordion-item>
        <flash-accordion-item>
          <span slot="trigger"> Is it accessible? </span>
          <span slot="content">
            Yes. It adheres to the WAI-ARIA design pattern.
          </span>
        </flash-accordion-item>
        <flash-accordion-item>
          <span slot="trigger"> Is it accessible? </span>
          <span slot="content">
            Yes. It adheres to the WAI-ARIA design pattern.
          </span>
        </flash-accordion-item>
      </div>
      <ng-container slot="Ts">
        {{ currentTs }}
      </ng-container>
    </flash-preview-code-tabs>
    <flash-installation-wrap >
    <flash-installation-step [stepNumber]="2">
      <code slot="title"
        >Copy accordion-item.component.ts
        <a
          class="hover:underline text-blue-500"
          href="https://github.com/veera20k/flash-ui/blob/main/src/app/components/ui/accoridon-item/accordion-item.component.ts"
          target="_blank"
          >here</a
        >
        and copy and paste the following code into your components folder.</code
      >
    </flash-installation-step>
    <flash-installation-step [stepNumber]="3">
    <code slot="title"
        >Copy accordion.directive.ts
        <a
          class="hover:underline text-blue-500"
          href="https://github.com/veera20k/flash-ui/blob/main/src/app/core/directives/accordion.directive.ts"
          target="_blank"
          >here</a
        >
        and copy and paste the following code into your directives folder.</code
      >
    </flash-installation-step>
    <flash-installation-step
      [stepNumber]="4"
      [code]="accordionCss"
      [language]="'css'"
    >
      <code slot="title"
        >Copy and past this css into your
        <span class="underline">styles.css</span> file.</code
      >
    </flash-installation-step>
  </flash-installation-wrap>
  `,
  imports: [
    PageHeaderComponent,
    PreviewCodeTabsComponent,
    AccordionItemComponent,
    AccordionDirective,
    InstallationStepComponent,
    BadgeComponent,
    InstallationWrapComponent,
  ],
})
export class AccordionPageComponent {
  currentTs = `
    // accordion-demo.component.ts
    import { Component } from '@angular/core';
    import { AccordionItemComponent } from './accordion-item/accordion-item.component';
    import { AccordionDirective } from '../../../core/directives/accordion.directive';

    @Component({
    selector: 'app-accordion-demo',
    standalone: true,
    templateUrl: '
    <div flashAccordion mode="single">
      <flash-accordion-item>
        <span slot="trigger"> Is it accessible? </span>
        <span slot="content">
          Yes. It adheres to the WAI-ARIA design pattern.
        </span>
      </flash-accordion-item>
      <flash-accordion-item>
        <span slot="trigger"> Is it accessible? </span>
        <span slot="content">
          Yes. It adheres to the WAI-ARIA design pattern.
        </span>
      </flash-accordion-item>
      <flash-accordion-item>
        <span slot="trigger"> Is it accessible? </span>
        <span slot="content">
          Yes. It adheres to the WAI-ARIA design pattern.
        </span>
      </flash-accordion-item>
    </div>',
    imports: [
        AccordionItemComponent,
        AccordionDirective,
      ]
    })
    export class AccordionComponent {}`;

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
