import { Routes } from '@angular/router';

import { View_TicketsComponent } from './View_Tickets/View_Tickets.component';
import { Create_TicketComponent } from './Create_Ticket/Create_Ticket.component'

export const TicketRoutes: Routes = [
    {
        path: '',
        children: [{
            path: 'viewtickets',
            component: View_TicketsComponent
        }]
    }, {
        path: '',
        children: [{
            path: 'createticket',
            component: Create_TicketComponent
        }]
    }
];

