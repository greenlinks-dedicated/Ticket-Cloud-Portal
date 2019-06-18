import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { TagInputModule } from 'ngx-chips';
import { SelectModule } from 'ng2-select';
import { MaterialModule } from '../app.module';


import { TicketRoutes } from './tictets.routing';


import { View_TicketsComponent } from './View_Tickets/View_Tickets.component';
import { Create_TicketComponent } from './Create_Ticket/Create_Ticket.component'

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(TicketRoutes),
        FormsModule,
        ReactiveFormsModule,
        NouisliderModule,
        TagInputModule,
        MaterialModule
    ],
    declarations: [
        View_TicketsComponent,
        Create_TicketComponent
    ]
})

export class TicketModule { }
