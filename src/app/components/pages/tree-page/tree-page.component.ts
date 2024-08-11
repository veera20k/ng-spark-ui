import { Component } from '@angular/core';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { PreviewCodeTabsComponent } from "../../shared/preview-code-tabs/preview-code-tabs.component";
import { TreeComponent } from "../../ui/tree/tree.component";
import { Tree } from '../../../core/models/tree.model';

@Component({
  selector: 'flash-tree-page',
  standalone: true,
  template: `
    <flash-page-header title="Tree" description="display Data in tree format.">
    </flash-page-header>
    <flash-preview-code-tabs>
      <flash-tree slot="preview" [items]="items" />
    </flash-preview-code-tabs>
  `,
  imports: [PageHeaderComponent, PreviewCodeTabsComponent, TreeComponent],
})
export class TreePageComponent {
  items: Tree[] = [
    {
      name: 'Item 1',
      children: [
        { name: 'child1', children: [{ name: 'child3' }] },
        { name: 'child2' },
      ],
    },
    { name: 'Item 2', children: [] },
    { name: 'Item 3', children: [] },
  ];
}
