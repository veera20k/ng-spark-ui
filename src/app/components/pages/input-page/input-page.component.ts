import { Component } from '@angular/core';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { PreviewCodeTabsComponent } from '../../shared/preview-code-tabs/preview-code-tabs.component';
import { InstallationWrapComponent } from '../../shared/instllation-wrap/installation-wrap.component';
import { InstallationStepComponent } from '../../shared/installation-step/installation-step.component';
import { FlashLinkComponent } from '../../shared/link/flash-link.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons/faMicrophone';
import { InputBaseComponent } from '../../ui/base/input-base/input-base.component';

@Component({
  selector: 'flash-input-page',
  standalone: true,
  template: `
    <flash-page-header
      title="Input"
      description="An input is a component that allows the user to enter and edit text."
    ></flash-page-header>
    <flash-preview-code-tabs>
      <ng-container slot="preview">
        <input flashInput type="text" placeholder="Search" />
      </ng-container>
      <ng-container slot="ts">
        {{ default }}
      </ng-container>
    </flash-preview-code-tabs>
    <flash-installation-wrap>
      <flash-installation-step [stepNumber]="2">
        <flash-link
          href="https://github.com/veera20k/flash-ui/blob/main/src/app/components/ui/input/input.component.ts"
          name="input.component.ts"
          type="components"
          slot="title"
        ></flash-link>
      </flash-installation-step>
      <flash-installation-step [stepNumber]="3">
        <flash-link
          href="https://github.com/veera20k/flash-ui/blob/main/src/app/components/ui/base/input-base/input-base.component.ts"
          name="input-base.component.ts"
          type="components"
          slot="title"
        ></flash-link>
      </flash-installation-step>
    </flash-installation-wrap>

    <br />
    <h2 class="my-1 text-xl font-bold mb-2">Examples</h2>
    <hr />
    <br />
    <h2 class="text-lg font-bold my-3">With Left Icon</h2>
    <flash-preview-code-tabs>
      <div class="relative" slot="preview">
        <fa-icon
          [icon]="faSearch"
          slot="icon"
          class="absolute top-2 left-2"
        ></fa-icon>
        <input flashInput type="text" placeholder="Search" class="pl-8" />
      </div>
      <ng-container slot="Ts">
        {{ withLeftIcon }}
      </ng-container>
    </flash-preview-code-tabs>

    <br />
    <h2 class="text-lg font-bold my-3">With Right Icon</h2>
    <flash-preview-code-tabs>
      <div class="relative" slot="preview">
        <input flashInput type="text" placeholder="Search" class="pr-8" />
        <fa-icon
          [icon]="faSearch"
          slot="icon"
          class="absolute top-2 right-2"
        ></fa-icon>
      </div>
      <ng-container slot="Ts">
        {{ withRightIcon }}
      </ng-container>
    </flash-preview-code-tabs>
  `,
  imports: [
    PageHeaderComponent,
    PreviewCodeTabsComponent,
    InstallationWrapComponent,
    InstallationStepComponent,
    FlashLinkComponent,
    FontAwesomeModule,
    InputBaseComponent,
  ],
})
export class InputPageComponent {
  faSearch = faSearch;
  faMicrophone = faMicrophone;

  default = `
  import { Component } from "@angular/core";
  import { InputComponent } from "../../ui/input/input.component";

  @Component({
    selector: 'flash-input-demo',
    standalone: true,
    template: \`
      <flash-input slot="preview">
        <ng-container slot="label"> Label </ng-container>
      </flash-input>
    \`,
    imports: [InputComponent],
  })
  export class InputDemoComponent {}`;

  withLeftIcon = `
  import { Component } from "@angular/core";
  import { InputComponent } from "../../ui/input/input.component";

  @Component({
    selector: 'flash-input-demo',
    standalone: true,
    template: \`
      <div class="relative" slot="preview">
        <fa-icon
          [icon]="faSearch"
          slot="icon"
          class="absolute top-2 left-2"
        ></fa-icon>
        <input flashInput type="text" placeholder="Search" class="pl-8" />
      </div>
    \`,
    imports: [InputComponent],
  })
  export class InputDemoComponent {}`;

  withRightIcon = `
  import { Component } from "@angular/core";
  import { InputComponent } from "../../ui/input/input.component";

  @Component({
    selector: 'flash-input-demo',
    standalone: true,
    template: \`
      <div class="relative" slot="preview">
        <input flashInput type="text" placeholder="Search" class="pr-8" />
        <fa-icon
          [icon]="faSearch"
          slot="icon"
          class="absolute top-2 right-2"
        ></fa-icon>
      </div>
    \`,
    imports: [InputComponent],
  })
  export class InputDemoComponent {}`;
}
