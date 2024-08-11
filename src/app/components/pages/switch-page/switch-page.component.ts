import { Component } from "@angular/core";
import { PreviewCodeTabsComponent } from "../../shared/preview-code-tabs/preview-code-tabs.component";
import { SwitchComponent } from "../../ui/switch/switch.component";
import { PageHeaderComponent } from "../page-header/page-header.component";

@Component({
  selector: 'flash-switch-page',
  standalone: true,
  template: `
    <flash-page-header
      title="Switch"
      description="A switch is a toggle that allows the user to turn an option on or off."
    ></flash-page-header>
    <flash-preview-code-tabs>
      <ng-container slot="preview">
        <flash-switch></flash-switch>
      </ng-container>
    </flash-preview-code-tabs>
  `,
  imports: [
    PageHeaderComponent,
    PreviewCodeTabsComponent,
    SwitchComponent,
  ],
})
export class SwitchPageComponent {}