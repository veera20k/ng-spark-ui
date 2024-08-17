import {
  Component,
  ElementRef,
  signal,
  ViewChild,
  viewChild,
} from '@angular/core';
import { NgClass } from '@angular/common';
import { TabComponent } from '../../ui/tab/tab.component';
import { ButtonComponent } from '../../ui/button/button.component';
import { CopyButtonComponent } from '../copy-button/copy-button.component';
import { PrismHighlightDirective } from '../../../core/directives/higlighter.directive';
import { HighlighterComponent } from '../highlighter/highlighter.component';

@Component({
  selector: 'spark-preview-code-tabs',
  template: `
    <spark-tab
      [smartItems]="[{ title: 'preview' }, { title: 'ts' }]"
      (onTabeSwitch)="onTabeSwitch($event)"
    >
      <div class="border p-3 mt-7 relative">
        <header class="flex justify-end absolute right-9 top-5 z-[1]">
          <spark-copy-button (copyEvent)="onCopy()"></spark-copy-button>
        </header>
        <section
          class="h-[350px] overflow-y-auto rounded-sm"
          [ngClass]="{
            'flex justify-center items-center p-10': currentTab() === 'preview'
          }"
        >
          @if (currentTab() === 'preview') {
          <ng-content select="[slot=preview]" />
          }
          <spark-highlighter
            language="javascript"
            [ngClass]="{ hidden: currentTab() !== 'ts' }"
          >
            <div #codeRef>
              <ng-content select="[slot=ts]" />
            </div>
          </spark-highlighter>
        </section>
      </div>
    </spark-tab>
  `,
  standalone: true,
  imports: [
    TabComponent,
    ButtonComponent,
    CopyButtonComponent,
    NgClass,
    PrismHighlightDirective,
    HighlighterComponent,
  ],
})
export class PreviewCodeTabsComponent {
  @ViewChild('codeRef', { static: true })
  coreRef!: ElementRef<HTMLElement>;
  currentTab = signal('preview');

  onTabeSwitch(tab: string) {
    this.currentTab.set(tab);
  }

  onCopy() {
    const text = this.coreRef.nativeElement.innerText;
    navigator.clipboard.writeText(text);
  }
}
