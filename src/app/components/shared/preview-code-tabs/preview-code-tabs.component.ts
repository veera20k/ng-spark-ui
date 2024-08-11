import { Component, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { TabComponent } from '../../ui/tab/tab.component';
import { ButtonComponent } from '../../ui/button/button.component';
import { CopyButtonComponent } from '../copy-button/copy-button.component';
import { PrismHighlightDirective } from '../../../core/directives/higlighter.directive';
import { HighlighterComponent } from '../highlighter/highlighter.component';

@Component({
  selector: 'flash-preview-code-tabs',
  template: `
    <flash-tab
      [smartItems]="[{title: 'preview'}, {title: 'ts'}, {title: 'html'}]"
      (onTabeSwitch)="onTabeSwitch($event)"
    >
      <div class="border p-3 mt-7 relative">
        <header class="flex justify-end absolute right-9 top-5">
          <flash-copy-button></flash-copy-button>
        </header>
        <section
          class="h-[400px] overflow-y-auto rounded-sm"
          [ngClass]="{
            'flex justify-center items-center p-10': currentTab() === 'preview'
          }"
        >
        @switch (currentTab()) { 
          @case('preview') {
            <ng-content select="[slot=preview]" />
          }
          @case('ts') {
            <flash-highlighter language="javascript">
              <ng-content select="[slot=ts]" />
            </flash-highlighter>
          }
          @case('html') {
            <flash-highlighter language="html">
              <ng-content select="[slot=html]" />
            </flash-highlighter>
          }
          @case('css') {
            <flash-highlighter language="css">
              <ng-content select="[slot=css]" />
            </flash-highlighter>
          }
        }
        </section>
      </div>
    </flash-tab>
  `,
  standalone: true,
  imports: [
    TabComponent,
    ButtonComponent,
    CopyButtonComponent,
    NgClass,
    PrismHighlightDirective,
    HighlighterComponent
  ],
})
export class PreviewCodeTabsComponent {
  currentTab = signal('preview');
  onTabeSwitch(tab: string) {
    this.currentTab.set(tab);
  }
}
