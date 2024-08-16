import { Component, input } from "@angular/core";
import { InstallationStepComponent } from "../installation-step/installation-step.component";

@Component({
  selector: "flash-installation-wrap",
  template: `
    <br />
     <h2 class="text-xl font-bold">Installation & Usage</h2>
    <br />
    <flash-installation-step [stepNumber]="1">
      <code slot="title"> Install tailwindcss from <a href="https://tailwindcss.com/docs/guides/angular" class="text-blue-500 hover:underline" target="_blank">here</a> </code> 
    </flash-installation-step>
    <ng-content/>
  `,
  standalone: true,
  imports: [InstallationStepComponent],
  host: {
    class: 'px-4 block',
  }
})
export class InstallationWrapComponent {
}