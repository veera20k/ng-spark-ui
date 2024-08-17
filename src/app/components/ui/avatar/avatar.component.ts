import { Component } from '@angular/core';

@Component({
  selector: 'spark-avatar',
  standalone: true,
  template: ` <ng-content/>`,
  host: {
    class:
      'flext items-center justify-center rounded-full bg-primary-foreground text-white h-7 w-7',
  },
})
export class AvatarComponent {}
