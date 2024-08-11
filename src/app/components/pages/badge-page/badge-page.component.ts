
import { Component } from '@angular/core';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { PreviewCodeTabsComponent } from '../../shared/preview-code-tabs/preview-code-tabs.component';
import { BadgeComponent } from '../../ui/badge/badge.component';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InstallationWrapComponent } from "../../shared/instllation-wrap/installation-common.component";
import { InstallationStepComponent } from "../../shared/installation-step/installation-step.component";

@Component({
  selector: 'flash-badge-page',
  standalone: true,
  template: `
    <flash-page-header
      title="Badge"
      description="A badge is a small label used to call out new or unread information."
    ></flash-page-header>
    <flash-preview-code-tabs>
      <flash-badge slot="preview">
          Badge
      </flash-badge>
      <ng-container slot="Ts">
        {{demoTs}}
      </ng-container>
    </flash-preview-code-tabs>
    <flash-installation-common/>
    <flash-installation-step [stepNumber]="2" [code]="component">
      <code slot="title"
        >Create file <span class="underline">badge.component.ts</span> and copy
        and paste the following code into your components folder.</code
      >
    </flash-installation-step>
    <flash-installation-step [stepNumber]="3" [code]="badgeVaiantModel">
      <code slot="title"
        >Update or Create model file with the following code.</code
      >
    </flash-installation-step>
  `,
  imports: [
    PageHeaderComponent,
    BadgeComponent,
    PreviewCodeTabsComponent,
    FontAwesomeModule,
    InstallationWrapComponent,
    InstallationStepComponent
],
})
export class BadgePageComponent {
  faArrowUpRightFromSquare = faArrowUpRightFromSquare;

  demoTs = `
  import { Component } from '@angular/core';
  import { BadgeComponent } from '../../ui/badge/badge.component';
  @Component({
    selector: 'flash-badge-demo',
    standalone: true,
    template: \`
      <flash-badge>
        Badge
      </flash-badge>
      \`,
    imports: [
      BadgeComponent
    ],
  })
  export class BadgeDemoComponent {}`;

  component = `
  import { Component, computed, HostBinding, input } from '@angular/core';
  import { BadgeVariant } from '../../../core/models/common.model';
  @Component({
    selector: 'flash-badge',
    standalone: true,
    template: \`\<ng-content/>\`\,
    host: {
      class:
        'inline-flex items-center rounded-md border px-2 py-0.5 text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 gap-1 cursor-pointer',
    },
  })
  export class BadgeComponent {
    varient = input<BadgeVariant>('primary');

    badgeVairentClass = computed(() => {
      switch (this.varient()) {
        case 'primary':
          return 'text-primary-foreground bg-primary hover:bg-primary/90';
        case 'secondary':
          return 'text-secondary-foreground bg-secondary hover:bg-secondary/80';
        case 'destructive':
          return 'bg-destructive text-destructive-foreground hover:bg-destructive/90';
        case 'outlined':
          return 'border border-input bg-background hover:bg-accent hover:text-accent-foreground';
      }
    });

    @HostBinding('class') get setBadgeVairentClass() {
      return this.badgeVairentClass();
    }
  }`;

  badgeVaiantModel = `
  export type BadgeVariant = 'primary' | 'secondary' | 'destructive' | 'outlined'`;

}