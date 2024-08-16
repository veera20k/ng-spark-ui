import { Component, signal } from '@angular/core';
import { PreviewCodeTabsComponent } from '../../shared/preview-code-tabs/preview-code-tabs.component';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { TabComponent } from '../../ui/tab/tab.component';
import { InstallationStepComponent } from "../../shared/installation-step/installation-step.component";
import { InstallationWrapComponent } from "../../shared/instllation-wrap/installation-wrap.component";

@Component({
  selector: 'flash-tab-page',
  template: `
    <flash-page-header
      title="Tab"
      description="A tab is a navigation element that allows the user to navigate between different views or screens."
    ></flash-page-header>
    <flash-preview-code-tabs>
      <flash-tab [items]="['one', 'two', 'three']" (onTabeSwitch)="onTabeSwitch($event)" slot="preview">
        @switch (activeTab()) { @case('one') {
        <p>One</p>
        } @case('two') {
        <p>Two</p>
        } @default {
          <p>Three</p>
        } }
      </flash-tab>
      <ng-container slot="ts">
        {{ currentTs }}
      </ng-container>
    </flash-preview-code-tabs>
    <flash-installation-wrap />
    <flash-installation-step [stepNumber]="2" [code]="component">
      <code slot="title"
        >Create file <span class="underline">tab.component.ts</span> and
        copy and paste the following code into your components folder.</code
      >
    </flash-installation-step>
  `,
  standalone: true,
  imports: [PreviewCodeTabsComponent, PageHeaderComponent, TabComponent, InstallationStepComponent, InstallationWrapComponent],
})
export class TabPageComponent {
  activeTab = signal('one');

  onTabeSwitch(tab: string): void {
    this.activeTab.set(tab);
  }

  currentTs = `
  import { Component, signal } from '@angular/core';
  import { TabComponent } from '../../ui/tab/tab.component';

  @Component({
    selector: 'flash-tab',
    template: \`
      <flash-tab [items]="['one', 'two', 'three']" (onTabeSwitch)="onTabeSwitch($event)"  slot="preview">
        @switch (activeTab()) { @case('one') {
        <p>One</p>
        } @case('two') {
        <p>Two</p>
        } @default {
          <p>Three</p>
        } }
      </flash-tab>
    \`,
    standalone: true,
    imports: [PreviewCodeTabsComponent, PageHeaderComponent, TabComponent],
  })
  export class TabPageComponent {
    activeTab = signal('one');

    onTabeSwitch(tab: string): void {
      this.activeTab.set(tab);
    }
  }`;

  component = `
  import { NgClass, NgTemplateOutlet, TitleCasePipe } from '@angular/common';
  import { Component, input, output, signal } from '@angular/core';

  @Component({
    selector: 'flash-tab',
    standalone: true,
    template: \`
    <div class="flex gap-4 border-b">
      <ng-template #tabItem let-tab let-disabled="disabled" let-index="index">
        <span
          class="px-3 pb-2 cursor-pointer select-none"
          [ngClass]="{ 'border-b-2 border-black': tab === activeTab(), 'opacity-50 pointer-events-none': disabled }"
          (click)="!disabled && onTabeClick(index)"
        >
          {{tab | titlecase }}
        </span>
      </ng-template>
      @if (this.items().length) {
        @for(tab of items(); track tab; let i = $index) {
          <ng-container [ngTemplateOutlet]="tabItem" [ngTemplateOutletContext]="{ $implicit: tab, disabled: false, index: i }"></ng-container>
        }
      } @else {
        @for(tab of smartItems(); track tab.title; let i = $index) {
          <ng-container [ngTemplateOutlet]="tabItem" [ngTemplateOutletContext]="{ $implicit: tab.title, disabled: tab.disabled, index: i }"></ng-container>
        }
      }
    </div>
      <ng-content></ng-content>
    \`,
    imports: [NgClass, TitleCasePipe, NgTemplateOutlet],
  })
  export class TabComponent {
    items = input<string[]>([]);
    smartItems = input<{title: string; disabled?: boolean}[]>([]);
    initialTab = input<string>('');
    activeTab = signal('');
    onTabeSwitch = output<string>();

    ngOnInit(): void {
      if (this.items().length === 0 && this.smartItems().length === 0) {
        throw new Error('You must provide at least one item or smartItem');
      }
      if (this.items().length) {
        this.activeTab.set(this.initialTab() || this.items()[0] );
      } else {
        this.activeTab.set( this.initialTab() || this.smartItems()?.[0].title || '' );
      }
    }

    onTabeClick(i: number): void {
      let tab = '';
      if (this.items().length) {
        tab = this.items()[i];
      } else {
        tab = this.smartItems()?.[i].title || '';
      }
      this.activeTab.set(tab);
      this.onTabeSwitch.emit(tab);
    }
  }`;
  
}
