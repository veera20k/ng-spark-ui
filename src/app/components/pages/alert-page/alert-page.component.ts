import { Component } from '@angular/core';
import { PreviewCodeTabsComponent } from '../../shared/preview-code-tabs/preview-code-tabs.component';
import { AlertComponent } from '../../ui/alert/alert.component';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { faTerminal } from '@fortawesome/free-solid-svg-icons/faTerminal';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InstallationWrapComponent } from '../../shared/instllation-wrap/installation-wrap.component';
import { InstallationStepComponent } from '../../shared/installation-step/installation-step.component';
import { FlashLinkComponent } from '../../shared/link/flash-link.component';

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
    <flash-installation-wrap>
      <flash-installation-step [stepNumber]="2">
        <flash-link
          href="https://github.com/veera20k/flash-ui/tree/main/src/app/components/ui/alert"
          name="alert.component.ts"
          type="components"
          slot="title"
        ></flash-link>
      </flash-installation-step>
    </flash-installation-wrap>
  `,
  imports: [
    PageHeaderComponent,
    AlertComponent,
    PreviewCodeTabsComponent,
    FontAwesomeModule,
    InstallationWrapComponent,
    InstallationStepComponent,
    FlashLinkComponent,
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
}
