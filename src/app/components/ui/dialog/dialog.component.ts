import { Component, inject, input } from '@angular/core';
import { ComponentLoaderService } from '../../../core/services/component-loader/component-loader.service';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'spark-dialog',
  standalone: true,
  template: `
    <div class="flex flex-col space-y-2 text-center sm:text-left">
      <h2 class="text-lg font-semibold">
        <ng-content select="[slot=title]"></ng-content>
      </h2>
      <p class="text-sm text-muted-foreground my-10">
        <ng-content select="[slot=description]"></ng-content>
      </p>
    </div>
    <div
      class="flex flex-col-reverse mt-4 sm:flex-row sm:justify-end sm:space-x-2"
    >
      <spark-button variant="outlined" (clickEvent)="cmptLoaderService.close()">Cancel</spark-button>
      <spark-button>Submit</spark-button>
    </div>
  `,
  host: {
    class:
      'fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-50 w-[500px] bg-white rounded-lg border p-6 animate-scale-in',
  },
  imports: [ButtonComponent],
})
export class DialogComponent {
  cmptLoaderService = inject(ComponentLoaderService);

}
