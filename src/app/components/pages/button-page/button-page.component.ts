import { Component } from '@angular/core';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { PreviewCodeTabsComponent } from '../../shared/preview-code-tabs/preview-code-tabs.component';
import { ButtonComponent } from '../../ui/button/button.component';
import { InstallationWrapComponent } from '../../shared/instllation-wrap/installation-wrap.component';
import { InstallationStepComponent } from '../../shared/installation-step/installation-step.component';
import { FlashLinkComponent } from '../../shared/link/flash-link.component';
import { BadgeComponent } from "../../ui/badge/badge.component";

@Component({
  selector: 'flash-button-page',
  standalone: true,
  template: `
    <flash-page-header
      title="Button"
      description="A button is a graphical control element that is used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation."
    ></flash-page-header>
    <flash-preview-code-tabs>
      <flash-button slot="preview">Button</flash-button>
      <ng-container slot="ts">
        {{ getCodeWithVariant('primary') }}
      </ng-container>
    </flash-preview-code-tabs>
    <flash-installation-wrap>
      <flash-installation-step [stepNumber]="2">
        <flash-link
          href="https://github.com/veera20k/flash-ui/blob/main/src/app/components/ui/button/button.component.ts"
          name="button.component.ts"
          type="components"
          slot="title"
        ></flash-link>
      </flash-installation-step>
    </flash-installation-wrap>
    
    <br />
    <h2 class="my-1 text-xl font-bold mb-2">Examples</h2>
    <hr>
    <br>
    <h2 class="text-lg font-bold my-3">Secondary</h2>
    <flash-preview-code-tabs>
      <flash-button slot="preview" variant="secondary"> Secondary </flash-button>
      <ng-container slot="Ts">
        {{ getCodeWithVariant('secondary') }}
      </ng-container>
    </flash-preview-code-tabs>

    <br />
    <h2 class="text-lg font-bold my-3">Destructive</h2>
    <flash-preview-code-tabs>
      <flash-button slot="preview" variant="destructive"> Destructive </flash-button>
      <ng-container slot="Ts">
        {{ getCodeWithVariant('destructive') }}
      </ng-container>
    </flash-preview-code-tabs>

    <br />
    <h2 class="text-lg font-bold my-3">Outlined</h2>
    <flash-preview-code-tabs>
      <flash-button slot="preview" variant="outlined"> Outlined </flash-button>
      <ng-container slot="Ts">
        {{ getCodeWithVariant('outlined') }}
      </ng-container>
    </flash-preview-code-tabs>

    <br />
    <h2 class="text-lg font-bold my-3">Ghost</h2>
    <flash-preview-code-tabs>
      <flash-button slot="preview" variant="ghost"> Ghost </flash-button>
      <ng-container slot="Ts">
        {{ getCodeWithVariant('ghost') }}
      </ng-container>
    </flash-preview-code-tabs>

    <br />
    <h2 class="text-lg font-bold my-3">Link</h2>
    <flash-preview-code-tabs>
      <flash-button slot="preview" variant="link"> Link </flash-button>
      <ng-container slot="Ts">
        {{ getCodeWithVariant('link') }}
      </ng-container>
    </flash-preview-code-tabs>
  `,
  imports: [
    PageHeaderComponent,
    PreviewCodeTabsComponent,
    ButtonComponent,
    InstallationWrapComponent,
    InstallationStepComponent,
    FlashLinkComponent,
    BadgeComponent
],
})
export class ButtonPageComponent {

  getCodeWithVariant = (variant: string) => {
  return `
  import { Component } from '@angular/core';
  import { ButtonComponent } from '../../ui/button/button.component';
  @Component({
    selector: 'flash-button-demo',
    standalone: true,
    template: \`
      <flash-button variant="${variant}">
        ${variant}
      </flash-button>
      \`,
      imports: [
        ButtonComponent
      ],
    })
  export class ButtonDemoComponent {}`;
  };

}
