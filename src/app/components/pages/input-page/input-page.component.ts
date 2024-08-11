import { Component } from "@angular/core";
import { PageHeaderComponent } from "../page-header/page-header.component";
import { PreviewCodeTabsComponent } from "../../shared/preview-code-tabs/preview-code-tabs.component";
import { InputComponent } from "../../ui/input/input.component";

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
  </flash-preview-code-tabs>
  `,
  imports: [PageHeaderComponent, PreviewCodeTabsComponent, InputComponent],
})
export class InputPageComponent {
}