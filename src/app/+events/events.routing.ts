import { Routes } from '@angular/router';

import { View_EventsComponent } from './View_Events/View_Events.component';
import { Create_EventComponent } from './Create_Event/Create_Event.component'
import { Edit_EventComponent } from './Edit_Event/Edit_Event.component';

export const EventRoutes: Routes = [
    {
        path: '',
        children: [{
            path: 'viewevents',
            component: View_EventsComponent
        }]
    }, {
        path: '',
        children: [{
            path: 'createevent',
            component: Create_EventComponent
        }]
    }, {
        path: '',
        children: [{
            path: 'editevent',
            component: Edit_EventComponent
        }]
    }
];
