import { Component } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import { PageHeaderComponent } from "../page-header/page-header.component";
import { PreviewCodeTabsComponent } from "../../shared/preview-code-tabs/preview-code-tabs.component";
import { BreadcrumbComponent } from "../../ui/breadcrumb/breadcrumb.component";
import { InstallationWrapComponent } from "../../shared/instllation-wrap/installation-wrap.component";
import { InstallationStepComponent } from "../../shared/installation-step/installation-step.component";

@Component({
  selector: 'flash-breadcrumb-page',
  standalone: true,
  template: `
      <flash-page-header
      title="Badge"
      description="A badge is a small label used to call out new or unread information."
    ></flash-page-header>
    <flash-preview-code-tabs>
      <flash-breadcrumb slot="preview" [items]="['components', 'breadcrumb', 'slot']">
        <ng-template #seperator>
          <fa-icon [icon]="faChevronRight" class="text-xs"></fa-icon>
        </ng-template>
      </flash-breadcrumb>
      <ng-container slot="ts">
        {{currentTs}}
      </ng-container>
    </flash-preview-code-tabs>
    <flash-installation-wrap/>
    <flash-installation-step [stepNumber]="2" [code]="component">
      <code slot="title"
        >Create file <span class="underline">breadcrumb.component.ts</span> and copy
        and paste the following code into your components folder.</code
      >
    </flash-installation-step>
  `,
  imports: [FontAwesomeModule, PageHeaderComponent, PreviewCodeTabsComponent, BreadcrumbComponent, InstallationWrapComponent, InstallationStepComponent],
})
export class BreadcrumbPageComponent {
  faChevronRight = faChevronRight;

  currentTs = `
  import { Component } from "@angular/core";
  import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
  import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
  import { BreadcrumbComponent } from "../../ui/breadcrumb/breadcrumb.component";

  @Component({
    selector: 'app-breadcrumb-demo',
    standalone: true,
    template: \`
      <flash-breadcrumb slot="preview" [items]="['components', 'breadcrumb', 'slot']">
        <ng-template #seperator>
          <fa-icon [icon]="faChevronRight" class="text-xs"></fa-icon>
        </ng-template>
      </flash-breadcrumb>
    \`,
    imports: [FontAwesomeModule, BreadcrumbComponent],
  })
  export class BreadcrumbDemoComponent {
    faChevronRight = faChevronRight;
  }`;

  component = `
  import { NgTemplateOutlet } from '@angular/common';
  import {
    Component,
    computed,
    contentChild,
    input,
    TemplateRef,
  } from '@angular/core';

  @Component({
    selector: 'flash-breadcrumb',
    standalone: true,
    template: \`
      @for (item of itemsToDisplay().items; track item; let isLast = $last; let i= $index) { 
      @if ( i === 1 && itemsToDisplay().nested.length > 0) {
      <ng-content select="[slot=ellipsis]" />
      <div class="mx-2.5">
        <ng-container *ngTemplateOutlet="seperator() || noContent"></ng-container>
      </div>
      }
      {{ item }}
      @if (!isLast) {
      <div class="mx-2.5">
        <ng-container *ngTemplateOutlet="seperator() || noContent"></ng-container>
      </div>
      }
      <ng-template #noContent>
        <span class="mx-2"> > </span>
      </ng-template>
      }
    \`,
    host: {
      class:
        'flex flex-row text-sm text-gray-500 hover:text-gray-700 cursor-pointer',
    },
    imports: [NgTemplateOutlet],
  })
  export class BreadcrumbComponent {
    items = input.required<string[]>();
    seperator = contentChild<TemplateRef<unknown>>('seperator');
    max = input(4);

    itemsToDisplay = computed(() => {
      const itemsToReturn: { items: string[]; nested: string[] } = {
        items: [],
        nested: [],
      };
      const balance = this.max();
      this.items().forEach((item, index) => {
        if (index === 0) {
          itemsToReturn.items.push(item);
        } else if (index <= this.items().length - balance) {
          itemsToReturn.nested.push(item);
        } else {
          itemsToReturn.items.push(item);
        }
      });
      return itemsToReturn;
    });
  }`;
} 