import { Component, Input } from '@angular/core';
import { TreeItemComponent } from './tree-item.component.ts/tree-item.component';
import { Tree } from '../../../core/models/tree.model';
import { BadgeComponent } from '../badge/badge.component';

@Component({
  selector: 'flash-tree',
  standalone: true,
  template: `
    @for (item of items; track $index) {
    <flash-tree-item [disabled]="!item.children?.length">
      <ng-container slot="label">
        <span class="mr-2"> 🗀 </span>
        {{ item.name }}
      </ng-container>
      @if (item.children?.length) {
      <div class="pl-5" slot="content">
        <flash-tree [items]="item.children || []"></flash-tree>
      </div>
      }
    </flash-tree-item>
    }
  `,
  imports: [TreeItemComponent, BadgeComponent],
})
export class TreeComponent {
  @Input() items: Tree[] = [];
}
