import { DOCUMENT } from '@angular/common';
import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  inject,
  Injectable,
  Injector,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { DialogOptions } from '../../models/dialog-options.model';
import { ModalBaseComponent } from '../../../components/ui/base/modal-base/modal-base.component';
import { createComponent } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ComponentLoaderService {
  private document = inject(DOCUMENT);
  private resolver = inject(ComponentFactoryResolver);
  private injector = inject(Injector);
  private componentRefs: ComponentRef<ModalBaseComponent>[] = [];
  options: DialogOptions[] = [];

  open(
    event: MouseEvent,
    content: TemplateRef<unknown>,
    options?: DialogOptions
  ) {
    event.stopPropagation();
    // const appRef = this.injector.get(ApplicationRef);
    // const compRef = createComponent(ModalBaseComponent, {
    //   environmentInjector: appRef.injector,
    //   projectableNodes: content.createEmbeddedView(null).rootNodes,
    // });
    // appRef.attachView(compRef.hostView);

    const contentViewRef = content.createEmbeddedView(null);
    const ref = this.resolver
      .resolveComponentFactory(ModalBaseComponent)
      .create(this.injector, [contentViewRef.rootNodes]);
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
    ref.instance.viewContainerRef.insert(contentViewRef);
    ref.hostView.detectChanges();
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
