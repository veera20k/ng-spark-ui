import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons/faEllipsis';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { PreviewCodeTabsComponent } from '../../shared/preview-code-tabs/preview-code-tabs.component';
import { BreadcrumbComponent } from '../../ui/breadcrumb/breadcrumb.component';
import { InstallationWrapComponent } from '../../shared/instllation-wrap/installation-wrap.component';
import { InstallationStepComponent } from '../../shared/installation-step/installation-step.component';
import { FlashLinkComponent } from '../../shared/link/flash-link.component';
import { NotesComponent } from "../../shared/notes/notes.component";

@Component({
  selector: 'flash-breadcrumb-page',
  standalone: true,
  template: `
    <flash-page-header
      title="Badge"
      description="A badge is a small label used to call out new or unread information."
    ></flash-page-header>
    <flash-preview-code-tabs>
      <flash-breadcrumb
        slot="preview"
        [items]="['components', 'breadcrumb', 'slot']"
        [max]="2"
      >
        <ng-template #seperator>
          <fa-icon [icon]="faChevronRight" class="text-xs"></fa-icon>
        </ng-template>
        <fa-icon [icon]="faEllipsis" slot="ellipsis"></fa-icon>
      </flash-breadcrumb>
      <ng-container slot="ts">
        {{ currentTs }}
      </ng-container>
    </flash-preview-code-tabs>
    <flash-installation-wrap>
      <flash-installation-step [stepNumber]="2">
        <flash-link
          href="https://github.com/veera20k/flash-ui/blob/main/src/app/components/ui/breadcrumb/breadcrumb.component.ts"
          name="breadcrumb.component.ts"
          type="components"
          slot="title"
        ></flash-link>
      </flash-installation-step>
    </flash-installation-wrap>
    <flash-notes>
      <p>The Seperator and Ellipsis slots are Dynamic. If yo want to hardcode it please replace with your icons</p>
    </flash-notes>
  `,
  imports: [
    FontAwesomeModule,
    PageHeaderComponent,
    PreviewCodeTabsComponent,
    BreadcrumbComponent,
    InstallationWrapComponent,
    InstallationStepComponent,
    FlashLinkComponent,
    NotesComponent
],
})
export class BreadcrumbPageComponent {
  faChevronRight = faChevronRight;
  faEllipsis = faEllipsis;

  currentTs = `
  import { Component } from "@angular/core";
  import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
  import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
  import { faEllipsis } from "@fortawesome/free-solid-svg-icons/faEllipsis";
  import { BreadcrumbComponent } from "../../ui/breadcrumb/breadcrumb.component";

  @Component({
    selector: 'app-breadcrumb-demo',
    standalone: true,
    template: \`
       <flash-breadcrumb
        slot="preview"
        [items]="['components', 'breadcrumb', 'slot']"
        [max]="2"
      >
        <ng-template #seperator>
          <fa-icon [icon]="faChevronRight" class="text-xs"></fa-icon>
        </ng-template>
        <fa-icon [icon]="faEllipsis" slot="ellipsis"></fa-icon>
      </flash-breadcrumb>
    \`,
    imports: [FontAwesomeModule, BreadcrumbComponent],
  })
  export class BreadcrumbDemoComponent {
    faChevronRight = faChevronRight;
    faEllipsis = faEllipsis;
  }`;
}
