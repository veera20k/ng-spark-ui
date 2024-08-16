import { Component } from '@angular/core';
import { InstallationStepComponent } from '../installation-step/installation-step.component';

@Component({
  selector: 'flash-clickoutside-highlighter-directive',
  template: ` <flash-installation-step [stepNumber]="3" [code]="directiveCode">
    <code slot="title"
      >Create file <span class="underline">clickoutside.directive.ts</span> and
      copy and paste the following code into your directives folder.</code
    >
  </flash-installation-step>`,
  standalone: true,
  imports: [InstallationStepComponent],
})
export class ClickoutsideHighlighterDirectiveComponent {
  directiveCode = `
  import { Directive, ElementRef, HostListener, inject, output } from '@angular/core';

  @Directive({
    selector: '[clickOutside]',
    standalone: true,
  })
  export class ClickOutsideDirective {
    private elementRef = inject(ElementRef);
    clickOutsideEvent = output();

    @HostListener('document:click', ['$event.target'])
    public onClickHandler(targetElement: HTMLElement) {
      const clickedInside = this.elementRef.nativeElement.contains(targetElement);
      if (!clickedInside) {
        this.clickOutsideEvent.emit();
      }
    }
  }`;
}
