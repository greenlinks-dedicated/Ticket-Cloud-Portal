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
        Create_EventComponent
    ]
})

export class EventModule { }
