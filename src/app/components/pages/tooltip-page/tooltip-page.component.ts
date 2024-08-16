import { Component } from '@angular/core';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { PreviewCodeTabsComponent } from '../../shared/preview-code-tabs/preview-code-tabs.component';
import { ButtonComponent } from '../../ui/button/button.component';
import { TooltipComponent } from '../../ui/tooltip/tooltip.component';
import { InstallationWrapComponent } from "../../shared/instllation-wrap/installation-wrap.component";
import { InstallationStepComponent } from "../../shared/installation-step/installation-step.component";

@Component({
  selector: 'flash-tooltip-page',
  standalone: true,
  template: `
    <flash-page-header
      title="Sheet"
      description="A sheet is a non-modal dialog that appears when the user interacts with an element."
    ></flash-page-header>
    <flash-preview-code-tabs>
      <flash-tooltip side="top" slot="preview">
        <flash-button slot="trigger">Button</flash-button>
        <span slot="content" class="text-xs">This is button tooltip Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident officia distinctio quasi corrupti non expedita magnam, debitis culpa quisquam reiciendis ab sit quos atque placeat labore delectus est commodi pariatur.</span>
      </flash-tooltip>
      <ng-container slot="ts">
        {{ currentTs }}
      </ng-container>
    </flash-preview-code-tabs>
    <flash-installation-wrap />
    <flash-installation-step [stepNumber]="2" [code]="component">
      <code slot="title"
        >Create file <span class="underline">tooltip.component.ts</span> and
        copy and paste the following code into your components folder.</code
      >
    </flash-installation-step>
  `,
  imports: [
    PageHeaderComponent,
    PreviewCodeTabsComponent,
    ButtonComponent,
    TooltipComponent,
    InstallationWrapComponent,
    InstallationStepComponent
],
})
export class TooltipPageComponent {

  currentTs = `
  import { Component } from '@angular/core';
  import { TooltipComponent } from '../../ui/tooltip/tooltip.component';

  @Component({
    selector: 'flash-tooltip',
    standalone: true,
    template: \`
      <flash-tooltip side="top">
        <flash-button slot="trigger">Button</flash-button>
        <span slot="content" class="text-xs">This is button tooltip Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident officia distinctio quasi corrupti non expedita magnam, debitis culpa quisquam reiciendis ab sit quos atque placeat labore delectus est commodi pariatur.</span>
      </flash-tooltip>
    \`,
    imports: [
      TooltipComponent,
      ButtonComponent,
    ],
  })
  export class TooltipComponent {}`;

  component = `
  import { NgClass, NgStyle } from '@angular/common';
  import {
    Component,
    effect,
    ElementRef,
    HostListener,
    inject,
    input,
    Renderer2,
    signal,
  } from '@angular/core';
  import { Side } from '../../../core/models/common.model';

  @Component({
    selector: 'flash-tooltip',
    standalone: true,
    template: \`
      <ng-content select="[slot=trigger]"></ng-content>
      <div
        class="bg-primary px-2 py-1.5 leading-3 rounded-lg text-white min-w-[24px]"
        id="flash-tooltip-content"
        [ngStyle]="{ 'inset-area': side(), margin: distance() + 'px' }"
        [ngClass]="{ hidden: !isVisible(), visible: isVisible() }"
      >
        @switch (side()) { @case ('top') {
        <div
          class="absolute border-[6px] transform top-full left-1/2 -translate-x-1/2 rotate-180 border-t-transparent border-b-primary border-l-transparent border-r-transparent"
        ></div>
        } @case ('bottom') {
        <div
          class="absolute w-0 h-0 border-[6px] transform bottom-full left-1/2 -translate-x-1/2 rotate-180 border-t-primary border-b-transparent border-l-transparent border-r-transparent"
        ></div>
        } @case ('left') {
        <div
          class="absolute w-0 h-0 border-[6px] transform left-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-l-primary border-r-transparent"
        ></div>
        } @case ('right') {
        <div
          class="absolute w-0 h-0 border-[6px] right-full top-1/2 transform -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent border-r-primary"
        ></div>
        } }
        <ng-content select="[slot=content]"></ng-content>
      </div>
    \`,
    styles: [
      \`
        #flash-tooltip-content {
          position: absolute;
          position-anchor: --flash-tooltip-anchor;
        }
      \`,
    ],
    imports: [NgStyle, NgClass],
    host: {
      class: 'contents',
    },
  })
  export class TooltipComponent {
    side = input<Side>('top');
    isVisible = signal(false);
    alwaysVisible = input(false);
    distance = input(8);
    private renderer = inject(Renderer2);
    private elementRef = inject(ElementRef);

    constructor() {
      effect(() => {
          this.isVisible.set(this.alwaysVisible());
        },{ allowSignalWrites: true });
    }

    ngOnInit(): void {
      if (this.alwaysVisible()) {
        this.isVisible.set(true);
      }
    }

    ngAfterContentInit() {
      try {
        const triggerElement =
          this.elementRef.nativeElement.querySelector('[slot=trigger]');
        if (triggerElement) {
          this.renderer.setStyle(
            triggerElement,
            'anchor-name',
            '--flash-tooltip-anchor'
          );
        }
      } catch (error) {
        console.warn('not able to find tooltip trigger element');
      }
    }

    @HostListener('mouseover', ['$event'])
    onStartHover(event: MouseEvent): void {
      if (!this.alwaysVisible()) {
        this.isVisible.set(true);
      }
    }

    @HostListener('mouseout', ['$event'])
    onEndHover(event: MouseEvent): void {
      if (!this.alwaysVisible()) {
        this.isVisible.set(false);
      }
    }
  }`;

}
