import { NgStyle, NgClass } from '@angular/common';
import {
  Component,
  computed,
  ElementRef,
  Host,
  HostListener,
  inject,
  input,
  output,
} from '@angular/core';
import { ToasterOptions } from '../../../core/models/dialog-options.model';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'flash-toast',
  standalone: true,
  template: `
    <div
      class="shadow fixed p-3 flex flex-row gap-2 items-center bg-white border max-w-[350px] rounded-xl group"
      [ngClass]="toastClass()"
    >
      <div class="flex-1 flex flex-col gap-2">
        <h2>{{ options().title }}</h2>
        <p class="text-sm">{{ options().description }}</p>
      </div>
      <div
        class="absolute top-1 right-2 cursor-pointer hidden group-hover:block"
        (click)="closeEvent.emit()"
      >
        ✖
      </div>
      @if (options().actionLabel) {
      <flash-button (clickEvent)="actionClick()">{{
        options().actionLabel
      }}</flash-button>
      }
    </div>
  `,
  imports: [NgStyle, NgClass, ButtonComponent],
})
export class ToastComponent {
  elementRef = inject(ElementRef);
  options = input<ToasterOptions>({
    variant: 'primary',
    title: 'My Toaster Title',
    description: 'This is a toaster description text that can be long or short. This is a toaster description text that can be long or short. This is a toaster description text that can be long or short.',
  });
  closeEvent = output();
  timeout!: ReturnType<typeof setTimeout>;

  ngOnInit(): void {
    this.closeAfterTimeout();
  }

  @HostListener('mouseover', ['$event'])
  onStartHover(event: MouseEvent): void {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  @HostListener('mouseout', ['$event'])
  onEndHover(event: MouseEvent): void {
    this.closeAfterTimeout();
  }

  toastClass = computed(() => {
    let classes = '';
    switch (this.options().variant) {
      case 'success':
        classes = 'bg-green-500 text-white';
        break;
      case 'info':
        classes = 'bg-blue-500 text-white';
        break;
      case 'warning':
        classes = 'bg-yellow-500 text-white';
        break;
      case 'error':
        classes = 'bg-red-600 text-white';
        break;
      default:
        classes = 'bg-white text-primary';
    }
    switch (this.options().position) {
      case 'top-left':
        classes += ' top-0 left-0';
        break;
      case 'bottom-right':
        classes += ' bottom-0 right-0';
        break;
      case 'bottom-left':
        classes += ' bottom-0 left-0';
        break;
      default:
        classes += ' top-5 right-5';
        break;
    }
    return classes;
  });

  actionClick() {
    const onActionClick = this.options()?.onActionClick;
    if (typeof onActionClick === 'function') {
      onActionClick();
    }
  }

  @HostListener('document:keydown.escape', ['$event'])
  onKeydownHandler() {
    this.closeEvent.emit();
  }

  closeAfterTimeout() {
    const timeout = this.options().timeout || 3000;
    this.timeout = setTimeout(() => {
      this.closeEvent.emit();
    }, timeout);
  }
}
