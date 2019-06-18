import { Routes } from '@angular/router';

import { View_ReportsComponent } from './View_Reports/View_Reports.component';

export const ReportsRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: 'viewreports',
        component: View_ReportsComponent
    }]
}
];
