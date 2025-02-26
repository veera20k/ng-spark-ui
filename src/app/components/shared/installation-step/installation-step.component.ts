import { Component, input } from '@angular/core';
import { HighlighterComponent } from '../highlighter/highlighter.component';

@Component({
    selector: 'spark-installation-step',
    template: `
    <div class="flex flex-col gap-3 pl-8 border-l pb-6" id="installation-step">
      <h2 id="step-title" class="before:content-[attr(step)] before:text-sm" [attr.step]="stepNumber()">
        <ng-content select="[slot=title]"></ng-content>
      </h2>
      @if (code()) {
        <spark-highlighter [language]="language()">
          {{ code() }}
        </spark-highlighter>
      }
    </div>
  `,
    styles: [
        `
      #step-title:before {
        position: absolute;
        display: inline-flex;
        height: 2.25rem;
        width: 2.25rem;
        align-items: center;
        justify-content: center;
        border-radius: 9999px;
        border-width: 4px;
        border-color: hsl(var(--background));
        background-color: hsl(var(--muted));
        text-align: center;
        text-indent: -1px;
        margin-left: -50px;
        margin-top: -4px;
      }
    `,
    ],
    host: {
        class: 'relative',
    },
    imports: [HighlighterComponent]
})
export class InstallationStepComponent {
  code = input('');
  language = input('javascript');
  stepNumber = input.required<number>();
}
