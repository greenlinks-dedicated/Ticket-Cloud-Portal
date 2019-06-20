import { Routes } from '@angular/router';

import { View_Guest_ListComponent } from './View_Guest_List/View_Guest_List.component';
import { Create_GuestComponent } from './Create_Guest/Create_Guest.component'
import { Edit_GuestComponent } from './Edit_Guest/Edit_Guest.component'

export const GuestListRoutes: Routes = [
    {
        path: '',
        children: [{
            path: 'viewguestlist',
            component: View_Guest_ListComponent
        }]
    },
    {
        path: '',
        children: [{
            path: 'editguest',
            component: Edit_GuestComponent
        }]
    },
    {
        path: '',
        children: [{
            path: 'createguest',
            component: Create_GuestComponent
        }]
    }
];
