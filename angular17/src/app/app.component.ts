import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
    template: `
        <nav>
            <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">
                Home
            </a>
            <a routerLink="/input-transforms" routerLinkActive="active">Input transforms</a>
            <a routerLink="/control-flow" routerLinkActive="active">Control flow syntax</a>
            <a routerLink="/defer" routerLinkActive="active">Deferred loading</a>
        </nav>

        <br />

        <router-outlet></router-outlet>
    `,
})
export class AppComponent {}
