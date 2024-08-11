import { Component } from '@angular/core';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { PreviewCodeTabsComponent } from '../../shared/preview-code-tabs/preview-code-tabs.component';
import { SelectComponent } from '../../ui/select/select.component';

@Component({
  selector: 'flash-select-page',
  standalone: true,
  template: `
    <flash-page-header
      title="Input"
      description="An input is a component that allows the user to enter and edit text."
    ></flash-page-header>
    <flash-preview-code-tabs>
      <flash-select slot="preview"> </flash-select>
    </flash-preview-code-tabs>
  `,
  imports: [PageHeaderComponent, PreviewCodeTabsComponent, SelectComponent],
})
export class SelectPageComponent {}
