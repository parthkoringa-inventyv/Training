import { ChangeDetectorRef, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { cmdResult } from './model/cli.model';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('AngularCLI');
  constructor(private cdr:ChangeDetectorRef){}
  outputs: string[] = [];
  cmdInput!: string;
  
  match: Record<string,cmdResult>= {
    "ng new my-app": {
      process: [
        "CREATE my-app/README.md (1064 bytes)",
        "CREATE my-app/.editorconfig (274 bytes)",
        "CREATE my-app/.gitignore (548 bytes)",
        "CREATE my-app/angular.json (2654 bytes)",
        "CREATE my-app/package.json (1042 bytes)",
        "CREATE my-app/tsconfig.json (903 bytes)",
        "CREATE my-app/tsconfig.app.json (263 bytes)",
        "CREATE my-app/tsconfig.spec.json (273 bytes)",
        "CREATE my-app/.vscode/extensions.json (130 bytes)",
        "CREATE my-app/.vscode/launch.json (470 bytes)",
        "CREATE my-app/.vscode/tasks.json (938 bytes)",
        "CREATE my-app/src/main.ts (250 bytes)",
        "CREATE my-app/src/index.html (294 bytes)",
        "CREATE my-app/src/styles.css (80 bytes)",
        "CREATE my-app/src/app/app.component.css (0 bytes)",
        "CREATE my-app/src/app/app.component.html (20884 bytes)",
        "CREATE my-app/src/app/app.component.spec.ts (929 bytes)",
        "CREATE my-app/src/app/app.component.ts (314 bytes)",
        "CREATE my-app/src/app/app.config.ts (311 bytes)",
        "CREATE my-app/src/app/app.routes.ts (77 bytes)",
        "✔ Packages installed successfully.",
      ],
      explanation: "The 'ng new' command creates a new Angular application with all necessary files.",
      success: "Successfully created project my-app. Get started with: cd my-app && ng serve"
    },

    "cd my-app": {
      process: [
        "Changed directory to: /workspace/my-app"
      ],
      explanation: "The 'cd' command changes the current working directory to the specified folder.",
      success: "Now in directory: my-app"
    },

    "cd childDir": {
      process: [
        "Changed directory to: /workspace/childDir"
      ],
      explanation: "The 'cd' command changes the current working directory to the specified folder.",
      success: "Now in directory: childDir"
    },

    "ng generate component my-comp": {
      process: [
        "CREATE src/app/my-comp/my-comp.component.css (0 bytes)",
        "CREATE src/app/my-comp/my-comp.component.html (23 bytes)",
        "CREATE src/app/my-comp/my-comp.component.spec.ts (601 bytes)",
        "CREATE src/app/my-comp/my-comp.component.ts (288 bytes)",
      ],
      explanation: "The 'ng generate component' command creates a new Angular component.",
      success: "Component 'my-comp' successfully created!"
    },

    "ng g c my-comp": {
      process: [
        "CREATE src/app/my-comp/my-comp.component.css (0 bytes)",
        "CREATE src/app/my-comp/my-comp.component.html (23 bytes)",
        "CREATE src/app/my-comp/my-comp.component.spec.ts (601 bytes)",
        "CREATE src/app/my-comp/my-comp.component.ts (288 bytes)",
      ],
      explanation: "The 'ng g c' is a shorthand for 'ng generate component'.",
      success: "Component 'my-comp' successfully created!"
    },

    "ng build": {
      process: [
        "Initial chunk files | Names         |  Raw size  | Estimated transfer size",
        "main.js             | main          | 198.23 kB  | 58.45 kB",
        "polyfills.js        | polyfills     |  33.02 kB  |  10.63 kB",
        "styles.css          | styles        |   0.09 kB  |   0.08 kB",
        "",
        "                    | Initial total | 231.34 kB | 69.16 kB",
        "",
        "Application bundle generation complete. [4.521 seconds]",
        "",
        "Outputs location: /dist/my-app/browser",
      ],
      explanation: "The 'ng build' command compiles the Angular application into outputs files in the dist/ directory. It performs ahead-of-time (AOT) compilation, bundling, and optimization.",
      success: "Build completed successfully. Outputs written to: dist/my-app/browser"
    },

    "ng serve": {
      process: [
        "Initial chunk files | Names         |  Raw size",
        "polyfills.js        | polyfills     |  83.60 kB  ",
        "main.js             | main          |  23.08 kB  ",
        "styles.css          | styles        |  95 bytes  ",
        "",
        "                    | Initial total | 106.76 kB",
        "",
        "Application bundle generation complete. [1.234 seconds]",
        "",
        "Watch mode enabled. Watching for file changes...",
        "NOTE: Raw file sizes do not reflect development server per-request transformations.",
        "->  Local:   http://localhost:4200/",
        "->  press h + enter to show help"
      ],
      explanation: "The 'ng serve' command builds and serves your application locally, rebuilding on file changes. It starts a development server with live reload capability.",
      success: "Development server is running at http://localhost:4200/"
    },

    "ng test": {
      process: [
        "⠙ Generating browser application bundles (phase: setup)...",
        "✔ Browser application bundle generation complete.",
        "Chrome Headless 120.0.6099.109 (Windows 10): Executed 3 of 3 SUCCESS (0.234 secs / 0.198 secs)",
        "TOTAL: 3 SUCCESS"
      ],
      explanation: "The 'ng test' command runs unit tests using vite testing framework.",
      success: "All tests passed successfully!"
    },
  }

  addWithDelay(...values: string[]) {
    // let  delayCounter: number = 200;
    values.forEach((val, index) => {
      setTimeout(() => {
        this.outputs.push(val);
        this.cdr.detectChanges();
        this.scrollToBottom();
      }, (index + 1) * 200);
      // delayCounter += 200;
    });
  }
  
  submit()
  {
    if(this.cmdInput == "cls")
    {
      this.outputs = [];
      this.cmdInput = '';
    }
    else
    {
      const matchedCMD = this.match[this.cmdInput];
      
      this.addWithDelay(`$ ${this.cmdInput}`)
      if(matchedCMD)
      {
        this.addWithDelay(...matchedCMD.process,matchedCMD.explanation,matchedCMD.success);
        // this.addWithDelay(...matchedCMD.process,matchedCMD.explanation,matchedCMD.success,`\n`);
      }
      else{
        this.addWithDelay(`!!!command not found ->  ${this.cmdInput}`);
      }
      this.cmdInput='';
    }
    // console.log(this.outputs);
    // this.outputs.length=0;
  }

  scrollToBottom() {
    setTimeout(() => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth'
        });
      }, 0);
  }

}

