import { Routes } from '@angular/router';
import { DeferDemo } from './defer/defer';
import { ControlFlowDemo } from './control-flow/control-flow';
import { MiscDemo } from './misc/misc';

export const routes: Routes = [
    {
        title: 'Miscellaneous',
        path: '',
        component: MiscDemo,
    },
    {
        title: 'Input transforms',
        path: 'input-transforms',
        loadComponent: () => import('./input-transforms/input-transforms'),
    },
    {
        title: 'Control flow',
        path: 'control-flow',
        component: ControlFlowDemo,
    },
    {
        title: 'Deferred loading',
        path: 'defer',
        component: DeferDemo,
    },
];
