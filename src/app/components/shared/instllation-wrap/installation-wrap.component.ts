import { Component, input } from "@angular/core";
import { InstallationStepComponent } from "../installation-step/installation-step.component";

@Component({
    selector: "spark-installation-wrap",
    template: `
    <br />
     <h2 class="text-xl font-bold">Installation & Usage</h2>
    <br />
    <div class="p-4">
    <spark-installation-step [stepNumber]="1">
      <code slot="title"> Install tailwindcss from <a href="https://tailwindcss.com/docs/guides/angular" class="text-blue-500 hover:underline" target="_blank">here</a> </code> 
    </spark-installation-step>
    <ng-content/>
    </div>
  `,
    imports: [InstallationStepComponent]
})
export class InstallationWrapComponent {
}