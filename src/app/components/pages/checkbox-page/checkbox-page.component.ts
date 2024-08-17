import { Component } from '@angular/core';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { PreviewCodeTabsComponent } from '../../shared/preview-code-tabs/preview-code-tabs.component';
import { CheckboxComponent } from '../../ui/checkbox/checkbox.component';
import { InstallationStepComponent } from '../../shared/installation-step/installation-step.component';
import { InstallationWrapComponent } from '../../shared/instllation-wrap/installation-wrap.component';
import { FlashLinkComponent } from '../../shared/link/flash-link.component';

@Component({
  selector: 'flash-checkbox-page',
  standalone: true,
  template: `
    <flash-page-header
      title="Checkbox"
      description="A checkbox is a graphical control element that allows the user to select one or more items from a list of options."
    ></flash-page-header>
    <flash-preview-code-tabs>
      <flash-checkbox slot="preview" htmlFor="sample">
        <span slot="label">Checkbox</span>
      </flash-checkbox>
      <ng-container slot="ts">
        {{ currentTs }}
      </ng-container>
    </flash-preview-code-tabs>
    <flash-installation-wrap>
      <flash-installation-step [stepNumber]="2">
        <flash-link
          href="https://github.com/veera20k/flash-ui/blob/main/src/app/components/ui/checkbox/checkbox.component.ts"
          name="checkbox.component.ts"
          type="components"
          slot="title"
        ></flash-link>
      </flash-installation-step>
    </flash-installation-wrap>
  `,
  imports: [
    PageHeaderComponent,
    PreviewCodeTabsComponent,
    CheckboxComponent,
    InstallationStepComponent,
    InstallationWrapComponent,
    FlashLinkComponent,
  ],
})
export class CheckboxPageComponent {
  currentTs = `
  import { Component } from "@angular/core";
  import { CheckboxComponent } from "../../ui/checkbox/checkbox.component";

  @Component({
    selector: 'flash-checkbox',
    standalone: true,
    template: \`
      <flash-checkbox slot="preview" htmlFor="sample">
        <span slot="label">Checkbox</span>
      </flash-checkbox>
    \`,
    imports: [CheckboxComponent],
  })
  export class CheckboxComponent {
  }`;

}
