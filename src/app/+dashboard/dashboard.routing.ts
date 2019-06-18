import { Routes } from '@angular/router';

import { DashBoardComponent } from './dashboard.component';

export const DashBoardRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: 'Dashboard',
        component: DashBoardComponent
    }]
}
];
