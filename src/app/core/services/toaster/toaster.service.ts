import {
  ComponentFactoryResolver,
  ComponentRef,
  inject,
  Injectable,
  Injector,
} from '@angular/core';
import { ToastComponent } from '../../../components/ui/toast/toast.component';
import { DOCUMENT } from '@angular/common';
import { ToasterOptions } from '../../models/dialog-options.model';

@Injectable({
  providedIn: 'root',
})
export class ToasterService {
  private factory = inject(ComponentFactoryResolver);
  private injector = inject(Injector);
  private document = inject(DOCUMENT);
  private toasterRefs: ComponentRef<ToastComponent>[] = [];
  private options: ToasterOptions[] = [];

  public open(event: MouseEvent, options: ToasterOptions) {
    event.stopPropagation();
    this.options.push(options);
    const ref = this.createToastComponent(options);
    this.toasterRefs.push(ref);
    ref.instance.closeEvent.subscribe((idx) => this.close(idx));
    this.document.body.appendChild(ref.location.nativeElement);
  }

  private createToastComponent(options: ToasterOptions): ComponentRef<ToastComponent> {
    const ref = this.factory
      .resolveComponentFactory(ToastComponent)
      .create(this.injector);
    const refIdx = this.toasterRefs.length;
    ref.setInput('refIdx', refIdx);
    ref.setInput('options', { ...ref.instance.options, ...options });
    ref.hostView.detectChanges();
    return ref;
  }

  public close(index: number) {
    const ref = this.toasterRefs[index];
    const currOptions = this.options[index];
    currOptions?.afterClosed?.();
    ref?.instance.elementRef.nativeElement.remove();
    ref?.destroy();
  }
}
