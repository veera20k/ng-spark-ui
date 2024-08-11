import { Component, inject, TemplateRef } from "@angular/core";
import { ComponentLoaderService } from "../../../core/services/component-loader/component-loader.service";
import { PreviewCodeTabsComponent } from "../../shared/preview-code-tabs/preview-code-tabs.component";
import { ButtonComponent } from "../../ui/button/button.component";
import { ToastComponent } from "../../ui/toast/toast.component";
import { PageHeaderComponent } from "../page-header/page-header.component";
import { ToasterService } from "../../../core/services/toaster/toaster.service";

@Component({
  selector: 'flash-toaster-page',
  standalone: true,
  template: `
  <flash-page-header
      title="Toaster"
      description="A toaster is a small pop-up window that displays a brief message in response to a user action."
    ></flash-page-header>
    <flash-preview-code-tabs>
      <flash-button
        variant="outlined"
        slot="preview"
        (clickEvent)="open( $event)"
        >Open Toast</flash-button
      >
    </flash-preview-code-tabs>
  `,
  imports: [
    PageHeaderComponent,
    PreviewCodeTabsComponent,
    ButtonComponent,
    ToastComponent,
  ],
})
export class ToasterPageComponent {
  private toasterService = inject(ToasterService);

  open(event: MouseEvent) {
    this.toasterService.open(event, {
      title: 'My Toaster',
      description: 'This is a toaster description text that can be long or short',
      actionLabel: 'Try it',
      actionVariant: 'primary',
    });
  }
}