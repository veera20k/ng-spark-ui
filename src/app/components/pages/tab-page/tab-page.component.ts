import { Component, signal } from '@angular/core';
import { PreviewCodeTabsComponent } from '../../shared/preview-code-tabs/preview-code-tabs.component';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { TabComponent } from '../../ui/tab/tab.component';
import { InstallationStepComponent } from '../../shared/installation-step/installation-step.component';
import { InstallationWrapComponent } from '../../shared/instllation-wrap/installation-wrap.component';
import { SparkLinkComponent } from '../../shared/link/spark-link.component';

@Component({
  selector: 'spark-tab-page',
  template: `
    <spark-page-header
      title="Tab"
      description="A tab is a navigation element that allows the user to navigate between different views or screens."
    ></spark-page-header>
    <spark-preview-code-tabs>
      <spark-tab
        [items]="['one', 'two', 'three']"
        (onTabeSwitch)="onTabeSwitch($event)"
        slot="preview"
      >
        @switch (activeTab()) { @case('one') {
        <p>One</p>
        } @case('two') {
        <p>Two</p>
        } @default {
        <p>Three</p>
        } }
      </spark-tab>
      <ng-container slot="ts">
        {{ currentTs }}
      </ng-container>
    </spark-preview-code-tabs>
    <spark-installation-wrap>
      <spark-installation-step [stepNumber]="2">
        <spark-link
          href="https://github.com/veera20k/spark-ui/blob/main/src/app/components/ui/tab/tab.component.ts"
          name="tab.component.ts"
          type="components"
          slot="title"
        ></spark-link>
      </spark-installation-step>
    </spark-installation-wrap>
  `,
  standalone: true,
  imports: [
    PreviewCodeTabsComponent,
    PageHeaderComponent,
    TabComponent,
    InstallationStepComponent,
    InstallationWrapComponent,
    SparkLinkComponent,
  ],
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
    selector: 'spark-tab-demo',
    template: \`
      <spark-tab [items]="['one', 'two', 'three']" (onTabeSwitch)="onTabeSwitch($event)"  slot="preview">
        @switch (activeTab()) { @case('one') {
        <p>One</p>
        } @case('two') {
        <p>Two</p>
        } @default {
          <p>Three</p>
        } }
      </spark-tab>
    \`,
    standalone: true,
    imports: [TabComponent],
  })
  export class TabDemoComponent {
    activeTab = signal('one');

    onTabeSwitch(tab: string): void {
      this.activeTab.set(tab);
    }
  }`;
}
