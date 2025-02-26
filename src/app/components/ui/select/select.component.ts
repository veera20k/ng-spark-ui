import { Component, inject, Input, input, model, output } from '@angular/core';
import { PopoverComponent } from '../popover/popover.component';
import { ButtonComponent } from '../button/button.component';
import { NgClass } from '@angular/common';
import { ComponentLoaderService } from '../../../core/services/component-loader/component-loader.service';
import { CheckboxComponent } from '../checkbox/checkbox.component';

type SelectOutput<T extends 'single' | 'multiple'> = T extends 'single'
  ? string
  : string[];

@Component({
    selector: 'spark-select',
    template: `
    <spark-popover [disableScroll]="true" side="bottom" [anchorWidth]="true">
      <spark-button variant="outlined" slot="trigger">
        <div class="flex justify-between p-1">
          <ng-content select="[slot=label]"></ng-content>
          <span class="rotate-90"> &#10095; </span>
        </div>
      </spark-button>
      <div
        slot="content"
        class="p-2 rounded-md bg-white shadow-sm w-full border mt-1"
      >
        <ul>
          @for (item of items(); track item.value) {
          <li
            class="cursor-pointer hover:bg-gray-100 pr-2 py-2 pl-8 text-sm relative"
            (click)="onSelect(item.value)"
          >
            @if (type() === 'single' && selected().includes(item.value)){
            <span class="absolute left-2"> &#10004; </span>
            } @if (type() === 'multiple') {
            <spark-checkbox
              class="absolute left-2 top-2.5"
              [checked]="selected().includes(item.value)"
            />
            }
            {{ item.label }}
          </li>
          }
        </ul>
      </div>
    </spark-popover>
  `,
    imports: [PopoverComponent, ButtonComponent, NgClass, CheckboxComponent]
})
export class SelectComponent<T extends 'single' | 'multiple'> {
  type = input<T>('single' as T);
  items = input.required<{ value: string; label: string }[]>();
  selectEvent = output<SelectOutput<T>>();
  selected = model<SelectOutput<T>>(
    this.type() === 'single'
      ? ('' as SelectOutput<T>)
      : ([] as unknown as SelectOutput<T>)
  );
  private cmptLoaderService = inject(ComponentLoaderService);

  onSelect(value: string) {
    if (this.type() === 'single') {
      this.selected.set(value as SelectOutput<T>);
      this.selectEvent.emit(this.selected());
      this.cmptLoaderService.close();
    } else {
      let selectedArray: string[] = [];
      if ((this.selected() as string[]).includes(value)) {
        selectedArray = (this.selected() as string[]).filter(
          (v) => v !== value
        );
      } else {
        selectedArray = [...(this.selected() as string[]), value];
      }
      this.selected.set(selectedArray as SelectOutput<T>);
      this.selectEvent.emit(this.selected());
    }
  }
}
