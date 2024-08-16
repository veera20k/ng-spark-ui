import { Component, inject, TemplateRef } from '@angular/core';
import { ComponentLoaderService } from '../../../core/services/component-loader/component-loader.service';
import { PreviewCodeTabsComponent } from '../../shared/preview-code-tabs/preview-code-tabs.component';
import { ButtonComponent } from '../../ui/button/button.component';
import { ToastComponent } from '../../ui/toast/toast.component';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { ToasterService } from '../../../core/services/toaster/toaster.service';
import { ToasterPosition } from '../../../core/models/common.model';

@Component({
  selector: 'flash-toaster-page',
  standalone: true,
  template: `
    <flash-page-header
      title="Toaster"
      description="A toaster is a small pop-up window that displays a brief message in response to a user action."
    ></flash-page-header>
    <flash-preview-code-tabs>
      <div class="grid grid-cols-3 gap-3" slot="preview">
        <flash-button
          variant="outlined"
          (clickEvent)="open($event, 'top-right')"
          >Top Right</flash-button
        >
        <flash-button
          variant="outlined"
          (clickEvent)="open($event, 'top-center')"
          >Top center</flash-button
        >
        <flash-button variant="outlined" (clickEvent)="open($event, 'top-left')"
          >Top Left</flash-button
        >
        <flash-button
          variant="outlined"
          (clickEvent)="open($event, 'bottom-right')"
          >Bottom Right</flash-button
        >
        <flash-button
          variant="outlined"
          (clickEvent)="open($event, 'bottom-center')"
          >Bottom Center</flash-button
        >
        <flash-button
          variant="outlined"
          (clickEvent)="open($event, 'bottom-left')"
          >Bottom Left</flash-button
        >
      </div>
    </flash-preview-code-tabs>
  `,
  imports: [
    PageHeaderComponent,
    PreviewCodeTabsComponent,
    ButtonComponent,
    ToastComponent,
  ],
})
export class ToasterPageComponent {
  private toasterService = inject(ToasterService);

  open(event: MouseEvent, side: ToasterPosition) {
    this.toasterService.open(event, {
      title: 'My Toaster',
      description:
        'This is a toaster description text that can be long or short',
      actionLabel: 'Try it',
      actionVariant: 'primary',
      position: side,
    });
  }

  currentTs = `
  import { Component, inject, TemplateRef } from '@angular/core';
  import { ComponentLoaderService } from '../../../core/services/component-loader/component-loader.service';
  import { ButtonComponent } from '../../ui/button/button.component';
  import { ToastComponent } from '../../ui/toast/toast.component';
  import { ToasterService } from '../../../core/services/toaster/toaster.service';
  import { ToasterPosition } from '../../../core/models/common.model';

  @Component({
    selector: 'flash-toaster-page',
    standalone: true,
    template: \`
        <div class="grid grid-cols-3 gap-3">
          <flash-button
            variant="outlined"
            (clickEvent)="open($event, 'top-right')"
            >Top Right</flash-button
          >
          <flash-button
            variant="outlined"
            (clickEvent)="open($event, 'top-center')"
            >Top center</flash-button
          >
          <flash-button variant="outlined" (clickEvent)="open($event, 'top-left')"
            >Top Left</flash-button
          >
          <flash-button
            variant="outlined"
            (clickEvent)="open($event, 'bottom-right')"
            >Bottom Right</flash-button
          >
          <flash-button
            variant="outlined"
            (clickEvent)="open($event, 'bottom-center')"
            >Bottom Center</flash-button
          >
          <flash-button
            variant="outlined"
            (clickEvent)="open($event, 'bottom-left')"
            >Bottom Left</flash-button
          >
        </div>
    \`,
    imports: [
      ButtonComponent,
      ToastComponent,
    ],
  })
  export class ToasterPageComponent {
    private toasterService = inject(ToasterService);

    open(event: MouseEvent, side: ToasterPosition) {
      this.toasterService.open(event, {
        title: 'My Toaster',
        description:
          'This is a toaster description text that can be long or short',
        actionLabel: 'Try it',
        actionVariant: 'primary',
        position: side,
      });
    }
  }`;

  component = `
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
    template: \`
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
          (click)="closeEvent.emit(refIdx())"
        >
          ✖
        </div>
        @if (options().actionLabel) {
        <flash-button (clickEvent)="actionClick()">{{
          options().actionLabel
        }}</flash-button>
        }
      </div>
    \`,
    imports: [NgStyle, NgClass, ButtonComponent],
  })
  export class ToastComponent {
    elementRef = inject(ElementRef);
    options = input<ToasterOptions>({
      variant: 'primary',
      title: 'My Toaster Title',
      description: 'This is a toaster description text that can be long or short. This is a toaster description text that can be long or short. This is a toaster description text that can be long or short.',
      position: 'bottom-right',
    });
    closeEvent = output<number>();
    timeout!: ReturnType<typeof setTimeout>;
    refIdx = input(0);

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
      const variantClasses: Record<string, string> = {
        default: 'bg-white text-primary',
        success: 'bg-green-500 text-white',
        info: 'bg-blue-500 text-white',
        warning: 'bg-yellow-500 text-white',
        error: 'bg-red-600 text-white',
      };
    
      const positionClasses: Record<string, string> = {
        'top-left': 'top-3 left-3 animate-slide-left-in',
        'top-right': 'top-3 right-3 animate-slide-right-in',
        'top-center': 'top-3 left-1/2 animate-slide-top-center-in -translate-x-1/2',
        'bottom-right': 'bottom-3 right-3 animate-slide-bottom-in',
        'bottom-left': 'bottom-3 left-3 animate-slide-bottom-in',
        'bottom-center': 'bottom-3 left-1/2 animate-slide-bottom-center-in -translate-x-1/2',
      };
    
      const variant = variantClasses[this.options().variant || 'primary'] || 'bg-white text-primary';
      const position = positionClasses[this.options().position || 'top-right'] || 'top-5 right-5 animate-slide-right-in'; 
    
      return \`\${variant} \${position}\`;
    });
    

    actionClick() {
      const onActionClick = this.options()?.onActionClick;
      if (typeof onActionClick === 'function') {
        onActionClick();
      }
    }

    @HostListener('document:keydown.escape', ['$event'])
    onKeydownHandler() {
      this.closeEvent.emit(this.refIdx());
    }

    closeAfterTimeout() {
      const timeout = this.options().timeout || 3000;
      this.timeout = setTimeout(() => {
        this.closeEvent.emit(this.refIdx());
      }, timeout);
    }
  }`;
}
