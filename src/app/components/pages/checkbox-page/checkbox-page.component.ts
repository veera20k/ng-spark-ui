import { Component } from "@angular/core";
import { PageHeaderComponent } from "../page-header/page-header.component";
import { PreviewCodeTabsComponent } from "../../shared/preview-code-tabs/preview-code-tabs.component";
import { CheckboxComponent } from "../../ui/checkbox/checkbox.component";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { InstallationStepComponent } from "../../shared/installation-step/installation-step.component";
import { InstallationWrapComponent } from "../../shared/instllation-wrap/installation-wrap.component";

@Component({
  selector: 'flash-checkbox-page',
  standalone: true,
  template: `
    <flash-page-header
      title="Checkbox"
      description="A checkbox is a graphical control element that allows the user to select one or more items from a list of options."
    ></flash-page-header>
    <flash-preview-code-tabs>
      <flash-checkbox slot="preview">
          <fa-icon [icon]="faCheck" slot="icon" class="fa-xs text-white"></fa-icon>
      </flash-checkbox>
      <ng-container slot="ts">
        {{currentTs}}
      </ng-container>
    </flash-preview-code-tabs>
    <flash-installation-wrap/>
    <flash-installation-step [stepNumber]="2" [code]="component">
      <code slot="title"
        >Create file <span class="underline">button.component.ts</span> and copy
        and paste the following code into your components folder.</code
      >
    </flash-installation-step>
  `,
  imports: [PageHeaderComponent, PreviewCodeTabsComponent, CheckboxComponent, FontAwesomeModule, InstallationStepComponent, InstallationWrapComponent],
})
export class CheckboxPageComponent {
  faCheck = faCheck;

  currentTs = `
  import { Component } from "@angular/core";
  import { CheckboxComponent } from "../../ui/checkbox/checkbox.component";
  import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
  import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

  @Component({
    selector: 'flash-checkbox',
    standalone: true,
    template: \`
        <flash-checkbox slot="preview">
            <fa-icon [icon]="faCheck" slot="icon" class="fa-xs text-white"></fa-icon>
      </flash-preview-code-tabs>
    \`,
    imports: [CheckboxComponent, FontAwesomeModule],
  })
  export class CheckboxComponent {
    faCheck = faCheck;
  }`;

  component = `
  import { NgClass } from '@angular/common';
  import { Component, input, output } from '@angular/core';
  import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
  import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';

  @Component({
    selector: 'flash-checkbox',
    standalone: true,
    template: \`
      <label
        [for]="htmlFor()"
        class="relative flex items-center p-3 rounded-full cursor-pointer"
      >
        <input
          type="checkbox"
          class="peer relative appearance-none w-4 h-4 border rounded shrink-0 cursor-pointer border-primary transition-all checked:bg-gray-900 checked:border-gray-900 checked:before:bg-gray-900 disabled:cursor-not-allowed disabled:opacity-50"
          [id]="htmlFor()"
          [disabled]="disabled()"
          [checked]="checked()"
          (change)="onCheck(checkbox.checked)"
          #checkbox
        />
        <span
          class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100"
        >
          <fa-icon [icon]="faCheck" class="fa-xs"></fa-icon>
        </span>
      </label>
      <label
        [for]="htmlFor()"
        class="cursoir-pointer select-none"
        [ngClass]="{ 'opaccity-50 cursor-not-allowed': disabled() }"
        >{{ label() }}</label
      >
    \`,
    host: {
      class: 'inline-flex items-center gap-[8px]',
    },
    imports: [FontAwesomeModule, NgClass],
  })
  export class CheckboxComponent {
    htmlFor = input('');
    disabled = input(false);
    checked = input(false);
    changeEvent = output<boolean>();
    faCheck = faCheck;
    label = input('');

    onCheck(value: boolean) {
      this.changeEvent.emit(value);
    }
  }`;
}