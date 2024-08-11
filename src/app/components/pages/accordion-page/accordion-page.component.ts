import { Component, inject } from '@angular/core';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { PreviewCodeTabsComponent } from '../../shared/preview-code-tabs/preview-code-tabs.component';
import { TreeComponent } from '../../ui/tree/tree.component';
import { AccordionItemComponent } from '../../ui/accoridon-item/accordion-item.component';
import { AccordionDirective } from '../../../core/directives/accordion.directive';
import { InstallationComponent } from '../../shared/installation/installation.component';
import { TabComponent } from '../../ui/tab/tab.component';
import { HighlighterComponent } from '../../shared/highlighter/highlighter.component';

@Component({
  selector: 'flash-accordion-page',
  standalone: true,
  template: `
    <flash-page-header
      title="Accordion"
      description="An accordion is a vertically stacked set of interactive headings that each contain a title, content snippet, or thumbnail image."
    ></flash-page-header>
    <flash-preview-code-tabs>
      <div [flashAccordion]="'single'" slot="preview">
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
      <ng-container slot="Html">
        {{ DefaultHtml }}
      </ng-container>
      <ng-container slot="Ts">
        {{ defaultTs }}
      </ng-container>
    </flash-preview-code-tabs>

    <flash-installation [provideUsage]="false">
      <ng-container slot="component">
        Get
        <span class="text-blue-700 hover:underline cursor-pointer"
          >accordion-item.component.ts</span
        >
        from Github
        <br />
        Get
        <span class="text-blue-700 hover:underline cursor-pointer"
          >accordion.directive.ts</span
        >
        from Github
        <P class="my-2"> Add this following css to yout style.css </P>
        <flash-highlighter language="css">
          {{ accordionCss }}
        </flash-highlighter>
      </ng-container>
    </flash-installation>
  `,
  imports: [
    PageHeaderComponent,
    PreviewCodeTabsComponent,
    TreeComponent,
    AccordionItemComponent,
    AccordionDirective,
    InstallationComponent,
    TabComponent,
    HighlighterComponent,
  ],
})
export class AccordionPageComponent {
  DefaultHtml = `
  // accordion-demo.component.html
    <div flashAccordion="single">
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
    </div>`;
  defaultTs = `
    // accordion-demo.component.ts
    import { Component } from '@angular/core';
    import { AccordionItemComponent } from './accordion-item/accordion-item.component';
    import { AccordionDirective } from '../../../core/directives/accordion.directive';

    @Component({
    selector: 'app-accordion',
    standalone: true,
    templateUrl: './accordion.component.html',
    imports: [
        AccordionItemComponent,
        AccordionDirective,
    ],
    })
    export class AccordionComponent {}
    `;

  accordionCss = `
    .accordion-body {
      display: grid;
      grid-template-rows: 0fr;
      transition: 250ms grid-template-rows ease;
    }
    .accordion-open {
      grid-template-rows: 1fr;
    }
  `;
}
