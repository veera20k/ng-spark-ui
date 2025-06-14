import { Component } from '@angular/core';
import { AccordionItemComponent } from '../../ui/accoridon-item/accordion-item.component';
import { AccordionDirective } from '../../../core/directives/accordion.directive';

@Component({
  selector: 'spark-introduction',
  template: `<main class="p-4" role="main">
    <h1 class="text-2xl font-bold" id="introduction-title">Introduction</h1>
    <p class="my-3 text-muted-foreground" intro-id="intro" aria-labelledby="introduction-title">
      Introducing spark UI, an Angular library built with Angular 17.3+ and
      inspired by ShadCN UI. spark UI offers a modern and flexible UI toolkit
      that integrates seamlessly with Tailwind CSS. No installation
      required—simply copy and paste the components into your project and start
      building beautiful interfaces with ease.
    </p>

    <section aria-labelledby="faq-title">
      <h2 class="font-semibold" id="faq-title" intro-id="intro-body">FNAQ - (Frequently Not Asked Questions : | )</h2>
      <div sparkAccordion mode="single" role="region" aria-label="Frequently Asked Questions">
        <spark-accordion-item>
          <h3 class="mt-3" slot="trigger" role="heading" aria-level="3">What is Spark UI?</h3>
          <p class="my-1" slot="content">
            spark UI is an Angular library built with Angular 17.3+ and inspired
            by ShadCN UI..
          </p>
        </spark-accordion-item>
        <spark-accordion-item>
          <h3 class="mt-3" slot="trigger" role="heading" aria-level="3">
            What Angular verison does Spark UI support?
          </h3>
          <p class="my-1" slot="content">
            spark UI supports Angular 17.3+ and above.
          </p>
        </spark-accordion-item>
        <spark-accordion-item>
          <h3 class="mt-3" slot="trigger" role="heading" aria-level="3">Tested For SSR?</h3>
          <p class="my-1" slot="content">
            NO, spark UI is not tested for SSR. However, it can be used with SSR
            frameworks like NestJS, Express, etc.
          </p>
        </spark-accordion-item>
        <spark-accordion-item>
          <h3 class="mt-3" slot="trigger" role="heading" aria-level="3">
            Cant we user spark UI with below Angular 17.3?
          </h3>
          <p class="my-1" slot="content">
            Currently No, support will be added in future versions.
          </p>
        </spark-accordion-item>
        <spark-accordion-item>
          <h3 class="mt-3" slot="trigger" role="heading" aria-level="3">Is this Paid or Open Source?</h3>
          <p class="my-1" slot="content">
            spark UI is an open source project. You can use it for free. However,
            if you want to support the project, you can do so by donating to the
            author.
          </p>
        </spark-accordion-item>
        <spark-accordion-item>
          <h3 class="mt-3" slot="trigger" role="heading" aria-level="3">
            Should we get paid for this in the future?
          </h3>
          <p class="my-1" slot="content">
            No, I do not plan on getting paid for this in the future.
          </p>
        </spark-accordion-item>
        <spark-accordion-item>
          <h3 class="mt-3" slot="trigger" role="heading" aria-level="3">
            Should we install any icon package for this?
          </h3>
          <p class="my-1" slot="content">
            Icons are dynamic so you can use any icon package you want. I
            recommend using Font Awesome, Material Icons, or Ionicons.
          </p>
        </spark-accordion-item>
      </div>
    </section>
  </main>`,
  imports: [AccordionItemComponent, AccordionDirective],
})
export class IntroductionComponent {}
