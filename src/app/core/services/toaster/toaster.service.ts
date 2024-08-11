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
  private toasterRefs: ComponentRef<ToastComponent>[] = [];
  private document = inject(DOCUMENT);
  private options: ToasterOptions[] = [];

  public open(event: MouseEvent, options: ToasterOptions) {
    event.stopPropagation();
    this.options.push(options);
    const ref = this.factory
      .resolveComponentFactory(ToastComponent)
      .create(this.injector);
    this.toasterRefs.push(ref);
    ref.instance.closeEvent.subscribe(() => {
      this.close();
    });
    ref.hostView.detectChanges();
    this.document.body.appendChild(ref.location.nativeElement);
  }

  close() {
    const currRef = this.toasterRefs.pop();
    const currOptions = this.options.pop();
    if (currOptions?.afterClosed) {
      currOptions.afterClosed();
    }
    if (currRef) {
      currRef.instance.elementRef.nativeElement.remove();
      currRef.destroy();
    }
  }
}
