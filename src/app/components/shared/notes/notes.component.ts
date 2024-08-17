import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons/faCircleInfo';

@Component({
  selector: 'spark-notes',
  standalone: true,
  template: `
    <br />
    <h2 class="text-xl font-bold">Notes</h2>
    <br>
    <div class="bg-gray-50 p-4 rounded-lg flex gap-2 text-sm text-gray-500">
      <fa-icon [icon]="faCircleInfo" class="fa-lg text-gray-600"></fa-icon>
      <ng-content></ng-content>
    </div>
    <br />
  `,
  imports: [FontAwesomeModule],
})
export class NotesComponent {
  faCircleInfo = faCircleInfo;
}
