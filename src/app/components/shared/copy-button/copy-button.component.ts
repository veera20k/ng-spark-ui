import { Component, HostListener } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from '../../ui/button/button.component';
import { TabComponent } from '../../ui/tab/tab.component';
import { faClipboard } from '@fortawesome/free-regular-svg-icons/faClipboard';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';

@Component({
  selector: 'flash-copy-button',
  template: `
    <flash-button variant="outlined">
      <fa-icon [icon]="icon"></fa-icon>
    </flash-button>
  `,
  standalone: true,
  imports: [TabComponent, FontAwesomeModule, ButtonComponent],
})
export class CopyButtonComponent {
  faClipboard = faClipboard;
  faCheck = faCheck;
  icon = faClipboard;
  timer!: ReturnType<typeof setTimeout>;
  
  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    this.icon = faCheck;
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(() => {
      this.icon = faClipboard;
    }, 1000);
  }
  
}
