import { Directive, ElementRef, AfterViewInit, OnChanges } from '@angular/core';
import * as Prism from 'prismjs';

@Directive({
  selector: '[flashHighlight]',
  standalone: true,
})
export class PrismHighlightDirective implements AfterViewInit, OnChanges {

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.highlight();
  }

  ngOnChanges() {
    this.highlight();
  }

  private highlight() {
    Prism.highlightElement(this.el.nativeElement);
  }
}
