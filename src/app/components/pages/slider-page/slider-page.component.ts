import { Component } from '@angular/core';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { PreviewCodeTabsComponent } from '../../shared/preview-code-tabs/preview-code-tabs.component';
import { SliderComponent } from '../../ui/slider/slider.component';
import { InstallationWrapComponent } from '../../shared/instllation-wrap/installation-wrap.component';
import { InstallationStepComponent } from '../../shared/installation-step/installation-step.component';
import { SparkLinkComponent } from '../../shared/link/spark-link.component';
import { NotesComponent } from "../../shared/notes/notes.component";

@Component({
  selector: 'spark-slider-page',
  standalone: true,
  template: `
    <spark-page-header
      title="Slider"
      description="A slider is a control element that allows users to select a value from a range of values."
    ></spark-page-header>
    <spark-preview-code-tabs>
      <spark-slider
        [value]="50"
        [floor]="200"
        [ceil]="0"
        [tooltipSide]="'top'"
        slot="preview"
        class="w-96"
      ></spark-slider>
      <ng-container slot="ts">
        {{ currentTs }}
      </ng-container>
    </spark-preview-code-tabs>
    <spark-installation-wrap>
      <spark-installation-step [stepNumber]="2">
        <spark-link
          href="https://github.com/veera20k/spark-ui/blob/main/src/app/components/ui/slider/slider.component.ts"
          name="slider.component.ts"
          type="components"
          slot="title"
        ></spark-link>
      </spark-installation-step>
    </spark-installation-wrap>
    <spark-notes>
      <p>Currently, the slider component does not support vertical sliders. working on it.</p>
    </spark-notes>
  `,
  imports: [
    PageHeaderComponent,
    PreviewCodeTabsComponent,
    SliderComponent,
    InstallationWrapComponent,
    InstallationStepComponent,
    SparkLinkComponent,
    NotesComponent
],
})
export class SliderPageComponent {
  currentTs = `
  import { Component } from '@angular/core';
  import { SliderComponent } from '../../ui/slider/slider.component';

  @Component({
    selector: 'spark-slider-demo',
    standalone: true,
    template: \`
        <spark-slider 
          [value]="50" 
          [floor]="200" 
          [ceil]="0" 
          direction="vertical" 
          [tooltipSide]="'top'" 
          slot="preview" 
          class="w-96">
        </spark-slider>\`,
    imports: [SliderComponent],
  })
  export class SliderDemoComponent {}`;

}
