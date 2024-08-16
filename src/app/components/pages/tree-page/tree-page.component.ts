import { Component } from '@angular/core';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { PreviewCodeTabsComponent } from "../../shared/preview-code-tabs/preview-code-tabs.component";
import { TreeComponent } from "../../ui/tree/tree.component";
import { Tree } from '../../../core/models/tree.model';
import { InstallationWrapComponent } from "../../shared/instllation-wrap/installation-wrap.component";
import { InstallationStepComponent } from "../../shared/installation-step/installation-step.component";

@Component({
  selector: 'flash-tree-page',
  standalone: true,
  template: `
    <flash-page-header title="Tree" description="display Data in tree format.">
    </flash-page-header>
    <flash-preview-code-tabs>
      <flash-tree slot="preview" [items]="items" />
      <ng-container slot="ts">
        {{ currentTs }}
      </ng-container>
    </flash-preview-code-tabs>
    <flash-installation-wrap />
    <flash-installation-step [stepNumber]="2" [code]="component">
      <code slot="title"
        >Create file <span class="underline">tree.component.ts</span> and
        copy and paste the following code into your components folder.</code
      >
    </flash-installation-step>
    <flash-installation-step [stepNumber]="3" [code]="treeItemComponent">
      <code slot="title"
        >Create file <span class="underline">tree-item.component.ts</span> and
        copy and paste the following code into your components folder.</code
      >
    </flash-installation-step>
  `,
  imports: [PageHeaderComponent, PreviewCodeTabsComponent, TreeComponent, InstallationWrapComponent, InstallationStepComponent],
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
    selector: 'flash-tree',
    standalone: true,
    template: \`
      <flash-preview-code-tabs>
        <flash-tree slot="preview" [items]="items" />
      </flash-preview-code-tabs>
    \`,
    imports: [TreeComponent],
  })
  export class TreeComponent {
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
    selector: 'flash-tree',
    standalone: true,
    template: \`
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
    selector: 'flash-tree-item',
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
