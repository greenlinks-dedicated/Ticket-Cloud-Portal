import { Routes } from '@angular/router';

import { View_Guest_ListComponent } from './View_Guest_List/View_Guest_List.component';
//import { Create_EventComponent } from './Create_Event/Create_Event.component'

export const GuestListRoutes: Routes = [
    {
        path: '',
        children: [{
            path: 'viewguestlist',
            component: View_Guest_ListComponent
        }]
    }
];
