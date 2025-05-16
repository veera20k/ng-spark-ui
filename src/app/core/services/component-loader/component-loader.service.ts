import { DOCUMENT } from '@angular/common';
import {
  ApplicationRef,
  ComponentRef,
  EnvironmentInjector,
  inject,
  Injectable,
  TemplateRef,
} from '@angular/core';
import { DialogOptions } from '../../models/dialog-options.model';
import { ModalBaseComponent } from '../../../components/ui/base/modal-base/modal-base.component';
import { createComponent } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ComponentLoaderService {
  private document = inject(DOCUMENT);
  private injector = inject(EnvironmentInjector);
  private componentRefs: ComponentRef<ModalBaseComponent>[] = [];
  private appRef  = inject(ApplicationRef);
  options: DialogOptions[] = [];

  open(
    template: TemplateRef<unknown>,
    options?: DialogOptions
  ) {

// // Extract the native element of the IntroComponent
// const introNativeElement = (introCompRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;

// // Create DialogComponent instance with projectable content
// const dialogCompRef = createComponent(DialogComponent, {
//   environmentInjector: this.envInjector,
//   projectableNodes: [[introNativeElement]], // Pass IntroComponent content here
// });
    const content = template.createEmbeddedView(null);
    this.appRef.attachView(content);  
    const ref = createComponent(ModalBaseComponent, {
      environmentInjector: this.injector,
      projectableNodes: [content.rootNodes],
    });
    this.componentRefs.push(ref);
    if (typeof options === 'object') {
      this.options.push(options);
      ref.setInput('options', Object.assign(ref.instance.options, options));
    }
    if (options?.disableScroll !== false) {
      this.disableScroll();
    }
    ref.instance.closeEvent.subscribe(() => {
      this.close();
    });
    this.appRef.attachView(ref.hostView);
    this.document.body.appendChild(ref.location.nativeElement);
  }

  async close() {
    const currOptions = this.options.pop();
    const CurrRef = this.componentRefs.pop();
    if (typeof currOptions?.delay === 'number') {
      await new Promise((resolve) => setTimeout(resolve, currOptions.delay));
    }
    if (CurrRef) {
      CurrRef.instance.elementRef.nativeElement.remove();
      CurrRef.destroy();
    }
    if (this.componentRefs.length === 0) {
      this.enableScroll();
    }
    if (currOptions?.afterClosed) {
      currOptions.afterClosed();
    }
  }

  public enableScroll() {
    this.document.body.style.overflow = 'auto';
    this.document.body.style.paddingRight = '0';
  }

  public disableScroll() {
    this.document.body.style.overflow = 'hidden';
    this.document.body.style.paddingRight = '15px';
  }
}
