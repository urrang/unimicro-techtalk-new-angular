import { Component } from '@angular/core';
import { ChildComponent } from "./child-component";

@Component({
    selector: 'input-transforms',
    standalone: true,
    imports: [ChildComponent],
    template: `
        <h1>Input transforms</h1>

        <child-component
            name="Anders"
            number="2"
            blue
        />
    `
})
export default class InputTransformsDemo {}
