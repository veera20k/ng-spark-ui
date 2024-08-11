import { NgClass, NgTemplateOutlet } from '@angular/common';
import { Component, input } from '@angular/core';
import { InputBaseComponent } from '../base/input-base/input-base.component';

@Component({
  selector: 'flash-input',
  standalone: true,
  template: `
    <label class="text-sm font-medium">
      <ng-content select="[slot=label]">
      </ng-content>
    </label>
    <ng-template #input let-iconPadding="iconpadding">
      <input
        flashInput
        [type]="type()"
        [placeholder]="placeholder()"
        [disabled]="disabled()"
        [value]="value()"
        [ngClass]="[iconPadding|| '', !border() ? 'border-none' : '', !outlined() ? 'focus-visible:ring-0' : '']"
      />
    </ng-template>
    @if (iconSide()) {
        <div class="relative">
            <div class="absolute top-2" [ngClass]="iconSide() === 'left' ? 'left-3' : 'right-3'">
                <ng-content select="[slot=icon]"/>
            </div>
            <ng-container [ngTemplateOutlet]="input" [ngTemplateOutletContext]="{iconPadding: iconSide() === 'left' ? 'pl-8' : 'pr-8'}"></ng-container>
        </div>
    } @else {
        <ng-container [ngTemplateOutlet]="input"></ng-container>
    }
  `,
  host: {
    class :"grid w-full max-w-sm items-center gap-1.5"
  },
  imports: [NgClass, NgTemplateOutlet, InputBaseComponent]
})
export class InputComponent {
    placeholder = input('');
    type = input('text');
    value = input('');
    disabled = input(false);
    border = input(true);
    outlined = input(false);
    iconSide = input<'left' | 'right'>('left');
}
