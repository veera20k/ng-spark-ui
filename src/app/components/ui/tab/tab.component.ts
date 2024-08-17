import { NgClass, NgTemplateOutlet, TitleCasePipe } from '@angular/common';
import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'spark-tab',
  standalone: true,
  template: `
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
  `,
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
}
