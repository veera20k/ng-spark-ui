import { Component } from '@angular/core';
import { PreviewCodeTabsComponent } from '../../shared/preview-code-tabs/preview-code-tabs.component';
import { RadioComponent } from '../../ui/radio/radio.component';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { InstallationWrapComponent } from "../../shared/instllation-wrap/installation-wrap.component";
import { InstallationStepComponent } from "../../shared/installation-step/installation-step.component";

@Component({
  selector: 'flash-radio-page',
  standalone: true,
  template: `
    <flash-page-header
      title="Radio"
      description="A radio is a graphical control element that allows the user to select one option from a list of options."
    ></flash-page-header>
    <flash-preview-code-tabs>
      <div slot="preview" class="flex flex-col gap-2">
        <flash-radio htmlFor="radio-1" name="radio-group"> Label 1</flash-radio>
        <flash-radio htmlFor="radio-2" name="radio-group"> Label 2</flash-radio>
        <flash-radio htmlFor="radio-3" name="radio-group"> Label 3</flash-radio>
      </div>
      <ng-container slot="ts">
        {{ currentTs }}
      </ng-container>
    </flash-preview-code-tabs>
    <flash-installation-wrap />
    <flash-installation-step [stepNumber]="2" [code]="component">
      <code slot="title"
        >Create file <span class="underline">popover.component.ts</span> and
        copy and paste the following code into your components folder.</code
      >
    </flash-installation-step>
  `,
  imports: [PageHeaderComponent, PreviewCodeTabsComponent, RadioComponent, InstallationWrapComponent, InstallationStepComponent],
})
export class RadioPageComponent {
  currentTs = `
  import { Component } from '@angular/core';
  import { RadioComponent } from '../../ui/radio/radio.component';

  @Component({
    selector: 'flash-radio',
    standalone: true,
    template: \`
      <div class="flex flex-col gap-2">
        <flash-radio htmlFor="radio-1" name="radio-group"> Label 1</flash-radio>
        <flash-radio htmlFor="radio-2" name="radio-group"> Label 2</flash-radio>
        <flash-radio htmlFor="radio-3" name="radio-group"> Label 3</flash-radio>
      </div>
    \`,
    imports: [
      RadioComponent,
    ],
  })
  export class RadioComponent {}`;

component = `
  import { Component, input } from "@angular/core";

  @Component({
    selector: 'flash-radio',
    standalone: true,
    template: \`
        <input
          type="radio"
          class="h-4 w-4 rounded-full border border-primary accent-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          [checked]="checked()"
          [disabled]="disabled()"
          [value]="value()"
          (change)="change($event)"
          [id]="htmlFor()"
          [name]="name()"
        />
        <label [for]="htmlFor()">
          <ng-content></ng-content>
        </label>
    \`,
    host: {
      class: 'flex items-center gap-3'
    }
  })
  export class RadioComponent {
    checked = input(false);
    disabled = input(false);
    value = input('');
    htmlFor = input('');
    name = input('');

    change(event: Event) {
    }
  }`;
}
