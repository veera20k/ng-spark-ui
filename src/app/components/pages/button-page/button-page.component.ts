import { Component } from "@angular/core";
import { PageHeaderComponent } from "../page-header/page-header.component";
import { PreviewCodeTabsComponent } from "../../shared/preview-code-tabs/preview-code-tabs.component";
import { ButtonComponent } from "../../ui/button/button.component";
import { InstallationWrapComponent } from "../../shared/instllation-wrap/installation-common.component";
import { InstallationStepComponent } from "../../shared/installation-step/installation-step.component";

@Component({
  selector: 'flash-button-page',
  standalone: true,
  template: `
    <flash-page-header
      title="Button"
      description="A button is a graphical control element that is used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation."
    ></flash-page-header>
    <flash-preview-code-tabs>
      <flash-button slot="preview">Button</flash-button>
      <ng-container slot="ts">
        {{defaultTs}}
      </ng-container>
    </flash-preview-code-tabs>
    <flash-installation-common/>
    <flash-installation-step [stepNumber]="2" [code]="component">
      <code slot="title"
        >Create file <span class="underline">button.component.ts</span> and copy
        and paste the following code into your components folder.</code
      >
    </flash-installation-step>
  `,
  imports: [PageHeaderComponent, PreviewCodeTabsComponent, ButtonComponent, InstallationWrapComponent, InstallationStepComponent],
})
export class ButtonPageComponent {
  defaultTs = `
  import { Component } from "@angular/core";
  import { ButtonComponent } from "../../ui/button/button.component";

  @Component({
    selector: 'app-button-demo',
    standalone: true,
    template: \` <flash-button>Button</flash-button>\`,
    imports: [ButtonComponent],
  })
  export class ButtonDemoComponent {}`;

  component = `
  import { Component, computed, input, output } from '@angular/core';
  import { ButtonBaseComponent } from '../base/button-base/button-base.component';
  import { ButtonVariant } from '../../../core/models/common.model';
  import { NgClass } from '@angular/common';

  @Component({
    selector: 'flash-button',
    standalone: true,
    template: \`
      <button flashButton [disabled]="disabled()" [ngClass]="buttonClass()" (click)="clickEvent.emit($event)">
        <ng-content/>
      </button>
    \`,
    imports: [ButtonBaseComponent, NgClass],
  })
  export class ButtonComponent {
    disabled = input(false);
    variant = input<ButtonVariant>('primary');
    clickEvent = output<MouseEvent>();

    buttonClass = computed(() => {
      switch (this.variant()) {
        case 'primary':
          return 'bg-primary text-primary-foreground hover:bg-primary/90';
        case 'secondary':
          return 'bg-secondary text-secondary-foreground hover:bg-secondary/80';
        case 'destructive':
          return 'bg-destructive text-destructive-foreground hover:bg-destructive/90';
        case 'outlined':
          return 'border border-input bg-background hover:bg-accent hover:text-accent-foreground';
        case 'ghost':
          return 'hover:bg-accent hover:text-accent-foreground';
        case 'link':
          return 'bg-transparent text-primary hover:underline focus:underline';
      }
    });
  }`;
}