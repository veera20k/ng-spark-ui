import { Component, signal } from '@angular/core';
import { PreviewCodeTabsComponent } from '../../shared/preview-code-tabs/preview-code-tabs.component';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { TabComponent } from '../../ui/tab/tab.component';

@Component({
  selector: 'flash-tab-page',
  template: `
    <flash-page-header
      title="Tab"
      description="A tab is a navigation element that allows the user to navigate between different views or screens."
    ></flash-page-header>
    <flash-preview-code-tabs>
      <ng-container slot="preview">
        <flash-tab [items]="['one', 'two', 'three']" (onTabeSwitch)="onTabeSwitch($event)">
          @switch (activeTab()) { @case('one') {
          <p>One</p>
          } @case('two') {
          <p>Two</p>
          } @default {
            <p>Three</p>
          } }
        </flash-tab>
      </ng-container>
    </flash-preview-code-tabs>
  `,
  standalone: true,
  imports: [PreviewCodeTabsComponent, PageHeaderComponent, TabComponent],
})
export class TabPageComponent {
  activeTab = signal('one');

  onTabeSwitch(tab: string): void {
    this.activeTab.set(tab);
  }
}
