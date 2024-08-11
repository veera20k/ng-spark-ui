import { NgClass } from '@angular/common';
import { PrismHighlightDirective } from '../../../core/directives/higlighter.directive';
import { Component, input } from '@angular/core';

@Component({
  selector: 'flash-highlighter',
  template: `
    <pre class="!p-0 !m-0 rounded-lg bg-black">
        <code [ngClass]="'language-'+ language()"  flashHighlight>
            <ng-content />
        </code>
    </pre>
  `,
  standalone: true,
  imports: [NgClass, PrismHighlightDirective],
})
export class HighlighterComponent {
  language = input.required<string>();
}
