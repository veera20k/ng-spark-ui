import {
  Component,
  ElementRef,
  HostListener,
  inject,
  Input,
  output,
  ViewContainerRef,
} from '@angular/core';
import { DialogOptions } from '../../../../core/models/dialog-options.model';
import { ClickOutsideDirective } from '../../../../core/directives/click-outside.directive';
import { NgClass } from '@angular/common';

@Component({
  selector: 'spark-modal-base',
  standalone: true,
  template: `
  <div [ngClass]="{'bg-black/60 fixed inset-0 z-50 h-full w-full top-0 left-0': options.backdrop}">
  <div clickOutside (clickOutsideEvent)="options.closeOnBackdropClick && removeModal()" class="w-fit">
      <ng-content/>
    </div>
  </div>
  `,
  imports: [ClickOutsideDirective, NgClass],
})
export class ModalBaseComponent {
  elementRef = inject(ElementRef);
  closeEvent = output();
  viewContainerRef = inject(ViewContainerRef);
  @Input() options: DialogOptions = {
    backdrop: true,
    closeOnBackdropClick: true,
    disableScroll: true,
  };

  @HostListener('document:keydown.escape', ['$event'])
  onKeydownHandler() {
    this.removeModal();
  }

  removeModal() {
    this.closeEvent.emit();
  }

}
