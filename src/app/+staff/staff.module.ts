import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { TagInputModule } from 'ngx-chips';
import { SelectModule } from 'ng2-select';
import { MaterialModule } from '../app.module';

import { StaffRoutes } from './staff.routing';


import { View_StaffComponent } from './View_Staff/View_Staff.component';
import { Create_MemberComponent } from './Create_Member/Create_Member.component'

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(StaffRoutes),
        FormsModule,
        ReactiveFormsModule,
        NouisliderModule,
        TagInputModule,
        MaterialModule
    ],
    declarations: [
        View_StaffComponent,
        Create_MemberComponent
    ]
})

export class StaffModule { }
