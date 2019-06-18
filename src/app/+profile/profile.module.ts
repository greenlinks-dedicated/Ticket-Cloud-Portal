import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { TagInputModule } from 'ngx-chips';
import { SelectModule } from 'ng2-select';
import { MaterialModule } from '../app.module';

import { ProfileRoutes } from './profile.routing';


import { View_profileComponent } from './view_profile/view_profile.component';
import { View_banking_detailsComponent } from './view_banking_details/view_banking_details.component'

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ProfileRoutes),
        FormsModule,
        ReactiveFormsModule,
        NouisliderModule,
        TagInputModule,
        MaterialModule
    ],
    declarations: [
        View_profileComponent,
        View_banking_detailsComponent
    ]
})

export class ProfileModule { }
