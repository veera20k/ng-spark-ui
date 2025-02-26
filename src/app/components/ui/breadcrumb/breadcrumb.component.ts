import { NgTemplateOutlet } from '@angular/common';
import {
  Component,
  computed,
  contentChild,
  input,
  TemplateRef,
} from '@angular/core';

@Component({
    selector: 'spark-breadcrumb',
    template: `
    @for (item of itemsToDisplay().items; track item; let isLast = $last; let i
    = $index) { @if ( i === 1 && itemsToDisplay().nested.length > 0) {
    <ng-content select="[slot=ellipsis]" />
    <div class="mx-2.5">
      <ng-container *ngTemplateOutlet="seperator() || noContent"></ng-container>
    </div>
    }
    {{ item }}
    @if (!isLast) {
    <div class="mx-2.5">
      <ng-container *ngTemplateOutlet="seperator() || noContent"></ng-container>
    </div>
    }
    <ng-template #noContent>
      <span class="mx-2"> > </span>
    </ng-template>
    }
  `,
    host: {
        class: 'flex flex-row text-sm text-gray-500 hover:text-gray-700 cursor-pointer',
    },
    imports: [NgTemplateOutlet]
})
export class BreadcrumbComponent {
  items = input.required<string[]>();
  seperator = contentChild<TemplateRef<unknown>>('seperator');
  max = input(3);

  itemsToDisplay = computed(() => {
    const itemsToReturn: { items: string[]; nested: string[] } = {
      items: [],
      nested: [],
    };
    const balance = this.max();
    this.items().forEach((item, index) => {
      if (index === 0) {
        itemsToReturn.items.push(item);
      } else if (index <= this.items().length - balance) {
        itemsToReturn.nested.push(item);
      } else {
        itemsToReturn.items.push(item);
      }
    });
    return itemsToReturn;
  });

  ngOnInit(): void {
    if ( this.max() < 2) {
      throw new Error('Max must be greater than 2');
    }
  }
}
