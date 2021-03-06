import { Routes } from '@angular/router';

import { View_profileComponent } from './view_profile/view_profile.component';
import { View_banking_detailsComponent } from './view_banking_details/view_banking_details.component'
import { Update_profileComponent } from './update_profile/update_profile.component'

export const ProfileRoutes: Routes = [
    {
        path: '',
        children: [{
            path: 'viewprofile',
            component: View_profileComponent
        }]
    },     {
        path: '',
        children: [{
            path: 'editprofile',
            component: Update_profileComponent
        }]
    }, {
        path: '',
        children: [{
            path: 'viewbankingdetails',
            component: View_banking_detailsComponent
        }]
    }
];
