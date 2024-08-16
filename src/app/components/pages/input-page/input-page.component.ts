import { Component } from '@angular/core';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { PreviewCodeTabsComponent } from '../../shared/preview-code-tabs/preview-code-tabs.component';
import { InputComponent } from '../../ui/input/input.component';
import { InstallationWrapComponent } from '../../shared/instllation-wrap/installation-wrap.component';
import { InstallationStepComponent } from '../../shared/installation-step/installation-step.component';

@Component({
  selector: 'flash-input-page',
  standalone: true,
  template: `
    <flash-page-header
      title="Input"
      description="An input is a component that allows the user to enter and edit text."
    ></flash-page-header>
    <flash-preview-code-tabs>
      <flash-input slot="preview">
        <ng-container slot="label"> Label </ng-container>
      </flash-input>
      <ng-container slot="ts">
        {{ currentTs }}
      </ng-container>
    </flash-preview-code-tabs>
    <flash-installation-wrap />
    <flash-installation-step [stepNumber]="2" [code]="component">
      <code slot="title"
        >Create file <span class="underline">input.component.ts</span> and copy
        and paste the following code into your components folder.</code
      >
    </flash-installation-step>
    <flash-installation-step [stepNumber]="3" [code]="baseComponent">
      <code slot="title"
        >Create file <span class="underline">input-base.component.ts</span> and
        copy and paste the following code into your components folder.</code
      >
    </flash-installation-step>
  `,
  imports: [
    PageHeaderComponent,
    PreviewCodeTabsComponent,
    InputComponent,
    InstallationWrapComponent,
    InstallationStepComponent,
  ],
})
export class InputPageComponent {
  currentTs = `
  import { Component } from "@angular/core";
  import { InputComponent } from "../../ui/input/input.component";

  @Component({
    selector: 'flash-input-page',
    standalone: true,
    template: \`
      <flash-input slot="preview">
        <ng-container slot="label"> Label </ng-container>
      </flash-input>
    \`,
    imports: [InputComponent],
  })
  export class InputPageComponent {
  }`;

  baseComponent = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'input[flashInput]',
    template: \`\`,
    standalone: true,
    host: {
      class:
        'flex h-10 w-full rounded-md border border-input bg-background px-2 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:cursor-pointer placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
    },
  })
  export class InputBaseComponent {}`;

  component = `
  import { NgClass, NgTemplateOutlet } from '@angular/common';
  import { Component, input } from '@angular/core';
  import { InputBaseComponent } from '../base/input-base/input-base.component';

  @Component({
    selector: 'flash-input',
    standalone: true,
    template: \`
      <label class="text-sm font-medium">
        <ng-content select="[slot=label]">
        </ng-content>
      </label>
      <ng-template #input let-iconPadding="iconpadding">
        <input
          flashInput
          [type]="type()"
          [placeholder]="placeholder()"
          [disabled]="disabled()"
          [value]="value()"
          [ngClass]="[iconPadding|| '', !border() ? 'border-none' : '', !outlined() ? 'focus-visible:ring-0' : '']"
        />
      </ng-template>
      @if (iconSide()) {
          <div class="relative">
              <div class="absolute top-2" [ngClass]="iconSide() === 'left' ? 'left-3' : 'right-3'">
                  <ng-content select="[slot=icon]"/>
              </div>
              <ng-container [ngTemplateOutlet]="input" [ngTemplateOutletContext]="{iconPadding: iconSide() === 'left' ? 'pl-8' : 'pr-8'}"></ng-container>
          </div>
      } @else {
          <ng-container [ngTemplateOutlet]="input"></ng-container>
      }
    \`,
    host: {
      class :"grid w-full max-w-sm items-center gap-1.5"
    },
    imports: [NgClass, NgTemplateOutlet, InputBaseComponent]
  })
  export class InputComponent {
    placeholder = input('');
    type = input('text');
    value = input('');
    disabled = input(false);
    border = input(true);
    outlined = input(false);
    iconSide = input<'left' | 'right'>('left');
  }`;
}
