import { Component } from '@angular/core';
import { PreviewCodeTabsComponent } from '../../shared/preview-code-tabs/preview-code-tabs.component';
import { AlertComponent } from '../../ui/alert/alert.component';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { faTerminal } from '@fortawesome/free-solid-svg-icons/faTerminal';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InstallationWrapComponent } from '../../shared/instllation-wrap/installation-wrap.component';
import { InstallationStepComponent } from '../../shared/installation-step/installation-step.component';
import { SparkLinkComponent } from '../../shared/link/spark-link.component';

@Component({
  selector: 'spark-alert-page',
  standalone: true,
  template: `
    <spark-page-header
      title="Alert"
      description="An alert is a small window that displays a brief, important message in a way that attracts the user's attention without interrupting the user's task."
    ></spark-page-header>
    <spark-preview-code-tabs>
      <spark-alert slot="preview">
        <fa-icon slot="icon" class="fa-xs" [icon]="faTerminal"></fa-icon>
        <ng-container slot="title">Warning!</ng-container>
        <ng-container slot="description">
          This is a warning alert. This is a warning alert. This is a warning
        </ng-container>
      </spark-alert>
      <ng-container slot="ts">
        {{ demoTs }}
      </ng-container>
    </spark-preview-code-tabs>
    <spark-installation-wrap>
      <spark-installation-step [stepNumber]="2">
        <spark-link
          href="https://github.com/veera20k/spark-ui/tree/main/src/app/components/ui/alert"
          name="alert.component.ts"
          type="components"
          slot="title"
        ></spark-link>
      </spark-installation-step>
    </spark-installation-wrap>
  `,
  imports: [
    PageHeaderComponent,
    AlertComponent,
    PreviewCodeTabsComponent,
    FontAwesomeModule,
    InstallationWrapComponent,
    InstallationStepComponent,
    SparkLinkComponent,
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
      <spark-alert>
        <fa-icon slot="icon" class="fa-xs" [icon]="faTerminal"></fa-icon>
        <ng-container slot="title">Warning!</ng-container>
        <ng-container slot="description">
        This is a warning alert. This is a warning alert. This is a warning
      </ng-container>
      </spark-alert>',
    imports: [
        AlertComponent
    ],
    standalone: true,
  })
  export class AlertDemoComponent {}`;
}
