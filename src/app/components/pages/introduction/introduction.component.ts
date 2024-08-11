import { Component } from '@angular/core';
import { AccordionItemComponent } from '../../ui/accoridon-item/accordion-item.component';
import { AccordionDirective } from '../../../core/directives/accordion.directive';

@Component({
  selector: 'flash-introduction',
  template: `<div class="p-4">
    <h1 class="text-2xl font-bold">Introduction</h1>
    <p class="my-3 text-muted-foreground">
      Introducing Flash UI, an Angular library built with Angular 17.3+ and
      inspired by ShadCN UI. Flash UI offers a modern and flexible UI toolkit
      that integrates seamlessly with Tailwind CSS. No installation
      required—simply copy and paste the components into your project and start
      building beautiful interfaces with ease.
    </p>

    <h2 class="font-semibold">FNAQ - (Frequently Not Asked Questions : | )</h2>

    <div [flashAccordion]="'single'">
      <flash-accordion-item>
        <h2 class="mt-3" slot="trigger">What is Flash UI?</h2>
        <p class="my-1" slot="content">
          Flash UI is an Angular library built with Angular 17.3+ and inspired
          by ShadCN UI..
        </p>
      </flash-accordion-item>
      <flash-accordion-item>
        <h2 class="mt-3" slot="trigger">
          What Angular verison does Flash UI support?
        </h2>
        <p class="my-1" slot="content">
          Flash UI supports Angular 17.3+ and above.
        </p>
      </flash-accordion-item>
      <flash-accordion-item>
        <h2 class="mt-3" slot="trigger">Tested For SSR?</h2>
        <p class="my-1" slot="content">
          NO, Flash UI is not tested for SSR. However, it can be used with SSR
          frameworks like NestJS, Express, etc.
        </p>
      </flash-accordion-item>
      <flash-accordion-item>
        <h2 class="mt-3 " slot="trigger">
          Cant we user Flash UI with below Angular 17.3?
        </h2>
        <p class="my-1" slot="content">
          Currently No, support will be added in future versions.
        </p>
      </flash-accordion-item>
      <flash-accordion-item>
        <h2 class="mt-3" slot="trigger">
          Is this Paid or Open Source?
        </h2>
        <p class="my-1" slot="content">
          Flash UI is an open source project. You can use it for free. However,
          if you want to support the project, you can do so by donating to the
          author.
        </p>
      </flash-accordion-item>
      <flash-accordion-item>
        <h2 class="mt-3" slot="trigger">
          Should we get paid for this in the future?
        </h2>
        <p class="my-1" slot="content">
          No, I do not plan on getting paid for this in the future.
        </p>
      </flash-accordion-item>
      <flash-accordion-item>
        <h2 class="mt-3 " slot="trigger">
          Should we install any icon package for this?
        </h2>
        <p class="my-1" slot="content">
          Icons are dynamic so you can use any icon package you want. I
          recommend using Font Awesome, Material Icons, or Ionicons.
        </p>
      </flash-accordion-item>
    </div>
  </div>`,
  standalone: true,
  imports: [AccordionItemComponent, AccordionDirective],
})
export class IntroductionComponent {}
