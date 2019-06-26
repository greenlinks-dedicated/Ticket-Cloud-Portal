import { Routes } from '@angular/router';

import { View_EventsComponent } from './View_Events/View_Events.component';
import { Create_EventComponent } from './Create_Event/Create_Event.component'
import { Edit_EventComponent } from './Edit_Event/Edit_Event.component';
import { Event_InfoComponent } from './Event_Info/Event_Info.component';

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
    },  {
        path: '',
        children: [{
            path: 'eventinfo',
            component: Event_InfoComponent
        }]
    }, {
        path: '',
        children: [{
            path: 'editevent',
            component: Edit_EventComponent
        }]
    }
];
