import { Component } from '@angular/core';

@Component({
  selector: 'spark-how-to-use',
  template: `<div class="p-4">
    <p>
      To use the components from spark UI in your Angular project, you can
      directly copy and paste the code from the GitHub repository provided on
      each page of the library. spark UI is built with Tailwind CSS and Angular,
      and is compatible with Angular version 17 and above. This approach
      eliminates the need for npm CLI installation, allowing you to integrate
      the components by including the relevant code snippets into your project.
    </p>
    <br />
    <p>
      Simply visit the GitHub repository, locate the specific components you
      need, and copy the code into your Angular project. Ensure that you also
      include Tailwind CSS in your project setup to maintain the styling of the
      components. This method offers a straightforward way to incorporate spark
      UI components into your application without the need for additional
      package management.
    </p>
    <br />
    <p>
      I am currently focusing on enhancing the dynamic capabilities and
      optimization of the spark UI components to ensure they perform efficiently
      and adapt to various use cases with ease. This includes refining the
      components for better responsiveness, scalability, and overall performance
      to meet the needs of diverse projects and environments.
    </p>
    <br />
    <p>
      Additionally, I am working on improving accessibility to ensure that all
      components adhere to best practices and are usable by individuals with
      different abilities. Alongside these improvements, I am also developing a
      streamlined npm CLI integration, which will eventually allow users to
      install and manage the spark UI components more conveniently through npm,
      simplifying the setup and usage process for Angular projects.
    </p>
  </div> `,
  standalone: true,
})
export class HowToUseComponent {}
