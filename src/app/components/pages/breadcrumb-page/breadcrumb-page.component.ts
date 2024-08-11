import { Component } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { PageHeaderComponent } from "../page-header/page-header.component";
import { PreviewCodeTabsComponent } from "../../shared/preview-code-tabs/preview-code-tabs.component";
import { BreadcrumbComponent } from "../../ui/breadcrumb/breadcrumb.component";

@Component({
  selector: 'flash-breadcrumb-page',
  standalone: true,
  template: `
      <flash-page-header
      title="Badge"
      description="A badge is a small label used to call out new or unread information."
    ></flash-page-header>
    <flash-preview-code-tabs>
      <flash-breadcrumb slot="preview" [items]="['components', 'breadcrumb', 'slot']">
        <ng-template #seperator>
          <fa-icon [icon]="faChevronRight" class="text-xs"></fa-icon>
        </ng-template>
      </flash-breadcrumb>
    </flash-preview-code-tabs>
  `,
  imports: [FontAwesomeModule, PageHeaderComponent, PreviewCodeTabsComponent, BreadcrumbComponent],
})
export class BreadcrumbPageComponent {
  faChevronRight = faChevronRight;
} 