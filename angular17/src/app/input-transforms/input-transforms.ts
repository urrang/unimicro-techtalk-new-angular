import { Component } from '@angular/core';
import { ChildComponent } from "./child-component";

@Component({
    selector: 'input-transforms',
    standalone: true,
    imports: [ChildComponent],
    template: `
        <child-component
            name="Anders"
            [number]="2"
            [blue]="true"
        />
    `
})
export class InputTransformsDemo {}
