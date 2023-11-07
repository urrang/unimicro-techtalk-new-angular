import { Routes } from '@angular/router';
import { DeferDemo } from './defer/defer';

export const routes: Routes = [
    {
        title: 'Performance test',
        path: 'performance',
        loadComponent: () => import('./performance/performance').then((m) => m.PerformanceDemo),
    },
    {
        title: 'Deferred loading',
        path: 'defer',
        component: DeferDemo,
    },
];
