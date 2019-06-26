import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { TagInputModule } from 'ngx-chips';
import { SelectModule } from 'ng2-select';
import { MaterialModule } from '../app.module';


import { EventRoutes } from './events.routing';


import { View_EventsComponent } from './View_Events/View_Events.component';
import { Create_EventComponent } from './Create_Event/Create_Event.component'
import { Edit_EventComponent } from './Edit_Event/Edit_Event.component';
import { Event_InfoComponent } from './Event_Info/Event_Info.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(EventRoutes),
        FormsModule,
        ReactiveFormsModule,
        NouisliderModule,
        TagInputModule,
        MaterialModule
    ],
    declarations: [
        View_EventsComponent,
        Create_EventComponent,
        Edit_EventComponent,
        Event_InfoComponent
    ]
})

export class EventModule { }
