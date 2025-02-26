import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons/faEllipsis';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { PreviewCodeTabsComponent } from '../../shared/preview-code-tabs/preview-code-tabs.component';
import { BreadcrumbComponent } from '../../ui/breadcrumb/breadcrumb.component';
import { InstallationWrapComponent } from '../../shared/instllation-wrap/installation-wrap.component';
import { InstallationStepComponent } from '../../shared/installation-step/installation-step.component';
import { SparkLinkComponent } from '../../shared/link/spark-link.component';
import { NotesComponent } from "../../shared/notes/notes.component";

@Component({
    selector: 'spark-breadcrumb-page',
    template: `
    <spark-page-header
      title="Badge"
      description="A badge is a small label used to call out new or unread information."
    ></spark-page-header>
    <spark-preview-code-tabs>
      <spark-breadcrumb
        slot="preview"
        [items]="['components', 'breadcrumb', 'slot']"
        [max]="2"
      >
        <ng-template #seperator>
          <fa-icon [icon]="faChevronRight" class="text-xs"></fa-icon>
        </ng-template>
        <fa-icon [icon]="faEllipsis" slot="ellipsis"></fa-icon>
      </spark-breadcrumb>
      <ng-container slot="ts">
        {{ currentTs }}
      </ng-container>
    </spark-preview-code-tabs>
    <spark-installation-wrap>
      <spark-installation-step [stepNumber]="2">
        <spark-link
          href="https://github.com/veera20k/spark-ui/blob/main/src/app/components/ui/breadcrumb/breadcrumb.component.ts"
          name="breadcrumb.component.ts"
          type="components"
          slot="title"
        ></spark-link>
      </spark-installation-step>
    </spark-installation-wrap>
    <spark-notes>
      <p>The Seperator and Ellipsis slots are Dynamic. If yo want to hardcode it please replace with your icons</p>
    </spark-notes>
  `,
    imports: [
        FontAwesomeModule,
        PageHeaderComponent,
        PreviewCodeTabsComponent,
        BreadcrumbComponent,
        InstallationWrapComponent,
        InstallationStepComponent,
        SparkLinkComponent,
        NotesComponent
    ]
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
       <spark-breadcrumb
        slot="preview"
        [items]="['components', 'breadcrumb', 'slot']"
        [max]="2"
      >
        <ng-template #seperator>
          <fa-icon [icon]="faChevronRight" class="text-xs"></fa-icon>
        </ng-template>
        <fa-icon [icon]="faEllipsis" slot="ellipsis"></fa-icon>
      </spark-breadcrumb>
    \`,
    imports: [FontAwesomeModule, BreadcrumbComponent],
  })
  export class BreadcrumbDemoComponent {
    faChevronRight = faChevronRight;
    faEllipsis = faEllipsis;
  }`;
}
