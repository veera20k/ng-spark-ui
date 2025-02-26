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
    selector: 'spark-tooltip',
    template: `
    <ng-content select="[slot=trigger]"></ng-content>
    <div
      class="bg-primary px-2 py-1.5 leading-3 rounded-lg text-white min-w-[24px]"
      id="spark-tooltip-content"
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
  `,
    styles: [
        `
      #spark-tooltip-content {
        position: absolute;
        position-anchor: --spark-tooltip-anchor;
      }
    `,
    ],
    imports: [NgStyle, NgClass],
    host: {
        class: 'contents',
    }
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
          '--spark-tooltip-anchor'
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
}
