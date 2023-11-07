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
        <p>Defer loading of a component until they are needed.</p>

        <h2>Load as soon as the view finish rendering</h2>

        @defer (on immediate) {
            <component-one />
        }

        <h2>Load on interaction</h2>

        @defer (on interaction) {
            <component-two />
        } @placeholder {
            <button>Load component</button>
        }

        <div #myelement style="margin: 150vh 0 2rem;">
            Component will load when this element enters the viewport
        </div>

        @defer (on viewport(myelement)) {
            <component-three />
        }
    `,
})
export class DeferDemo {}
