import { Component } from '@angular/core';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { PreviewCodeTabsComponent } from '../../shared/preview-code-tabs/preview-code-tabs.component';
import { AccordionItemComponent } from '../../ui/accoridon-item/accordion-item.component';
import { AccordionDirective } from '../../../core/directives/accordion.directive';
import { BadgeComponent } from '../../ui/badge/badge.component';
import { InstallationStepComponent } from '../../shared/installation-step/installation-step.component';
import { InstallationWrapComponent } from '../../shared/instllation-wrap/installation-wrap.component';
import { FlashLinkComponent } from '../../shared/link/flash-link.component';

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
        {{ getAccCode('single') }}
      </ng-container>
    </flash-preview-code-tabs>
    <flash-installation-wrap>
      <flash-installation-step [stepNumber]="2">
        <flash-link
          href="https://github.com/veera20k/flash-ui/blob/main/src/app/components/ui/accoridon-item/accordion-item.component.ts"
          name="accordion-item.component.ts"
          type="components"
          slot="title"
        ></flash-link>
      </flash-installation-step>
      <flash-installation-step [stepNumber]="3">
        <flash-link
          href="https://github.com/veera20k/flash-ui/blob/main/src/app/core/directives/accordion.directive.ts"
          name="accordion.directive.ts"
          type="directives"
          slot="title"
        ></flash-link>
      </flash-installation-step>
      <flash-installation-step
        [stepNumber]="4"
        [code]="accordionCss"
        [language]="'css'"
      >
        <code slot="title"
          >Update your <span class="underline">styles.css</span> file.</code
        >
      </flash-installation-step>
    </flash-installation-wrap>
    <br />
    <h2 class="my-1 text-xl font-bold">Examples</h2>
    <br />
    <h2 class="text-lg">Multiple Accordion</h2>
    <br />
    <flash-preview-code-tabs>
      <div flashAccordion mode="multiple" slot="preview">
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
        {{ getAccCode('multiple') }}
      </ng-container>
    </flash-preview-code-tabs>
  `,
  imports: [
    PageHeaderComponent,
    PreviewCodeTabsComponent,
    AccordionItemComponent,
    AccordionDirective,
    InstallationStepComponent,
    BadgeComponent,
    InstallationWrapComponent,
    FlashLinkComponent,
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
    <div flashAccordion mode="${mode}">
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
