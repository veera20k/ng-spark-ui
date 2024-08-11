import { Component } from "@angular/core";

@Component({
    selector: "button[flashButton]",
    template: `<ng-content/>`,
    standalone: true,
    host: {
        class: 'rounded-md px-4 py-2 font-medium text-sm transition-colors disabled:pointer-events-none disabled:opacity-50',
        ['type']: 'button',
    }
})

export class ButtonBaseComponent {
}