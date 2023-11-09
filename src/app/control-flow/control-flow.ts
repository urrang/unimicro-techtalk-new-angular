import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

type ListItem = { id: number; name: string };

@Component({
    selector: 'control-flow',
    standalone: true,
    templateUrl: './control-flow.html',
    styleUrl: './control-flow.css',
    imports: [CommonModule],
})
export class ControlFlowDemo {
    listVisible = false;
    list: ListItem[] = [];

    trackByFn = (index: number, item: ListItem) => item.id;

    addItems() {
        this.list = [
            { id: 1, name: 'Item 1' },
            { id: 2, name: 'Item 2' },
            { id: 3, name: 'Item 3' },
            { id: 4, name: 'Item 4' },
            { id: 5, name: 'Item 5' },
        ];
    }

    removeItems() {
        this.list = [];
    }
}
