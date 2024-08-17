import { Component } from '@angular/core';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { PreviewCodeTabsComponent } from '../../shared/preview-code-tabs/preview-code-tabs.component';
import { BadgeComponent } from '../../ui/badge/badge.component';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InstallationWrapComponent } from '../../shared/instllation-wrap/installation-wrap.component';
import { InstallationStepComponent } from '../../shared/installation-step/installation-step.component';
import { FlashLinkComponent } from '../../shared/link/flash-link.component';

@Component({
  selector: 'flash-badge-page',
  standalone: true,
  template: `
    <flash-page-header
      title="Badge"
      description="A badge is a small label used to call out new or unread information."
    ></flash-page-header>
    <flash-preview-code-tabs>
      <flash-badge slot="preview"> Primary </flash-badge>
      <ng-container slot="Ts">
        {{ getCodeWithVariant('primary') }}
      </ng-container>
    </flash-preview-code-tabs>
    <flash-installation-wrap>
      <flash-installation-step [stepNumber]="2">
        <flash-link
          href="https://github.com/veera20k/flash-ui/blob/main/src/app/components/ui/badge/badge.component.ts"
          name="badge.component.ts"
          type="components"
          slot="title"
        ></flash-link>
      </flash-installation-step>
      <flash-installation-step [stepNumber]="3" [code]="badgeVaiantModel">
        <code slot="title"
          >Update or Create model file with the following code.</code
        >
      </flash-installation-step>
    </flash-installation-wrap>
    
    <br />
    <h2 class="my-1 text-xl font-bold mb-2">Examples</h2>
    <hr>
    <br />
    <h2 class="text-lg font-bold my-3">Secondary</h2>
    <flash-preview-code-tabs>
      <flash-badge slot="preview" variant="secondary"> Secondary </flash-badge>
      <ng-container slot="Ts">
        {{ getCodeWithVariant('secondary') }}
      </ng-container>
    </flash-preview-code-tabs>

    <br />
    <h2 class="text-lg font-bold my-3">Destructive</h2>
    <flash-preview-code-tabs>
      <flash-badge slot="preview" variant="destructive">
        Destructive
      </flash-badge>
      <ng-container slot="Ts">
        {{ getCodeWithVariant('destructive') }}
      </ng-container>
    </flash-preview-code-tabs>

    <br />
    <h2 class="text-lg font-bold my-3">Outlined</h2>
    <flash-preview-code-tabs>
      <flash-badge slot="preview" variant="outlined"> Outlined </flash-badge>
      <ng-container slot="Ts">
        {{ getCodeWithVariant('outlined') }}
      </ng-container>
    </flash-preview-code-tabs>
  `,
  imports: [
    PageHeaderComponent,
    BadgeComponent,
    PreviewCodeTabsComponent,
    FontAwesomeModule,
    InstallationWrapComponent,
    InstallationStepComponent,
    FlashLinkComponent,
  ],
})
export class BadgePageComponent {
  faArrowUpRightFromSquare = faArrowUpRightFromSquare;

  getCodeWithVariant = (variant: string) => {
  return `
  import { Component } from '@angular/core';
  import { BadgeComponent } from '../../ui/badge/badge.component';
  @Component({
    selector: 'flash-badge-demo',
    standalone: true,
    template: \`
      <flash-badge variant="${variant}">
        ${variant}
      </flash-badge>
      \`,
      imports: [
        BadgeComponent
      ],
    })
  export class BadgeDemoComponent {}`;
  };

  badgeVaiantModel = `
  export type BadgeVariant = 'primary' | 'secondary' | 'destructive' | 'outlined'`;
}
