import { Component } from '@angular/core';
import { Component1 } from './component1';
import { Component2 } from './component2';
import { Component3 } from './component3';

// https://angular.dev/guide/defer#blocks

@Component({
    selector: 'defer-demo',
    standalone: true,
    imports: [Component1, Component2, Component3],
    template: `
        <h1>Deferred loading</h1>
        <p>Defer loading of components until they are needed.</p>

        <h2>Load when the view finish rendering</h2>

        @defer (on immediate) {
            <component-one />
        }

        <h2>Load on interaction</h2>

        @defer (on interaction) {
            <component-two />
        } @placeholder {
            <button>Load component</button>
        }

        <h2 #header style="margin: 150vh 0 2rem;">
            Load when element enters the viewport
        </h2>

        @defer (on viewport(header)) {
            <component-three />
        }
    `,
})
export class DeferDemo {}
