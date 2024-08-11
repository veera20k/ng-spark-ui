import { Component } from "@angular/core";

@Component({
    selector: 'flash-header',
    template: `<div class="bg-white h-[50px] border-b w-full border-gray-200 shadow-sm absolute top-0 left-0">
        <div class="flex items-center px-12 py-2">
            <img src="favicon.ico" alt="Logo" class="h-8 w-8" />
            <h2 class="text-2xl font-bold ml-4">Flash UI</h2>
        </div>
    </div>`,
    standalone: true,
})
export class HeaderComponent {

}