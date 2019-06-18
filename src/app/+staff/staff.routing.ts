import { Routes } from '@angular/router';

import { View_StaffComponent } from './View_Staff/View_Staff.component';
import { Create_MemberComponent } from './Create_Member/Create_Member.component'

export const StaffRoutes: Routes = [
    {
        path: '',
        children: [{
            path: 'viewstaff',
            component: View_StaffComponent
        }]
    }, {
        path: '',
        children: [{
            path: 'createmember',
            component: Create_MemberComponent
        }]
    }
];
