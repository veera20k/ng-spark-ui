import { Component } from '@angular/core';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { PreviewCodeTabsComponent } from '../../shared/preview-code-tabs/preview-code-tabs.component';
import { TreeComponent } from '../../ui/tree/tree.component';
import { Tree } from '../../../core/models/tree.model';
import { InstallationWrapComponent } from '../../shared/instllation-wrap/installation-wrap.component';
import { InstallationStepComponent } from '../../shared/installation-step/installation-step.component';
import { SparkLinkComponent } from '../../shared/link/spark-link.component';
import { NotesComponent } from "../../shared/notes/notes.component";

@Component({
  selector: 'spark-tree-page',
  standalone: true,
  template: `
    <spark-page-header title="Tree" description="The TreeComponent displays hierarchical data in a folder-like structure, where each node can represent a folder or item. It uses arrows or indicators to show expandable and collapsible sections, allowing users to navigate through nested levels of content efficiently.">
    </spark-page-header>
    <spark-preview-code-tabs>
      <spark-tree slot="preview" [items]="items" />
      <ng-container slot="ts">
        {{ currentTs }}
      </ng-container>
    </spark-preview-code-tabs>
    <spark-installation-wrap>
      <spark-installation-step [stepNumber]="2">
        <spark-link
          href="https://github.com/veera20k/spark-ui/blob/main/src/app/components/ui/tree/tree.component.ts"
          name="tree.component.ts"
          type="components"
          slot="title"
        ></spark-link>
      </spark-installation-step>
      <spark-installation-step [stepNumber]="3">
        <spark-link
          href="https://github.com/veera20k/spark-ui/blob/main/src/app/components/ui/tree/tree-item.component.ts"
          name="tree-item.component.ts"
          type="components"
          slot="title"
        ></spark-link>
      </spark-installation-step>
    </spark-installation-wrap>
    <spark-notes>
      <p>Current lazy loading is not supported. working on it.</p>
    </spark-notes>
  `,
  imports: [
    PageHeaderComponent,
    PreviewCodeTabsComponent,
    TreeComponent,
    InstallationWrapComponent,
    InstallationStepComponent,
    SparkLinkComponent,
    NotesComponent
],
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

  currentTs = `
  import { Component } from '@angular/core';
  import { TreeComponent } from "../../ui/tree/tree.component";
  import { Tree } from '../../../core/models/tree.model';

  @Component({
    selector: 'spark-tree-demo',
    standalone: true,
    template: \`
      <spark-preview-code-tabs>
        <spark-tree slot="preview" [items]="items" />
      </spark-preview-code-tabs>
    \`,
    imports: [TreeComponent],
  })
  export class TreeDemoComponent {
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
    }`;

  component = `
  import { Component, Input } from '@angular/core';
  import { TreeItemComponent } from './tree-item.component.ts/tree-item.component';
  import { Tree } from '../../../core/models/tree.model';
  import { BadgeComponent } from '../badge/badge.component';

  @Component({
    selector: 'spark-tree',
    standalone: true,
    template: \`
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
    \`,
    imports: [TreeItemComponent, BadgeComponent],
  })
  export class TreeComponent {
    @Input() items: Tree[] = [];
  }`;

  treeItemComponent = `
  import { NgClass } from '@angular/common';
  import { Component, input, output, signal } from '@angular/core';
  import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
  import { BadgeComponent } from '../../badge/badge.component';

  @Component({
    selector: 'spark-tree-item',
    standalone: true,
    template: \`
      <div class="flex pb-2">
        <ng-content select="[slot=label]" />
        <span
          (click)="toggle()"
          class="mx-2"
          [ngClass]="{ '-rotate-90': isOpen(), 'rotate-90': !isOpen(), 'opacity-50': disabled() }"
          role="button"
        >
          &#x276F;
          </span>
        <ng-content select="[slot=info]" />
      </div>
      <div class="accordion-body" [ngClass]="{ 'accordion-open': isOpen() }">
        <section class="overflow-hidden">
          <div class="m-1">
            <ng-content select="[slot=content]" />
          </div>
        </section>
      </div>
    \`,
    imports: [NgClass, BadgeComponent],
  })
  export class TreeItemComponent {
    setOpen = input(false);
    isOpen = signal(false);
    toggleEvent = output<boolean>();
    alwaysOpen = input(false);
    disabled = input(false);

    ngOnInit(): void {
      this.isOpen.set(this.setOpen() || this.alwaysOpen());
    }

    toggle() {
      if (!this.alwaysOpen() && !this.disabled()) {
        this.isOpen.set(!this.isOpen());
        this.toggleEvent.emit(this.isOpen());
      }
    }
  }`;
}
