import { Component } from '@angular/core';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { PreviewCodeTabsComponent } from '../../shared/preview-code-tabs/preview-code-tabs.component';
import { SliderComponent } from '../../ui/slider/slider.component';
import { InstallationWrapComponent } from "../../shared/instllation-wrap/installation-wrap.component";
import { InstallationStepComponent } from "../../shared/installation-step/installation-step.component";

@Component({
  selector: 'flash-slider-page',
  standalone: true,
  template: ` <flash-page-header
      title="Slider"
      description="A slider is a control element that allows users to select a value from a range of values."
    ></flash-page-header>
    <flash-preview-code-tabs>
        <flash-slider [value]="50" [floor]="200" [ceil]="0" [tooltipSide]="'top'"  slot="preview" class="w-full"></flash-slider>
      <ng-container slot="ts">
        {{ currentTs }}
      </ng-container>
    </flash-preview-code-tabs>
    <flash-installation-wrap />
    <flash-installation-step [stepNumber]="2" [code]="component">
      <code slot="title"
        >Create file <span class="underline">slider.component.ts</span> and
        copy and paste the following code into your components folder.</code
      >
    </flash-installation-step>
    `,
  imports: [PageHeaderComponent, PreviewCodeTabsComponent, SliderComponent, InstallationWrapComponent, InstallationStepComponent],
})
export class SliderPageComponent {
  currentTs = `
  import { Component } from '@angular/core';
  import { SliderComponent } from '../../ui/slider/slider.component';

  @Component({
    selector: 'flash-slider',
    standalone: true,
    template: \`
          <flash-slider 
            [value]="50" 
            [floor]="200" 
            [ceil]="0" 
            direction="vertical" 
            [tooltipSide]="'top'" 
            slot="preview" 
            class="w-full">
          </flash-slider>\`,
    imports: [SliderComponent],
  })
  export class SliderComponent {}`;

  component = `
  import { NgStyle, NgClass, DecimalPipe } from '@angular/common';
  import {
    Component,
    model,
    computed,
    signal,
    ViewChild,
    ElementRef,
    HostListener,
    input,
  } from '@angular/core';
  import { TooltipComponent } from '../tooltip/tooltip.component';
  import { Side } from '../../../core/models/common.model';

  @Component({
    selector: 'flash-slider',
    standalone: true,
    template: \`
      <div class="relative w-full h-2 bg-gray-300 rounded-full" #slider>
        <div
          class="absolute h-2 bg-primary rounded-full"
          [ngStyle]="{ width: sliderRangePercent() + '%' }"
        ></div>
        <flash-tooltip
          [side]="tooltipSide()"
          [alwaysVisible]="tooltipVisibleAlways()"
          [distance]="17"
        >
          <div
            class="w-3 h-3 bg-white ring-offset-1 ring-2 ring-primary rounded-full cursor-pointer absolute top-1/2 -translate-y-1/2"
            [ngStyle]="{ left: sliderRangePercent() + '%' }"
            (mousedown)="startDragging($event)"
            slot="trigger"
          ></div>
          <h2 class="text-xs" slot="content">
            {{ value() | number : '1.0-0' }}
          </h2>
        </flash-tooltip>
      </div>
    \`,
    imports: [NgStyle, NgClass, TooltipComponent, DecimalPipe],
  })
  export class SliderComponent {
    value = model.required<number>();
    ceil = model.required<number>();
    floor = model.required<number>();
    min = model(0);
    max = model(0);
    step = model(0);
    tooltipVisibleAlways = input(false);
    tooltipSide = input<Side>('top');

    isDragging = signal(false);
    @ViewChild('slider', { static: true })
    sliderElement!: ElementRef<HTMLElement>;

    sliderRangePercent = computed(() => {
      const range = this.floor() - this.ceil();
      return ((this.value() - this.ceil()) / range) * 100;
    });

    startDragging(event: MouseEvent): void {
      this.isDragging.set(true);
      this.updateSliderValue(event);
    }

    @HostListener('window:mousemove', ['$event'])
    onDrag(event: MouseEvent): void {
      if (this.isDragging()) {
        this.updateSliderValue(event);
      }
    }

    @HostListener('window:mouseup')
    stopDragging(): void {
      this.isDragging.set(false);
    }

    ngOnInit(): void {
      // Initialize min and max values
      if (this.max() === 0 && this.floor() !== 0) {
        this.max.set(this.floor());
      }
      if (this.min() === 0 && this.ceil() !== 0) {
        this.min.set(this.ceil());
      }

      // Validation checks
      if (this.value() > this.floor()) {
        throw new Error('Value must be greater than or equal to floor');
      }
      if (this.value() < this.ceil()) {
        throw new Error('Value must be less than or equal to ceil');
      }
      if (this.max() < this.min()) {
        throw new Error('Max must be greater than or equal to min');
      }
      if (this.max() > this.floor()) {
        throw new Error('Max must be greater than or equal to floor');
      }
      if (this.value() > this.max()) {
        throw new Error('Value must be less than or equal to max');
      }
      if (this.max() <= 0) {
        throw new Error('Max must be greater than 0');
      }
    }

    private updateSliderValue(event: MouseEvent): void {
      const sliderElement = this.sliderElement?.nativeElement;
      if (!sliderElement) {
        return;
      }

      const rect = sliderElement.getBoundingClientRect();
      const sliderWidth = rect.width;

      // slider thumb handle width in pixels
      const thumbHandleWidth = 12;

      // Calculate the initial offset
      let offsetX = event.clientX - rect.left;

      // Adjust offset to account for the thumb handle width
      offsetX = Math.max(
        0,
        Math.min(offsetX - thumbHandleWidth / 2, sliderWidth)
      );

      const ceil = this.ceil();
      const floor = this.floor();
      const min = this.min();
      const max = this.max();
      const step = this.step();

      // Calculate value as a proportion of slider width within the ceil and floor range
      const range = floor - ceil;
      let value = (offsetX / sliderWidth) * range + ceil;

      // Clamp the value
      value = Math.max(min, Math.min(max, value));

      // Adjust the value to the nearest step
      if (step > 0) {
        value = Math.round(value / step) * step;
      }

      // Set the value only if it has changed
      if (this.value() !== value) {
        this.value.set(value);
      }
    }
  }`;
}
