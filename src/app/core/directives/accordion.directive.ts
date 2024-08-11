import { Directive, Input, ContentChildren, QueryList, AfterContentInit, input } from '@angular/core';
import { AccordionItemComponent } from '../../components/ui/accoridon-item/accordion-item.component';

@Directive({
  selector: '[flashAccordion]',
  standalone: true,
})
export class AccordionDirective implements AfterContentInit {
  mode = input<'single' | 'multiple'>('single');
  @ContentChildren(AccordionItemComponent) items!: QueryList<AccordionItemComponent>;

  ngAfterContentInit() {
    this.items.forEach((item, index) => {
      item.toggleEvent.subscribe((isOpen: boolean) => {
        this.onToggle(index);
      });
    });
  }

  onToggle(index: number) {
    if (this.mode() === 'single') {
      this.items.forEach((item, i) => {
        if (i !== index) {
          item.isOpen.set(false);
        }
      });
    }
  }
}
