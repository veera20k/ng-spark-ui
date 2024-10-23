import { Component, inject, TemplateRef } from '@angular/core';
import { ComponentLoaderService } from '../../../core/services/component-loader/component-loader.service';
import { PreviewCodeTabsComponent } from '../../shared/preview-code-tabs/preview-code-tabs.component';
import { ButtonComponent } from '../../ui/button/button.component';
import { ToastComponent } from '../../ui/toast/toast.component';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { ToasterService } from '../../../core/services/toaster/toaster.service';
import { ToasterPosition } from '../../../core/models/common.model';
import { InstallationStepComponent } from "../../shared/installation-step/installation-step.component";
import { SparkLinkComponent } from "../../shared/link/spark-link.component";
import { InstallationWrapComponent } from "../../shared/instllation-wrap/installation-wrap.component";

@Component({
  selector: 'spark-toaster-page',
  standalone: true,
  template: `
    <spark-page-header
      title="Toaster"
      description="A toaster is a small pop-up window that displays a brief message in response to a user action."
    ></spark-page-header>
    <spark-preview-code-tabs>
      <div class="grid grid-cols-3 gap-3" slot="preview">
        <spark-button
          variant="outlined"
          (clickEvent)="open('top-right')"
          >Top Right</spark-button
        >
        <spark-button
          variant="outlined"
          (clickEvent)="open('top-center')"
          >Top center</spark-button
        >
        <spark-button variant="outlined" (clickEvent)="open('top-left')"
          >Top Left</spark-button
        >
        <spark-button
          variant="outlined"
          (clickEvent)="open('bottom-right')"
          >Bottom Right</spark-button
        >
        <spark-button
          variant="outlined"
          (clickEvent)="open('bottom-center')"
          >Bottom Center</spark-button
        >
        <spark-button
          variant="outlined"
          (clickEvent)="open('bottom-left')"
          >Bottom Left</spark-button
        >
      </div>
    </spark-preview-code-tabs>
    <spark-installation-wrap>
      <spark-installation-step [stepNumber]="2">
        <spark-link
          href="https://github.com/veera20k/spark-ui/blob/main/src/app/components/ui/popover/toast.component.ts"
          name="toast.component.ts"
          type="components"
          slot="title"
        ></spark-link>
      </spark-installation-step>
      <spark-installation-step [stepNumber]="3">
        <spark-link
          href="https://github.com/veera20k/spark-ui/blob/main/src/app/core/services/toaster/toaster.service.ts"
          name="component-loader.service.ts"
          type="services"
          slot="title"
        ></spark-link>
      </spark-installation-step>
      <spark-installation-step [stepNumber]="4" [code]="animation">
        <code slot="title"> Update you tailwind.config.js file. </code>
      </spark-installation-step>
    </spark-installation-wrap>
  `,
  imports: [
    PageHeaderComponent,
    PreviewCodeTabsComponent,
    ButtonComponent,
    ToastComponent,
    InstallationStepComponent,
    SparkLinkComponent,
    InstallationWrapComponent
],
})
export class ToasterPageComponent {
  private toasterService = inject(ToasterService);

  open(side: ToasterPosition) {
    this.toasterService.open({
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
    selector: 'spark-toaster-demo',
    standalone: true,
    template: \`
        <div class="grid grid-cols-3 gap-3">
          <spark-button
            variant="outlined"
            (clickEvent)="open('top-right')"
            >Top Right</spark-button
          >
          <spark-button
            variant="outlined"
            (clickEvent)="open('top-center')"
            >Top center</spark-button
          >
          <spark-button variant="outlined" (clickEvent)="open('top-left')"
            >Top Left</spark-button
          >
          <spark-button
            variant="outlined"
            (clickEvent)="open('bottom-right')"
            >Bottom Right</spark-button
          >
          <spark-button
            variant="outlined"
            (clickEvent)="open('bottom-center')"
            >Bottom Center</spark-button
          >
          <spark-button
            variant="outlined"
            (clickEvent)="open('bottom-left')"
            >Bottom Left</spark-button
          >
        </div>
    \`,
    imports: [
      ButtonComponent,
      ToastComponent,
    ],
  })
  export class ToasterDemoComponent {
    private toasterService = inject(ToasterService);

    open(side: ToasterPosition) {
      this.toasterService.open({
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
    selector: 'spark-toast',
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
        <spark-button (clickEvent)="actionClick()">{{
          options().actionLabel
        }}</spark-button>
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

  animation = `
  keyframes: {
   "slide-left-in": {
     "0%": {
       transform: "translateX(-100%)",
       opacity: "0.8",
     },
     "100%": {
       transform: "translateX(0)",
       opacity: "1",
     },
   },
   "slide-right-in": { 
     "0%": {
       transform: "translateX(100%)",
       opacity: "0.8",
     },
     "100%": {
       transform: "translateX(0)",
       opacity: "1",
     },
   },
   "slide-top-in": {
     "0%": {
       transform: "translateY(-100%)",
       opacity: "0.8",
     },
     "100%": {
       transform: "translateY(0)",
       opacity: "1",
     },
   },
   "slide-top-center-in": {
     "0%": {
       transform: "translate(-50%, -100%)",
       opacity: "0.8",
     },
     "100%": {
       transform: "translate(-50%, 0)",
       opacity: "1",
     },
   },
   "slide-bottom-center-in": {
     "0%": {
       transform: "translate(-50%, 100%)",
       opacity: "0.8",
     },
     "100%": {
       transform: "translate(-50%, 0)",
       opacity: "1",
     },
   },
   "slide-bottom-in": {
     "0%": {
       transform: "translateY(100%)",
       opacity: "0.8",
     },
     "100%": {
       transform: "translateY(0)",
       opacity: "1",
     },
   },
 },
 animation: {
   "slide-left-in": "slide-in('X', '-100%') 0.3s ease-in-out",
   "slide-right-in": "slide-in('X', '100%') 0.3s ease-in-out",
   "slide-top-in": "slide-in('Y', '-100%') 0.3s ease-in-out",
   "slide-bottom-in": "slide-in('Y', '100%') 0.3s ease-in-out",
   "slide-top-center-in": "slide-in('-50%', '-100%') 0.3s ease-in-out",
   "slide-bottom-center-in": "slide-in('-50%', '100%') 0.3s ease-in-out",
 }`;
}
