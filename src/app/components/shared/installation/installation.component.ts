import { Component, input, model } from '@angular/core';
import { HighlighterComponent } from '../highlighter/highlighter.component';
import { TabComponent } from '../../ui/tab/tab.component';

@Component({
  selector: 'flash-installation',
  template: `
     <br>
    <h2 class="my-3 text-xl font-semibold">Installation</h2>
    <hr/>
    <br>
    <ng-content select="[slot=component]"></ng-content>
    @if (this.provideUsage()) {
      <h2 class="my-3 text-xl font-semibold">Usage</h2>
    <hr class="mb-3" />
    <flash-highlighter language="javascript">
      <ng-content select="[slot=usage-import]"></ng-content>
    </flash-highlighter>
    <br>
    <flash-highlighter language="javascript">
      <ng-content select="[slot=usage-component]"></ng-content>
    </flash-highlighter>
    }
  `,
  standalone: true,
  imports: [HighlighterComponent, TabComponent],
})
export class InstallationComponent {
  currentTab = model<string>('npm');
  provideUsage = input<boolean>(false);
}
