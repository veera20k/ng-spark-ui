import { NgClass } from '@angular/common';
import { PrismHighlightDirective } from '../../../core/directives/higlighter.directive';
import { Component, input } from '@angular/core';

@Component({
    selector: 'spark-highlighter',
    template: `
    <pre class="p-0! m-0! rounded-lg bg-black relative h-full">
        <code [ngClass]="'language-'+ language()"  sparkHighlight>
            <ng-content />
        </code>
    </pre>re
  `,
    imports: [NgClass, PrismHighlightDirective]
})
export class HighlighterComponent {
  language = input.required<string>();
}
