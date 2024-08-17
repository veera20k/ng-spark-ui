import { Component } from '@angular/core';
import { InputBaseComponent } from '../base/input-base/input-base.component';
import { ButtonComponent } from '../button/button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons/faPaperPlane';

@Component({
  selector: 'spark-chat-input',
  standalone: true,
  template: `
    <textarea sparkInput> lorem ipsum dolor sit amet </textarea>
    <div class="absolute riggh-[10px] bottom-[18px]">
      <spark-button>
        <fa-icon
          [icon]="faPaperPlane"
          classe="fa-md text-primary-foreground"
        ></fa-icon>
      </spark-button>
    </div>
  `,
  imports: [InputBaseComponent, ButtonComponent, FontAwesomeModule],
  host: {
    class: 'relative',
  },
})
export class ChatInputComponent {
  faPaperPlane = faPaperPlane;
}
