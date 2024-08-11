import { Component } from '@angular/core';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { PreviewCodeTabsComponent } from '../../shared/preview-code-tabs/preview-code-tabs.component';
import { AccordionItemComponent } from '../../ui/accoridon-item/accordion-item.component';
import { AccordionDirective } from '../../../core/directives/accordion.directive';
import { BadgeComponent } from '../../ui/badge/badge.component';
import { InstallationStepComponent } from '../../shared/installation-step/installation-step.component';
import { InstallationWrapComponent } from "../../shared/instllation-wrap/installation-common.component";

@Component({
  selector: 'flash-accordion-page',
  standalone: true,
  template: `
    <flash-page-header
      title="Accordion"
      description="An accordion is a vertically stacked set of interactive headings that each contain a title, content snippet, or thumbnail image."
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
        {{ defaultTs }}
      </ng-container>
    </flash-preview-code-tabs>
    <flash-installation-common/>
    <flash-installation-step [stepNumber]="2" [code]="accodrionItem">
      <code slot="title">Create file like <span class="underline">accordion-item.component.ts</span> and copy and paste the following code into your components folder.</code>
    </flash-installation-step>
    <flash-installation-step [stepNumber]="3" [code]="accodrionDirective">
      <code slot="title">Create file <span class="underline">accordion.directive.ts</span> into your directives folder and copy and paste the following code into your components folder.</code>
    </flash-installation-step>
    <flash-installation-step [stepNumber]="4" [code]="accordionCss" [language]="'css'">
      <code slot="title">Copy and past this css into your <span class="underline">styles.css</span> file.</code>
    </flash-installation-step>
  `,
  imports: [
    PageHeaderComponent,
    PreviewCodeTabsComponent,
    AccordionItemComponent,
    AccordionDirective,
    InstallationStepComponent,
    BadgeComponent,
    InstallationWrapComponent
],
})
export class AccordionPageComponent {
  defaultTs = `
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

  accodrionItem = `
  import { NgClass } from '@angular/common';
  import {
    Component,
    input,
    output,
    signal,
  } from '@angular/core';
  import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
  import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';

  @Component({
    selector: 'flash-accordion-item',
    standalone: true,
    template: 
    \`\<div class="border-b w-full rounded-md">
        <div class="flex justify-between px-4 py-3 cursor-pointer" 
          (click)="toggle(!isOpen())">
          <ng-content select="[slot=trigger]" />
          <fa-icon
            [icon]="faChevronDown"
            class="fa-sm transition-all"
            [ngClass]="isOpen() ? 'rotate-180' : ''"
          ></fa-icon>
        </div>
        <div class="accordion-body" [ngClass]="isOpen() ? 'accordion-open' : ''">
          <section class="overflow-hidden">
            <div class="m-3 pl-4">
              <ng-content select="[slot=content]" />
            </div>
          </section>
        </div>
      </div>
    \`\,
    host: {
      class: 'contents',
    },
    imports: [FontAwesomeModule, NgClass],
  })
  export class AccordionItemComponent {
    isOpen = signal(false);
    toggleEvent = output<boolean>();
    alwaysOpen = input(false);

    faChevronDown = faChevronDown;

    ngOnInit(): void {
      if (this.alwaysOpen()) {
        this.isOpen.set(true);
      }
    }

    toggle(isOpen: boolean) {
      if (!this.alwaysOpen()) {
        this.isOpen.set(isOpen);
        this.toggleEvent.emit(isOpen);
      }
    }
  }`;
  accodrionDirective = `
  import { Directive, Input, ContentChildren, QueryList, AfterContentInit, input } from '@angular/core';
  import { AccordionItemComponent } from '../../components/ui/accoridon-item/accordion-item.component';

  @Directive({
    selector: '[flashAccordion]',
    standalone: true,
  })
  export class AccordionDirective implements AfterContentInit {
    mode = input<'single' | 'multiple'>('single');
    @ContentChildren(AccordionItemComponent) items!: QueryList<AccordionItemComponent>;

    ngAfterContentInit() {
      this.items.forEach((item, index) => {
        item.toggleEvent.subscribe((isOpen: boolean) => {
          this.onToggle(index);
        });
      });
    }

    onToggle(index: number) {
      if (this.mode() === 'single') {
        this.items.forEach((item, i) => {
          if (i !== index) {
            item.isOpen.set(false);
          }
        });
      }
    }
  }`;
}
