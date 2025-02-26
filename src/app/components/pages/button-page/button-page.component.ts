import { Component } from '@angular/core';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { PreviewCodeTabsComponent } from '../../shared/preview-code-tabs/preview-code-tabs.component';
import { ButtonComponent } from '../../ui/button/button.component';
import { InstallationWrapComponent } from '../../shared/instllation-wrap/installation-wrap.component';
import { InstallationStepComponent } from '../../shared/installation-step/installation-step.component';
import { SparkLinkComponent } from '../../shared/link/spark-link.component';
import { BadgeComponent } from "../../ui/badge/badge.component";

@Component({
    selector: 'spark-button-page',
    template: `
    <spark-page-header
      title="Button"
      description="A button is a graphical control element that is used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation."
    ></spark-page-header>
    <spark-preview-code-tabs>
      <spark-button slot="preview">Button</spark-button>
      <ng-container slot="ts">
        {{ getCodeWithVariant('primary') }}
      </ng-container>
    </spark-preview-code-tabs>
    <spark-installation-wrap>
      <spark-installation-step [stepNumber]="2">
        <spark-link
          href="https://github.com/veera20k/spark-ui/blob/main/src/app/components/ui/button/button.component.ts"
          name="button.component.ts"
          type="components"
          slot="title"
        ></spark-link>
      </spark-installation-step>
    </spark-installation-wrap>
    
    <br />
    <h2 class="my-1 text-xl font-bold mb-2">Examples</h2>
    <hr>
    <br>
    <h2 class="text-lg font-bold my-3">Secondary</h2>
    <spark-preview-code-tabs>
      <spark-button slot="preview" variant="secondary"> Secondary </spark-button>
      <ng-container slot="Ts">
        {{ getCodeWithVariant('secondary') }}
      </ng-container>
    </spark-preview-code-tabs>

    <br />
    <h2 class="text-lg font-bold my-3">Destructive</h2>
    <spark-preview-code-tabs>
      <spark-button slot="preview" variant="destructive"> Destructive </spark-button>
      <ng-container slot="Ts">
        {{ getCodeWithVariant('destructive') }}
      </ng-container>
    </spark-preview-code-tabs>

    <br />
    <h2 class="text-lg font-bold my-3">Outlined</h2>
    <spark-preview-code-tabs>
      <spark-button slot="preview" variant="outlined"> Outlined </spark-button>
      <ng-container slot="Ts">
        {{ getCodeWithVariant('outlined') }}
      </ng-container>
    </spark-preview-code-tabs>

    <br />
    <h2 class="text-lg font-bold my-3">Ghost</h2>
    <spark-preview-code-tabs>
      <spark-button slot="preview" variant="ghost"> Ghost </spark-button>
      <ng-container slot="Ts">
        {{ getCodeWithVariant('ghost') }}
      </ng-container>
    </spark-preview-code-tabs>

    <br />
    <h2 class="text-lg font-bold my-3">Link</h2>
    <spark-preview-code-tabs>
      <spark-button slot="preview" variant="link"> Link </spark-button>
      <ng-container slot="Ts">
        {{ getCodeWithVariant('link') }}
      </ng-container>
    </spark-preview-code-tabs>
  `,
    imports: [
        PageHeaderComponent,
        PreviewCodeTabsComponent,
        ButtonComponent,
        InstallationWrapComponent,
        InstallationStepComponent,
        SparkLinkComponent,
        BadgeComponent
    ]
})
export class ButtonPageComponent {

  getCodeWithVariant = (variant: string) => {
  return `
  import { Component } from '@angular/core';
  import { ButtonComponent } from '../../ui/button/button.component';
  @Component({
    selector: 'spark-button-demo',
    standalone: true,
    template: \`
      <spark-button variant="${variant}">
        ${variant}
      </spark-button>
      \`,
      imports: [
        ButtonComponent
      ],
    })
  export class ButtonDemoComponent {}`;
  };

}
