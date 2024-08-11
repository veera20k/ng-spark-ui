import { Component } from '@angular/core';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { PreviewCodeTabsComponent } from '../../shared/preview-code-tabs/preview-code-tabs.component';
import { SliderComponent } from '../../ui/slider/slider.component';

@Component({
  selector: 'flash-slider-page',
  standalone: true,
  template: ` <flash-page-header
      title="Slider"
      description="A slider is a control element that allows users to select a value from a range of values."
    ></flash-page-header>
    <flash-preview-code-tabs>
      <div class="w-[300px]" slot="preview">
        <flash-slider [value]="50" [floor]="200" [ceil]="0" [max]="80"></flash-slider>
      </div>
    </flash-preview-code-tabs>`,
  imports: [PageHeaderComponent, PreviewCodeTabsComponent, SliderComponent],
})
export class SliderPageComponent {}
