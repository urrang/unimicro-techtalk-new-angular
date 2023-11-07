import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, RouterLink],
    template: `
        <nav>
            <a routerLink="/input-transforms">Input transforms</a>
            <a routerLink="/defer">Deferred loading</a>
            <a routerLink="/performance">Performance</a>
        </nav>

        <router-outlet></router-outlet>
    `,
})
export class AppComponent {
    title = 'angular17';
}
