import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/layout/header/header.component';
import { SidebarComponent } from './core/layout/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarComponent],
  template: `
    <flash-header></flash-header>
    <div class="mt-[50px] px-12 pt-10 pb-4 grid grid-cols-5 gap-4">
      <flash-sidebar></flash-sidebar>
      <div class="col-span-3">
      <router-outlet></router-outlet>
      </div>
    </div>
  `,
})
export class AppComponent {
  title = 'falsh-ui';
}
