import { Component } from '@angular/core';
import { PreviewCodeTabsComponent } from '../../shared/preview-code-tabs/preview-code-tabs.component';
import { AlertComponent } from '../../ui/alert/alert.component';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { faTerminal } from '@fortawesome/free-solid-svg-icons/faTerminal';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
    </flash-preview-code-tabs>
  `,
  imports: [
    PageHeaderComponent,
    AlertComponent,
    PreviewCodeTabsComponent,
    FontAwesomeModule,
  ],
})
export class AlertPageComponent {
  faTerminal = faTerminal;
}
