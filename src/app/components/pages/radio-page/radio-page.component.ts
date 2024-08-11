import { Component } from '@angular/core';
import { PreviewCodeTabsComponent } from '../../shared/preview-code-tabs/preview-code-tabs.component';
import { RadioComponent } from '../../ui/radio/radio.component';
import { PageHeaderComponent } from '../page-header/page-header.component';

@Component({
  selector: 'flash-radio-page',
  standalone: true,
  template: `
    <flash-page-header
      title="Radio"
      description="A radio is a graphical control element that allows the user to select one option from a list of options."
    ></flash-page-header>
    <flash-preview-code-tabs>
      <div slot="preview" class="flex flex-col gap-2">
        <flash-radio htmlFor="radio-1" name="radio-group"> Label 1</flash-radio>
        <flash-radio htmlFor="radio-2" name="radio-group"> Label 2</flash-radio>
        <flash-radio htmlFor="radio-3" name="radio-group"> Label 3</flash-radio>
      </div>
    </flash-preview-code-tabs>
  `,
  imports: [PageHeaderComponent, PreviewCodeTabsComponent, RadioComponent],
})
export class RadioPageComponent {}
