import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdModule } from '../md/md.module';
import { MaterialModule } from '../app.module';

import { View_Attandance_ListComponent } from './View_Attandance_List/View_Attandance_List.component';
import { AttandeesRoutes } from './attandees.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AttandeesRoutes),
        FormsModule,
        MdModule,
        MaterialModule
    ],
    declarations: [View_Attandance_ListComponent]
})

export class AttandeesModule {}
