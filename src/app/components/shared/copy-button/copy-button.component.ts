import { Component, HostListener, output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from '../../ui/button/button.component';
import { faClipboard } from '@fortawesome/free-regular-svg-icons/faClipboard';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';

@Component({
    selector: 'spark-copy-button',
    template: `
    <spark-button variant="outlined">
      <fa-icon [icon]="icon"></fa-icon>
    </spark-button>
  `,
    imports: [FontAwesomeModule, ButtonComponent]
})
export class CopyButtonComponent {
  faClipboard = faClipboard;
  faCheck = faCheck;
  icon = faClipboard;
  timer!: ReturnType<typeof setTimeout>;
  copyEvent = output();
  
  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    this.copyEvent.emit();
    this.icon = faCheck;
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(() => {
      this.icon = faClipboard;
    }, 1000);
  }
  
}
