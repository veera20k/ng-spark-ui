import { Component } from '@angular/core';
import { PreviewCodeTabsComponent } from '../../shared/preview-code-tabs/preview-code-tabs.component';
import { AlertComponent } from '../../ui/alert/alert.component';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { faTerminal } from '@fortawesome/free-solid-svg-icons/faTerminal';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InstallationWrapComponent } from '../../shared/instllation-wrap/installation-common.component';
import { InstallationStepComponent } from '../../shared/installation-step/installation-step.component';

@Component({
  selector: 'flash-alert-page',
  standalone: true,
  template: `
    <flash-page-header
      title="Alert"
      description="An alert is a small window that displays a brief, important message in a way that attracts the user's attention without interrupting the user's task."
    ></flash-page-header>
    <flash-preview-code-tabs>
      <flash-alert slot="preview">
        <fa-icon slot="icon" class="fa-xs" [icon]="faTerminal"></fa-icon>
        <ng-container slot="title">Warning!</ng-container>
        <ng-container slot="description">
          This is a warning alert. This is a warning alert. This is a warning
        </ng-container>
      </flash-alert>
      <ng-container slot="ts">
        {{ demoTs }}
      </ng-container>
    </flash-preview-code-tabs>
    <flash-installation-common />
    <flash-installation-step [stepNumber]="2" [code]="componet">
      <code slot="title"
        >Create file <span class="underline">alert.component.ts</span> and copy
        and paste the following code into your components folder.</code
      >
    </flash-installation-step>
  `,
  imports: [
    PageHeaderComponent,
    AlertComponent,
    PreviewCodeTabsComponent,
    FontAwesomeModule,
    InstallationWrapComponent,
    InstallationStepComponent,
  ],
})
export class AlertPageComponent {
  faTerminal = faTerminal;

  demoTs = `
  import { Component } from '@angular/core';
  import { AlertComponent } from '../../ui/alert/alert.component';

  @Component({
    selector: 'app-alert-demo',
    templateUrl: '
      <flash-alert>
        <fa-icon slot="icon" class="fa-xs" [icon]="faTerminal"></fa-icon>
        <ng-container slot="title">Warning!</ng-container>
        <ng-container slot="description">
        This is a warning alert. This is a warning alert. This is a warning
      </ng-container>
      </flash-alert>',
    imports: [
        AlertComponent
    ],
    standalone: true,
  })
  export class AlertDemoComponent {}`;

  componet = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'flash-alert',
    standalone: true,
    template: \`
      <span class="absolute top-3.5 left-3">
        <ng-content select="[slot=icon]"></ng-content>
      </span>
      <h2 class="font-medium leading-none tracking-tight pl-5">
        <ng-content select="[slot=title]"></ng-content>
      </h2>
      <div class="text-sm pl-5">
        <ng-content select="[slot=description]"></ng-content>
      </div>\`,
    host: {
      class:
        'relative w-full rounded-lg border p-4 bg-background text-foreground',
      ['attr.role']: 'alert',
    },
  })
  export class AlertComponent {}`;
}
