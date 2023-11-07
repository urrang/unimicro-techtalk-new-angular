import { Routes } from '@angular/router';
import { DeferDemo } from './defer/defer';
import { InputTransformsDemo } from './input-transforms/input-transforms';

export const routes: Routes = [
    {
        title: 'Input transforms',
        path: 'input-transforms',
        component: InputTransformsDemo,
    },
    {
        title: 'Deferred loading',
        path: 'defer',
        component: DeferDemo,
    },
    {
        title: 'Performance test',
        path: 'performance',
        loadComponent: () => import('./performance/performance').then((m) => m.PerformanceDemo),
    },
];
