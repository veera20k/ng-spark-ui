import { Component } from '@angular/core';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { PreviewCodeTabsComponent } from '../../shared/preview-code-tabs/preview-code-tabs.component';
import { SelectComponent } from '../../ui/select/select.component';
import { InstallationWrapComponent } from "../../shared/instllation-wrap/installation-wrap.component";
import { InstallationStepComponent } from "../../shared/installation-step/installation-step.component";

@Component({
  selector: 'flash-select-page',
  standalone: true,
  template: `
    <flash-page-header
      title="Input"
      description="An input is a component that allows the user to enter and edit text."
    ></flash-page-header>
    <flash-preview-code-tabs>
      <flash-select
        slot="preview"
        [items]="[
          { label: 'Item 1', value: '1' },
          { label: 'Item 2', value: '2' },
          { label: 'Item 3', value: '3' },
          { label: 'Item 4', value: '4' },
          { label: 'Item 5', value: '5' }
        ]"
        type="single"
      >
        <div slot="label" class="pr-24">Select...</div>
      </flash-select>
      <ng-container slot="ts">{{currentTs}}</ng-container>
    </flash-preview-code-tabs>
    <flash-installation-wrap />
    <flash-installation-step [stepNumber]="2" [code]="component">
      <code slot="title"
        >Create file <span class="underline">tab.component.ts</span> and
        copy and paste the following code into your components folder.</code
      >
    </flash-installation-step>
  `,
  imports: [PageHeaderComponent, PreviewCodeTabsComponent, SelectComponent, InstallationWrapComponent, InstallationStepComponent],
})
export class SelectPageComponent {

  currentTs = `
  import { Component } from '@angular/core';
  import { SelectComponent } from '../../ui/select/select.component';

  @Component({
    selector: 'flash-select',
    standalone: true,
    template: \`
      <flash-select
        [items]="[
          { label: 'Item 1', value: '1' },
          { label: 'Item 2', value: '2' },
          { label: 'Item 3', value: '3' },
          { label: 'Item 4', value: '4' },
          { label: 'Item 5', value: '5' }
        ]"
        type="single"
      >
        <div slot="label" class="pr-24">Select...</div>
      </flash-select>
    \`,
    imports: [SelectComponent],
  })
  export class SelectComponent {}`;

  component = `
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
    selector: 'flash-select',
    template: \`
      <flash-popover [disableScroll]="true" side="bottom" [anchorWidth]="true">
        <flash-button variant="outlined" slot="trigger">
          <div class="flex justify-between p-1">
            <ng-content select="[slot=label]"></ng-content>
            <span class="rotate-90"> &#10095; </span>
          </div>
        </flash-button>
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
              <flash-checkbox
                class="absolute left-2 top-2.5"
                [checked]="selected().includes(item.value)"
              />
              }
              {{ item.label }}
            </li>
            }
          </ul>
        </div>
      </flash-popover>
    \`,
    standalone: true,
    imports: [PopoverComponent, ButtonComponent, NgClass, CheckboxComponent],
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
  }`;
}
