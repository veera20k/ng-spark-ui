import { Component, inject, TemplateRef } from '@angular/core';
import { ComponentLoaderService } from '../../../core/services/component-loader/component-loader.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'flash-sheet',
  standalone: true,
  template: `
    <div (click)="openSheet($event, sheetRef)">
      <ng-content select="[slot=trigger]"> </ng-content>
    </div>
    <ng-template #sheetRef>
      <div class="h-screen w-fit bg-white p-3 relative animate-sheet-in">
        <span
          class="absolute top-1.5 right-2 cursor-pointer"
          (click)="closeSheet()"
        >
          <ng-content select="[slot=close]"></ng-content>
        </span>
        <ng-content select="[slot=content]"></ng-content>
      </div>
    </ng-template>
  `,
  imports: [NgClass],
})
export class SheetComponent {
  cmptLoaderService = inject(ComponentLoaderService);

  openSheet(event: MouseEvent, sheetRef: TemplateRef<unknown>) {
    this.cmptLoaderService.open(event, sheetRef);
  }

  closeSheet() {
    this.cmptLoaderService.close();
  }
}
