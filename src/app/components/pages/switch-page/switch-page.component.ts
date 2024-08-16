import { Component } from "@angular/core";
import { PreviewCodeTabsComponent } from "../../shared/preview-code-tabs/preview-code-tabs.component";
import { SwitchComponent } from "../../ui/switch/switch.component";
import { PageHeaderComponent } from "../page-header/page-header.component";
import { InstallationWrapComponent } from "../../shared/instllation-wrap/installation-wrap.component";
import { InstallationStepComponent } from "../../shared/installation-step/installation-step.component";

@Component({
  selector: 'flash-switch-page',
  standalone: true,
  template: `
    <flash-page-header
      title="Switch"
      description="A switch is a toggle that allows the user to turn an option on or off."
    ></flash-page-header>
    <flash-preview-code-tabs>
      <flash-switch slot="preview"> Switch </flash-switch>
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
  imports: [
    PageHeaderComponent,
    PreviewCodeTabsComponent,
    SwitchComponent,
    InstallationWrapComponent,
    InstallationStepComponent
],
})
export class SwitchPageComponent {
  currentTs = `
  import { Component } from '@angular/core';
  import { SwitchComponent } from '../../ui/switch/switch.component';

  @Component({
    selector: 'flash-switch',
    standalone: true,
    template: \`
      <flash-switch> Switch </flash-switch>
    \`,
    imports: [
      SwitchComponent,
    ],
  })
  export class SwitchComponent {}`;

  component = `
  import { Component, input, output } from '@angular/core';

  @Component({
    selector: 'flash-switch',
    standalone: true,
    template: \`
      <label class="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          class="sr-only peer"
          [checked]="checked()"
          [disabled]="disabled()"
          (change)="changeEvent.emit($event)"
        />
        <div
          class="relative w-11 h-6 bg-gray-200  rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-primary"
        ></div>
        <span class="ms-3 text-sm font-medium text-gray-900 ">
          <ng-content></ng-content>
        </span>
      </label>
    \`,
  })
  export class SwitchComponent {
    checked = input(false);
    disabled = input(false);
    changeEvent = output<Event>();
  }`;
}