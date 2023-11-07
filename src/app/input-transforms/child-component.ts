import { Component, Input, booleanAttribute, numberAttribute } from '@angular/core';

function trim(value: string | undefined) {
    value?.trim() ?? '';
}

@Component({
    selector: 'child-component',
    standalone: true,
    template: `
        <div class="card" [class.blue]="blue">
            Hello {{ name }}!
            {{ number }}x2 is {{ number * 2 }}
        </div>
    `,
    styles: `
        .blue {
            background: #E3F8FD;
        }
    `
})
export class ChildComponent {
    @Input({ required: true }) name: string;

    @Input({ transform: numberAttribute }) number: number;
    @Input({ transform: booleanAttribute }) blue: boolean;

    @Input({ transform: trim }) customTransform: string;
}
