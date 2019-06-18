import { Routes } from '@angular/router';

import { View_Attandance_ListComponent } from './View_Attandance_List/View_Attandance_List.component';

export const AttandeesRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: 'viewattandancelist',
        component: View_Attandance_ListComponent
    }]
}
];
