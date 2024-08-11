import { Component, input } from '@angular/core';
import { BadgeComponent } from '../../ui/badge/badge.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowUpRightFromSquare, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { BreadcrumbComponent } from '../../ui/breadcrumb/breadcrumb.component';

@Component({
  selector: 'flash-page-header',
  standalone: true,
  template: `
    <flash-breadcrumb [items]="['components', title()]" >
      <ng-template #seperator>
        <fa-icon [icon]="faChevronRight" class="text-xs"></fa-icon>
      </ng-template>
  </flash-breadcrumb>
    <h1 class="font-bold text-3xl my-3">{{ title() }}</h1>
    <p class="mb-3 text-gray-600">{{ description() }}</p>
    <flash-badge varient="secondary">
      Badge
      <fa-icon [icon]="faArrowUpRightFromSquare" class="fa-sm"></fa-icon>
    </flash-badge>
    <flash-badge class="ml-2" varient="secondary">
      Api Reference
      <fa-icon [icon]="faArrowUpRightFromSquare" class="fa-sm"></fa-icon>
    </flash-badge>
    <br />
    <br />
    <br />
  `,
  imports: [BadgeComponent, FontAwesomeModule, BreadcrumbComponent],
})
export class PageHeaderComponent {
  title = input('');
  description = input('');
  faArrowUpRightFromSquare = faArrowUpRightFromSquare;
  faChevronRight = faChevronRight;
}
