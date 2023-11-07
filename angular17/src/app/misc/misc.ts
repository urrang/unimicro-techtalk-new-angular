import { Component } from '@angular/core';

@Component({
    selector: 'misc-demo',
    standalone: true,
    template: `
        <h1>Miscellaneous</h1>

        <ul>
            <li>Vite and esbuild instead of webpack</li>
            <li>Self closing tags</li>
            <li>styles / styleUrl</li>
            <li>Standalone components (no more NgModule)</li>
            <li>Lazy loading route components</li>
            <li>Route titles</li>
        </ul>
    `,
    styles: `
        ul {
            padding: 0;
            margin: 0 1rem;
        }

        li {
            margin: 12px 0;
        }
    `,
})
export class MiscDemo {}
