import { Component, computed, inject, input, TemplateRef } from '@angular/core';
import { ComponentLoaderService } from '../../../core/services/component-loader/component-loader.service';
import { NgClass } from '@angular/common';
import { Side } from '../../../core/models/common.model';

@Component({
  selector: 'spark-sheet',
  standalone: true,
  template: `
    <div (click)="openSheet($event, sheetRef)">
      <ng-content select="[slot=trigger]"> </ng-content>
    </div>
    <ng-template #sheetRef>
      <div class="bg-white p-3 absolute" [ngClass]="sheetStyles()">
        <span
          class="absolute top-1.5 right-2 cursor-pointer"
          (click)="closeSheet()"
        >
          ✖
        </span>
        <ng-content select="[slot=content]"></ng-content>
      </div>
    </ng-template>
  `,
  imports: [NgClass],
})
export class SheetComponent {
  side = input<Side>('left');
  cmptLoaderService = inject(ComponentLoaderService);

  openSheet(event: MouseEvent, sheetRef: TemplateRef<unknown>) {
    this.cmptLoaderService.open(event, sheetRef);
  }

  closeSheet() {
    this.cmptLoaderService.close();
  }

  sheetStyles = computed(() => {
    let classes = '';
    switch (this.side()) {
      case 'left':
        classes = 'animate-slide-left-in left-0 w-fit h-screen';
        break;
      case 'right':
        classes = 'animate-slide-right-in right-0 w-fit h-full';
        break;
      case 'top':
        classes = 'animate-slide-top-in top-0 w-screen h-fit';
        break;
      case 'bottom':
        classes = 'animate-slide-bottom-in bottom-0 w-full h-fit';
        break;
    }
    return classes;
  });
}
