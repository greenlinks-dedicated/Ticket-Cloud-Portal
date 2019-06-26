import { Routes } from '@angular/router';

import { View_Attandance_ListComponent } from './View_Attandance_List/View_Attandance_List.component';
import { Edit_AttandeeComponent } from './Edit_Attandee/Edit_Attandee.component';

export const AttandeesRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: 'viewattandancelist',
        component: View_Attandance_ListComponent
    }]
}, {

  path: '',
  children: [ {
    path: 'editattandee',
    component: Edit_AttandeeComponent
}]
}
];
