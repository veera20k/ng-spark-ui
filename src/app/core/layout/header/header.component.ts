import { Component } from '@angular/core';

@Component({
  selector: 'flash-header',
  template: `<div
    class=" h-[50px] border-b w-full border-gray-200 shadow-sm top-0 left-0 fixed backdrop-blur-md"
  >
    <div class="flex items-center py-2 lg:px-12 px-6">
    <span role="button" class="mx-4 font-medium inline md:hidden text-lg"> ☰ </span>
      <img src="favicon.ico" alt="Logo" class="h-8 w-8" />
      <h2 class="text-2xl font-bold ml-4">Flash UI</h2>
    </div>
  </div>`,
  standalone: true,
})
export class HeaderComponent {}
