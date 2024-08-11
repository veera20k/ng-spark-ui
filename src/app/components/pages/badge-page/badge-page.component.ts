
import { Component } from '@angular/core';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { PreviewCodeTabsComponent } from '../../shared/preview-code-tabs/preview-code-tabs.component';
import { BadgeComponent } from '../../ui/badge/badge.component';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
    </flash-preview-code-tabs>
  `,
  imports: [
    PageHeaderComponent,
    BadgeComponent,
    PreviewCodeTabsComponent,
    FontAwesomeModule,
  ],
})
export class BadgePageComponent {
  faArrowUpRightFromSquare = faArrowUpRightFromSquare;
}