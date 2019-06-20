import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { TagInputModule } from 'ngx-chips';
import { SelectModule } from 'ng2-select';
import { MaterialModule } from '../app.module';


import { GuestListRoutes } from './guest_list.routing';

import { View_Guest_ListComponent } from './View_Guest_List/View_Guest_List.component';
import { Create_GuestComponent } from './Create_Guest/Create_Guest.component'
import { Edit_GuestComponent } from './Edit_Guest/Edit_Guest.component'

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(GuestListRoutes),
        FormsModule,
        ReactiveFormsModule,
        NouisliderModule,
        TagInputModule,
        MaterialModule
    ],
    declarations: [
        View_Guest_ListComponent,
        Create_GuestComponent,
        Edit_GuestComponent
    ]
})

export class GuestListModule { }
