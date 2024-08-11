import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';
import { TreeItemComponent } from './tree-item.component.ts/tree-item.component';
import { faFolder } from '@fortawesome/free-regular-svg-icons/faFolder';
import { Tree } from '../../../core/models/tree.model';
import { BadgeComponent } from '../badge/badge.component';

@Component({
  selector: 'flash-tree',
  standalone: true,
  template: `
    @for (item of items; track $index) {
    <flash-tree-item [disabled]="!item.children?.length">
      <ng-container slot="label">
        <span class="mr-2">
          <fa-icon [icon]="faFolder" class="fa-sm m-auto"></fa-icon>
        </span>
        {{ item.name }}
      </ng-container>
      <fa-icon
        [icon]="faChevronDown"
        class="m-auto fa-xs transition-all"
        slot="trigger"
      ></fa-icon>
      @if (item.children?.length) {
      <div class="pl-5" slot="content">
        <flash-tree [items]="item.children || []"></flash-tree>
      </div>
      }
    </flash-tree-item>
    }
  `,
  imports: [
    FontAwesomeModule,
    TreeItemComponent,
    BadgeComponent,
  ],
})
export class TreeComponent {
  @Input() items: Tree[] = [];

  faChevronDown = faChevronDown;
  faFolder = faFolder;
}
