import { Component, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowUpRightFromSquare, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { BreadcrumbComponent } from '../../ui/breadcrumb/breadcrumb.component';

@Component({
    selector: 'spark-page-header',
    template: `
    <spark-breadcrumb [items]="['components', title()]" >
      <ng-template #seperator>
        <fa-icon [icon]="faChevronRight" class="text-xs"></fa-icon>
      </ng-template>
  </spark-breadcrumb>
    <h1 class="font-bold text-3xl my-3">{{ title() }}</h1>
    <p class="mb-3 text-gray-600">{{ description() }}</p>
    <br />
  `,
    imports: [FontAwesomeModule, BreadcrumbComponent]
})
export class PageHeaderComponent {
  title = input('');
  description = input('');
  faArrowUpRightFromSquare = faArrowUpRightFromSquare;
  faChevronRight = faChevronRight;
}
