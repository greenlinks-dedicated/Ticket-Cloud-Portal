import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdModule } from '../md/md.module';
import { MaterialModule } from '../app.module';

import { DashBoardComponent } from './dashboard.component';
import { DashBoardRoutes } from './dashboard.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(DashBoardRoutes),
        FormsModule,
        MdModule,
        MaterialModule
    ],
    declarations: [DashBoardComponent]
})

export class DashBoardModule {}
