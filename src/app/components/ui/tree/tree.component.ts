import { Component, Input } from '@angular/core';
import { TreeItemComponent } from './tree-item.component.ts/tree-item.component';
import { Tree } from '../../../core/models/tree.model';
import { BadgeComponent } from '../badge/badge.component';

@Component({
  selector: 'spark-tree',
  standalone: true,
  template: `
    @for (item of items; track $index) {
    <spark-tree-item [disabled]="!item.children?.length">
      <ng-container slot="label">
        <span class="mr-2"> 🗀 </span>
        {{ item.name }}
      </ng-container>
      @if (item.children?.length) {
      <div class="pl-5" slot="content">
        <spark-tree [items]="item.children || []"></spark-tree>
      </div>
      }
    </spark-tree-item>
    }
  `,
  imports: [TreeItemComponent, BadgeComponent],
})
export class TreeComponent {
  @Input() items: Tree[] = [];
}
