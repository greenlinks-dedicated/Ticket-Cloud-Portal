import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdModule } from '../md/md.module';
import { MaterialModule } from '../app.module';
// import { LbdTableComponent } from '../lbd/lbd-table/lbd-table.component';



import { View_ReportsComponent } from './View_Reports/View_Reports.component';
import { ReportsRoutes } from './reports.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ReportsRoutes),
        FormsModule,
        MdModule,
        MaterialModule
    ],
    declarations: [View_ReportsComponent]
})

export class ReportsModule {}
