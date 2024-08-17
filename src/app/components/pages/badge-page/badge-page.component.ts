import { Component } from '@angular/core';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { PreviewCodeTabsComponent } from '../../shared/preview-code-tabs/preview-code-tabs.component';
import { BadgeComponent } from '../../ui/badge/badge.component';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InstallationWrapComponent } from '../../shared/instllation-wrap/installation-wrap.component';
import { InstallationStepComponent } from '../../shared/installation-step/installation-step.component';
import { SparkLinkComponent } from '../../shared/link/spark-link.component';

@Component({
  selector: 'spark-badge-page',
  standalone: true,
  template: `
    <spark-page-header
      title="Badge"
      description="A badge is a small label used to call out new or unread information."
    ></spark-page-header>
    <spark-preview-code-tabs>
      <spark-badge slot="preview"> Primary </spark-badge>
      <ng-container slot="Ts">
        {{ getCodeWithVariant('primary') }}
      </ng-container>
    </spark-preview-code-tabs>
    <spark-installation-wrap>
      <spark-installation-step [stepNumber]="2">
        <spark-link
          href="https://github.com/veera20k/spark-ui/blob/main/src/app/components/ui/badge/badge.component.ts"
          name="badge.component.ts"
          type="components"
          slot="title"
        ></spark-link>
      </spark-installation-step>
      <spark-installation-step [stepNumber]="3" [code]="badgeVaiantModel">
        <code slot="title"
          >Update or Create model file with the following code.</code
        >
      </spark-installation-step>
    </spark-installation-wrap>
    
    <br />
    <h2 class="my-1 text-xl font-bold mb-2">Examples</h2>
    <hr>
    <br />
    <h2 class="text-lg font-bold my-3">Secondary</h2>
    <spark-preview-code-tabs>
      <spark-badge slot="preview" variant="secondary"> Secondary </spark-badge>
      <ng-container slot="Ts">
        {{ getCodeWithVariant('secondary') }}
      </ng-container>
    </spark-preview-code-tabs>

    <br />
    <h2 class="text-lg font-bold my-3">Destructive</h2>
    <spark-preview-code-tabs>
      <spark-badge slot="preview" variant="destructive">
        Destructive
      </spark-badge>
      <ng-container slot="Ts">
        {{ getCodeWithVariant('destructive') }}
      </ng-container>
    </spark-preview-code-tabs>

    <br />
    <h2 class="text-lg font-bold my-3">Outlined</h2>
    <spark-preview-code-tabs>
      <spark-badge slot="preview" variant="outlined"> Outlined </spark-badge>
      <ng-container slot="Ts">
        {{ getCodeWithVariant('outlined') }}
      </ng-container>
    </spark-preview-code-tabs>
  `,
  imports: [
    PageHeaderComponent,
    BadgeComponent,
    PreviewCodeTabsComponent,
    FontAwesomeModule,
    InstallationWrapComponent,
    InstallationStepComponent,
    SparkLinkComponent,
  ],
})
export class BadgePageComponent {
  faArrowUpRightFromSquare = faArrowUpRightFromSquare;

  getCodeWithVariant = (variant: string) => {
  return `
  import { Component } from '@angular/core';
  import { BadgeComponent } from '../../ui/badge/badge.component';
  @Component({
    selector: 'spark-badge-demo',
    standalone: true,
    template: \`
      <spark-badge variant="${variant}">
        ${variant}
      </spark-badge>
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
