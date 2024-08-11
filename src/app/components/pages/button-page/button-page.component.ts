import { Component } from "@angular/core";
import { PageHeaderComponent } from "../page-header/page-header.component";
import { PreviewCodeTabsComponent } from "../../shared/preview-code-tabs/preview-code-tabs.component";
import { ButtonComponent } from "../../ui/button/button.component";

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
    </flash-preview-code-tabs>
  `,
  imports: [PageHeaderComponent, PreviewCodeTabsComponent, ButtonComponent],
})
export class ButtonPageComponent {}