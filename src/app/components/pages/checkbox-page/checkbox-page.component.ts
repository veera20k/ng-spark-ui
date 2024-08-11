import { Component } from "@angular/core";
import { PageHeaderComponent } from "../page-header/page-header.component";
import { PreviewCodeTabsComponent } from "../../shared/preview-code-tabs/preview-code-tabs.component";
import { CheckboxComponent } from "../../ui/checkbox/checkbox.component";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

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
    </flash-preview-code-tabs>
  `,
  imports: [PageHeaderComponent, PreviewCodeTabsComponent, CheckboxComponent, FontAwesomeModule],
})
export class CheckboxPageComponent {
  faCheck = faCheck;
}